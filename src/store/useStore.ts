import { create } from "zustand";
import { persist } from "zustand/middleware";

export type TransactionType = "personal" | "shared";
export type SplitType = "50-50" | "custom";

export interface Transaction {
    id: string;
    type: TransactionType;
    amount: number;
    category: string;
    date: string;
    description: string;
    paidBy: string; // auth.uid of the payer
    splitType?: SplitType;
    splitAmountA?: number; // These should probably become a map or array later, but keep simple for now
    splitAmountB?: number;
}

export interface Investment {
    id: string;
    name: string;
    amount: number;
    category: "RV" | "Monetario" | "Deposito";
    apy?: number;
    maturityDate?: string;
}

export interface Subscription {
    id: string;
    name: string;
    cost: number;
    period: "mensual" | "anual";
    paidBy: string; // auth.uid
}

export interface Goal {
    id: string;
    name: string;
    targetAmount: number;
    currentAmount: number;
    imageUrl?: string;
}

export interface UserState {
    id: string; // Real auth.uid
    salary: number;
    liquidity: number;
    investments: Investment[];
}

export interface NetWorthDataPoint {
    date: string;
    amount: number; // Combined or personal depending on view, simplify to total for now
}

export interface AppUser {
    id: string;
    email: string;
    display_name: string;
    avatar_url?: string;
}

export interface Household {
    id: string;
    name: string;
    invite_code: string;
}

export interface AppState {
    // Auth & Context
    session: any | null;
    user: AppUser | null;
    household: Household | null;
    members: AppUser[];

    // Personal Financial Data
    wealth: {
        salary: number;
        liquidity: number;
    };
    investments: Investment[];

    // Household Financial Data
    transactions: Transaction[];
    netWorthHistory: NetWorthDataPoint[];
    subscriptions: Subscription[];
    goals: Goal[];
    addTransaction: (t: Transaction) => void;
    deleteTransaction: (id: string) => void;

    // UI State
    isAddTxModalOpen: boolean;
    openAddTxModal: () => void;
    closeAddTxModal: () => void;

    // Wealth Management
    updateLiquidity: (amount: number) => void;
    updateSalary: (amount: number) => void;
    addInvestment: (investment: Investment) => void;
    deleteInvestment: (id: string) => void;
    updateInvestment: (investment: Investment) => void;

    // Pro Features (Goals & Subs)
    addSubscription: (sub: Subscription) => void;
    deleteSubscription: (id: string) => void;
    addGoal: (goal: Goal) => void;
    updateGoalProgress: (id: string, amountToAdd: number) => void;
    deleteGoal: (id: string) => void;

    settleDebt: () => void;
    getDebtBalance: () => { amount: number; whoOwes: string | null };
    getExpiringAssets: () => Investment[];

    // Supabase Sync Actions
    setSession: (session: any) => void;
    setHousehold: (household: Household | null) => void;
    setMembers: (members: AppUser[]) => void;
    setWealth: (wealth: { salary: number, liquidity: number }) => void;
    setInvestments: (investments: Investment[]) => void;
    setTransactions: (txs: Transaction[]) => void;
    setSubscriptions: (subs: Subscription[]) => void;
    setGoals: (goals: Goal[]) => void;
    signOut: () => Promise<void>;
}

const currentDate = new Date();

export const useStore = create<AppState>()(
    persist(
        (set, get) => ({
            session: null,
            user: null,
            household: null,
            members: [],

            wealth: {
                salary: 0,
                liquidity: 0,
            },
            investments: [],
            transactions: [],
            subscriptions: [],
            goals: [],
            netWorthHistory: [],
            isAddTxModalOpen: false,

            setSession: (session) => {
                if (!session) {
                    set({ session: null, user: null, household: null, members: [] });
                    return;
                }
                const user = session.user;
                set({
                    session,
                    user: {
                        id: user.id,
                        email: user.email,
                        display_name: user.user_metadata?.display_name || user.email?.split('@')[0],
                        avatar_url: user.user_metadata?.avatar_url
                    }
                });
            },

            setHousehold: (household) => set({ household }),
            setMembers: (members) => set({ members }),
            setWealth: (wealth) => set({ wealth }),
            setInvestments: (investments) => set({ investments }),
            setTransactions: (transactions) => set({ transactions }),
            setSubscriptions: (subscriptions) => set({ subscriptions }),
            setGoals: (goals) => set({ goals }),

            signOut: async () => {
                const { createClient } = await import("@/lib/supabase");
                const supabase = createClient();
                await supabase.auth.signOut();
                set({ session: null, user: null, household: null, members: [] });
            },

            openAddTxModal: () => set({ isAddTxModalOpen: true }),
            closeAddTxModal: () => set({ isAddTxModalOpen: false }),

            updateLiquidity: (amount) => set((state) => ({
                wealth: { ...state.wealth, liquidity: amount }
            })),
            updateSalary: (amount) => set((state) => ({
                wealth: { ...state.wealth, salary: amount }
            })),

            addInvestment: (investment) => set((state) => {
                return {
                    investments: [...state.investments, investment]
                };
            }),
            deleteInvestment: (id) => set((state) => ({
                investments: state.investments.filter(inv => inv.id !== id)
            })),
            updateInvestment: (investment) => set((state) => ({
                investments: state.investments.map(inv => inv.id === investment.id ? investment : inv)
            })),

            // --- Pro Features Actions ---
            addSubscription: (sub) => set((state) => ({
                subscriptions: [...state.subscriptions, sub]
            })),

            deleteSubscription: (id) => set((state) => ({
                subscriptions: state.subscriptions.filter(s => s.id !== id)
            })),

            addGoal: (goal) => set((state) => ({
                goals: [...state.goals, goal]
            })),

            updateGoalProgress: (id, amountToAdd) => set((state) => ({
                goals: state.goals.map(g =>
                    g.id === id
                        ? { ...g, currentAmount: Math.min(g.targetAmount, g.currentAmount + amountToAdd) }
                        : g
                )
            })),

            deleteGoal: (id) => set((state) => ({
                goals: state.goals.filter(g => g.id !== id)
            })),

            addTransaction: (t) => set((state) => ({ transactions: [t, ...state.transactions] })),
            deleteTransaction: (id) => set((state) => ({ transactions: state.transactions.filter(t => t.id !== id) })),
            settleDebt: () => {
                const balance = get().getDebtBalance();
                if (!balance.whoOwes || balance.amount === 0) return;
                set((state) => ({
                    transactions: [...state.transactions, {
                        id: Date.now().toString(),
                        amount: balance.amount,
                        category: "Liquidación",
                        type: "shared",
                        date: new Date().toISOString().split('T')[0],
                        description: "Liquidación de deudas",
                        paidBy: balance.whoOwes === get().user?.id ? get().user!.id : (balance.whoOwes as string), // The one who owes pays
                        splitType: "custom",
                        splitAmountA: 0,
                        splitAmountB: 0,
                    }]
                }));
            },
            getDebtBalance: () => {
                const me = get().user?.id;
                if (!me) return { amount: 0, whoOwes: null };

                let balance = 0; // Positive means partner owes ME, Negative means I owe partner

                get().transactions.forEach(t => {
                    if (t.type === "shared" && t.category !== "Liquidación") {
                        if (t.splitType === "50-50") {
                            if (t.paidBy === me) balance += t.amount / 2;
                            if (t.paidBy !== me) balance -= t.amount / 2;
                        } else if (t.splitType === "custom") {
                            // This logic will need to be updated to be truly dynamic with N members
                            // For now, assume custom splits are simplified or handle A/B gracefully
                            // Needs true transaction_splits implementation later.
                        }
                    } else if (t.category === "Liquidación") {
                        balance = 0;
                    }
                });

                if (balance > 0) return { amount: balance, whoOwes: "partner" };
                if (balance < 0) return { amount: Math.abs(balance), whoOwes: me };
                return { amount: 0, whoOwes: null };
            },
            getExpiringAssets: () => {
                const msEnUnDia = 24 * 60 * 60 * 1000;
                const ahora = new Date().getTime();

                return get().investments.filter((inv: Investment) => {
                    if (inv.category !== 'Deposito' || !inv.maturityDate) return false;
                    const diasRestantes = (new Date(inv.maturityDate).getTime() - ahora) / msEnUnDia;
                    return diasRestantes >= 0 && diasRestantes <= 30; // 30 días o menos
                });
            }
        }),
        {
            name: 'couple-capital-storage', // clave para el localStorage
        }
    )
);
