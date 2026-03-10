(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/supabase.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createClient",
    ()=>createClient,
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/createBrowserClient.js [app-client] (ecmascript)");
;
const createClient = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBrowserClient"])(("TURBOPACK compile-time value", "https://wlslgktrauvjsmeevinp.supabase.co"), ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indsc2xna3RyYXV2anNtZWV2aW5wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI2MDY3OTksImV4cCI6MjA4ODE4Mjc5OX0.1qaxYm1m-xxhrA4-07FjZHWPgR_hJMVrWdK8u8YQh_0"));
const supabase = createClient();
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/store/useStore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useStore",
    ()=>useStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/middleware.mjs [app-client] (ecmascript)");
;
;
const currentDate = new Date();
const useStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["persist"])((set, get)=>({
        session: null,
        user: null,
        household: null,
        members: [],
        wealth: {
            liquidity: 0
        },
        investments: [],
        transactions: [],
        subscriptions: [],
        goals: [],
        accounts: [],
        history: [],
        incomes: [],
        shoppingItems: [],
        tasks: [],
        meals: [],
        netWorthHistory: [],
        isAddTxModalOpen: false,
        setIncomes: (incomes)=>set({
                incomes
            }),
        addIncome: (income)=>set((state)=>({
                    incomes: [
                        income,
                        ...state.incomes
                    ]
                })),
        deleteIncome: (id)=>set((state)=>({
                    incomes: state.incomes.filter((i)=>i.id !== id)
                })),
        setUser: (user)=>{
            if (!user) {
                set({
                    session: null,
                    user: null,
                    household: null,
                    members: []
                });
                return;
            }
            // Assuming `user` here is the Supabase `User` object
            set({
                session: get().session,
                user: {
                    id: user.id,
                    email: user.email,
                    display_name: user.user_metadata?.display_name || user.email?.split('@')[0],
                    avatar_url: user.user_metadata?.avatar_url
                }
            });
        },
        setHousehold: (household)=>set({
                household
            }),
        setMembers: (members)=>set({
                members
            }),
        setWealth: (wealth)=>set({
                wealth
            }),
        setInvestments: (investments)=>set({
                investments
            }),
        setTransactions: (transactions)=>set({
                transactions
            }),
        setSubscriptions: (subscriptions)=>set({
                subscriptions
            }),
        setGoals: (goals)=>set({
                goals
            }),
        setAccounts: (accounts)=>set({
                accounts
            }),
        setHistory: (history)=>set({
                history
            }),
        // Home Hub Reducers
        setShoppingItems: (shoppingItems)=>set({
                shoppingItems
            }),
        addShoppingItem: (item)=>set((state)=>({
                    shoppingItems: [
                        item,
                        ...state.shoppingItems
                    ]
                })),
        updateShoppingItem: (id, updates)=>set((state)=>({
                    shoppingItems: state.shoppingItems.map((i)=>i.id === id ? {
                            ...i,
                            ...updates
                        } : i)
                })),
        deleteShoppingItem: (id)=>set((state)=>({
                    shoppingItems: state.shoppingItems.filter((i)=>i.id !== id)
                })),
        setTasks: (tasks)=>set({
                tasks
            }),
        addTask: (task)=>set((state)=>({
                    tasks: [
                        task,
                        ...state.tasks
                    ]
                })),
        updateTask: (id, updates)=>set((state)=>({
                    tasks: state.tasks.map((t)=>t.id === id ? {
                            ...t,
                            ...updates
                        } : t)
                })),
        deleteTask: (id)=>set((state)=>({
                    tasks: state.tasks.filter((t)=>t.id !== id)
                })),
        setMeals: (meals)=>set({
                meals
            }),
        addMeal: (meal)=>set((state)=>({
                    meals: [
                        ...state.meals,
                        meal
                    ]
                })),
        updateMeal: (id, updates)=>set((state)=>({
                    meals: state.meals.map((m)=>m.id === id ? {
                            ...m,
                            ...updates
                        } : m)
                })),
        deleteMeal: (id)=>set((state)=>({
                    meals: state.meals.filter((m)=>m.id !== id)
                })),
        signOut: async ()=>{
            const { createClient } = await __turbopack_context__.A("[project]/src/lib/supabase.ts [app-client] (ecmascript, async loader)");
            const supabase = createClient();
            await supabase.auth.signOut();
            set({
                session: null,
                user: null,
                household: null,
                members: []
            });
        },
        openAddTxModal: ()=>set({
                isAddTxModalOpen: true
            }),
        closeAddTxModal: ()=>set({
                isAddTxModalOpen: false
            }),
        updateLiquidity: (amount)=>set((state)=>({
                    wealth: {
                        ...state.wealth,
                        liquidity: amount
                    }
                })),
        addInvestment: (investment)=>set((state)=>{
                return {
                    investments: [
                        ...state.investments,
                        investment
                    ]
                };
            }),
        deleteInvestment: (id)=>set((state)=>({
                    investments: state.investments.filter((inv)=>inv.id !== id)
                })),
        updateInvestment: (id, updates)=>set((state)=>({
                    investments: state.investments.map((inv)=>inv.id === id ? {
                            ...inv,
                            ...updates
                        } : inv)
                })),
        addAccount: (a)=>set((state)=>({
                    accounts: [
                        ...state.accounts,
                        a
                    ]
                })),
        deleteAccount: (id)=>set((state)=>({
                    accounts: state.accounts.filter((acc)=>acc.id !== id)
                })),
        updateAccount: (id, updates)=>set((state)=>({
                    accounts: state.accounts.map((acc)=>acc.id === id ? {
                            ...acc,
                            ...updates
                        } : acc)
                })),
        // --- Pro Features Actions ---
        addSubscription: (s)=>set((state)=>({
                    subscriptions: [
                        ...state.subscriptions,
                        s
                    ]
                })),
        deleteSubscription: (id)=>set((state)=>({
                    subscriptions: state.subscriptions.filter((s)=>s.id !== id)
                })),
        addGoal: (goal)=>set((state)=>({
                    goals: [
                        ...state.goals,
                        goal
                    ]
                })),
        updateGoalProgress: (id, amountToAdd)=>set((state)=>({
                    goals: state.goals.map((g)=>g.id === id ? {
                            ...g,
                            currentAmount: Math.min(g.targetAmount, g.currentAmount + amountToAdd)
                        } : g)
                })),
        deleteGoal: (id)=>set((state)=>({
                    goals: state.goals.filter((g)=>g.id !== id)
                })),
        addTransaction: (t)=>set((state)=>({
                    transactions: [
                        t,
                        ...state.transactions
                    ]
                })),
        deleteTransaction: (id)=>set((state)=>({
                    transactions: state.transactions.filter((t)=>t.id !== id)
                })),
        settleDebt: ()=>{
            const balance = get().getDebtBalance();
            if (!balance.whoOwes || balance.amount === 0) return;
            set((state)=>({
                    transactions: [
                        ...state.transactions,
                        {
                            id: Date.now().toString(),
                            amount: balance.amount,
                            category: "Liquidación",
                            type: "shared",
                            date: new Date().toISOString().split('T')[0],
                            description: "Liquidación de deudas",
                            paidBy: balance.whoOwes === get().user?.id ? get().user.id : balance.whoOwes,
                            splitType: "custom",
                            splitAmountA: 0,
                            splitAmountB: 0
                        }
                    ]
                }));
        },
        getDebtBalance: ()=>{
            const me = get().user?.id;
            if (!me) return {
                amount: 0,
                whoOwes: null
            };
            let balance = 0; // Positive means partner owes ME, Negative means I owe partner
            get().transactions.forEach((t)=>{
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
            if (balance > 0) return {
                amount: balance,
                whoOwes: "partner"
            };
            if (balance < 0) return {
                amount: Math.abs(balance),
                whoOwes: me
            };
            return {
                amount: 0,
                whoOwes: null
            };
        },
        getExpiringAssets: ()=>{
            const msEnUnDia = 24 * 60 * 60 * 1000;
            const ahora = new Date().getTime();
            return get().investments.filter((inv)=>{
                if (inv.category !== 'Deposito' || !inv.maturityDate) return false;
                const diasRestantes = (new Date(inv.maturityDate).getTime() - ahora) / msEnUnDia;
                return diasRestantes >= 0 && diasRestantes <= 30; // 30 días o menos
            });
        }
    }), {
    name: 'couple-capital-storage'
}));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/SyncHandler.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SyncHandler",
    ()=>SyncHandler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$useStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/useStore.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function SyncHandler() {
    _s();
    const user = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$useStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])({
        "SyncHandler.useStore[user]": (state)=>state.user
    }["SyncHandler.useStore[user]"]);
    const household = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$useStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])({
        "SyncHandler.useStore[household]": (state)=>state.household
    }["SyncHandler.useStore[household]"]);
    const setHousehold = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$useStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])({
        "SyncHandler.useStore[setHousehold]": (state)=>state.setHousehold
    }["SyncHandler.useStore[setHousehold]"]);
    const setMembers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$useStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])({
        "SyncHandler.useStore[setMembers]": (state)=>state.setMembers
    }["SyncHandler.useStore[setMembers]"]);
    const setWealth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$useStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])({
        "SyncHandler.useStore[setWealth]": (state)=>state.setWealth
    }["SyncHandler.useStore[setWealth]"]);
    const setInvestments = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$useStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])({
        "SyncHandler.useStore[setInvestments]": (state)=>state.setInvestments
    }["SyncHandler.useStore[setInvestments]"]);
    const setTransactions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$useStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])({
        "SyncHandler.useStore[setTransactions]": (state)=>state.setTransactions
    }["SyncHandler.useStore[setTransactions]"]);
    const setSubscriptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$useStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])({
        "SyncHandler.useStore[setSubscriptions]": (state)=>state.setSubscriptions
    }["SyncHandler.useStore[setSubscriptions]"]);
    const setGoals = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$useStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])({
        "SyncHandler.useStore[setGoals]": (state)=>state.setGoals
    }["SyncHandler.useStore[setGoals]"]);
    const setAccounts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$useStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])({
        "SyncHandler.useStore[setAccounts]": (state)=>state.setAccounts
    }["SyncHandler.useStore[setAccounts]"]);
    const setHistory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$useStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])({
        "SyncHandler.useStore[setHistory]": (state)=>state.setHistory
    }["SyncHandler.useStore[setHistory]"]);
    const setShoppingItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$useStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])({
        "SyncHandler.useStore[setShoppingItems]": (state)=>state.setShoppingItems
    }["SyncHandler.useStore[setShoppingItems]"]);
    const setTasks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$useStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])({
        "SyncHandler.useStore[setTasks]": (state)=>state.setTasks
    }["SyncHandler.useStore[setTasks]"]);
    const setMeals = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$useStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])({
        "SyncHandler.useStore[setMeals]": (state)=>state.setMeals
    }["SyncHandler.useStore[setMeals]"]);
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SyncHandler.useEffect": ()=>{
            if (!user) return;
            const fetchInitialData = {
                "SyncHandler.useEffect.fetchInitialData": async ()=>{
                    // 1. Get user's households
                    const { data: membershipData, error: mError } = await supabase.from("household_members").select(`
          household_id,
          households (
            id,
            name,
            invite_code
          )
        `).eq("user_id", user.id);
                    if (mError || !membershipData || membershipData.length === 0) {
                        console.log("User not in any household");
                        setHousehold(null);
                        return;
                    }
                    // For now, take the first household
                    const h = membershipData[0].households;
                    // Handle the fact that households might be an array or object depending on PostgREST
                    const activeH = Array.isArray(h) ? h[0] : h;
                    if (activeH) {
                        setHousehold(activeH);
                        // 2. Load members for this household
                        const { data: members, error: memError } = await supabase.from("household_members").select(`
            user_id,
            users (
              id,
              display_name,
              avatar_url,
              email
            )
          `).eq("household_id", activeH.id);
                        if (!memError && members) {
                            const formattedMembers = members.map({
                                "SyncHandler.useEffect.fetchInitialData.formattedMembers": (m)=>({
                                        id: m.users.id,
                                        display_name: m.users.display_name,
                                        avatar_url: m.users.avatar_url,
                                        email: m.users.email
                                    })
                            }["SyncHandler.useEffect.fetchInitialData.formattedMembers"]);
                            setMembers(formattedMembers);
                        }
                        // 4. Load household data
                        const [{ data: txData, error: txError }, { data: subData, error: subError }, { data: goalData, error: goalError }, { data: shoppingData, error: shoppingError }, { data: tasksData, error: tasksError }, { data: mealsData, error: mealsError }] = await Promise.all([
                            supabase.from("transactions").select("*").eq("household_id", activeH.id).order('date', {
                                ascending: false
                            }),
                            supabase.from("subscriptions").select("*").eq("household_id", activeH.id),
                            supabase.from("goals").select("*").eq("household_id", activeH.id),
                            supabase.from("shopping_items").select("*").eq("household_id", activeH.id).order('created_at', {
                                ascending: false
                            }),
                            supabase.from("household_tasks").select("*").eq("household_id", activeH.id).order('created_at', {
                                ascending: false
                            }),
                            supabase.from("weekly_meals").select("*").eq("household_id", activeH.id)
                        ]);
                        if (!txError && txData) {
                            setTransactions(txData.map({
                                "SyncHandler.useEffect.fetchInitialData": (t)=>({
                                        id: t.id,
                                        type: t.type,
                                        amount: Number(t.amount),
                                        category: t.category,
                                        date: t.date,
                                        description: t.description,
                                        paidBy: t.paid_by,
                                        splitType: t.split_type,
                                        splitAmountA: t.split_amount_a,
                                        splitAmountB: t.split_amount_b
                                    })
                            }["SyncHandler.useEffect.fetchInitialData"]));
                        }
                        if (!subError && subData) {
                            setSubscriptions(subData.map({
                                "SyncHandler.useEffect.fetchInitialData": (s)=>({
                                        id: s.id,
                                        name: s.name,
                                        cost: Number(s.cost),
                                        period: s.period,
                                        paidBy: s.paid_by
                                    })
                            }["SyncHandler.useEffect.fetchInitialData"]));
                        }
                        if (!goalError && goalData) {
                            setGoals(goalData.map({
                                "SyncHandler.useEffect.fetchInitialData": (g)=>({
                                        id: g.id,
                                        name: g.name,
                                        targetAmount: Number(g.target_amount),
                                        currentAmount: Number(g.current_amount),
                                        imageUrl: g.image_url
                                    })
                            }["SyncHandler.useEffect.fetchInitialData"]));
                        }
                        if (!shoppingError && shoppingData) {
                            setShoppingItems(shoppingData.map({
                                "SyncHandler.useEffect.fetchInitialData": (s)=>({
                                        id: s.id,
                                        household_id: s.household_id,
                                        name: s.name,
                                        is_checked: s.is_checked
                                    })
                            }["SyncHandler.useEffect.fetchInitialData"]));
                        }
                        if (!tasksError && tasksData) {
                            setTasks(tasksData.map({
                                "SyncHandler.useEffect.fetchInitialData": (t)=>({
                                        id: t.id,
                                        household_id: t.household_id,
                                        title: t.title,
                                        assigned_to: t.assigned_to,
                                        is_completed: t.is_completed
                                    })
                            }["SyncHandler.useEffect.fetchInitialData"]));
                        }
                        if (!mealsError && mealsData) {
                            setMeals(mealsData.map({
                                "SyncHandler.useEffect.fetchInitialData": (m)=>({
                                        id: m.id,
                                        household_id: m.household_id,
                                        day_of_week: m.day_of_week,
                                        meal_type: m.meal_type,
                                        recipe_name: m.recipe_name
                                    })
                            }["SyncHandler.useEffect.fetchInitialData"]));
                        }
                    }
                    // 3. Load personal data (independent of household, but inside fetchInitialData)
                    const [{ data: wealthData }, { data: invData, error: invError }, { data: accData, error: accError }, { data: histData, error: histError }, { data: incData, error: incError }] = await Promise.all([
                        supabase.from("wealth").select("*").eq("user_id", user.id).single(),
                        supabase.from("investments").select("*").eq("user_id", user.id),
                        household ? supabase.from("accounts").select("*").or(`user_id.eq.${user.id},and(is_shared.eq.true,household_id.eq.${household.id})`) : supabase.from("accounts").select("*").eq("user_id", user.id),
                        supabase.from("wealth_history").select("*").eq("user_id", user.id).order("recording_date", {
                            ascending: false
                        }),
                        supabase.from("incomes").select("*").eq("user_id", user.id).order("date", {
                            ascending: false
                        })
                    ]);
                    if (wealthData) {
                        setWealth({
                            liquidity: Number(wealthData.liquidity)
                        });
                    } else {
                        // Initialize if empty
                        const { data: newWealth } = await supabase.from("wealth").insert({
                            user_id: user.id,
                            liquidity: 0
                        }).select().single();
                        if (newWealth) {
                            setWealth({
                                liquidity: Number(newWealth.liquidity)
                            });
                        }
                    }
                    if (!invError && invData) {
                        setInvestments(invData.map({
                            "SyncHandler.useEffect.fetchInitialData": (i)=>({
                                    id: i.id,
                                    name: i.name,
                                    amount: Number(i.amount),
                                    category: i.category,
                                    apy: i.apy ? Number(i.apy) : undefined,
                                    maturityDate: i.maturity_date
                                })
                        }["SyncHandler.useEffect.fetchInitialData"]));
                    }
                    if (!accError && accData) {
                        setAccounts(accData.map({
                            "SyncHandler.useEffect.fetchInitialData": (a)=>({
                                    id: a.id,
                                    name: a.name,
                                    balance: Number(a.balance),
                                    is_primary: a.is_primary,
                                    is_shared: a.is_shared,
                                    household_id: a.household_id
                                })
                        }["SyncHandler.useEffect.fetchInitialData"]));
                    }
                    if (!incError && incData) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$useStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"].getState().setIncomes(incData.map({
                            "SyncHandler.useEffect.fetchInitialData": (i)=>({
                                    id: i.id,
                                    user_id: i.user_id,
                                    account_id: i.account_id,
                                    amount: Number(i.amount),
                                    description: i.description,
                                    date: i.date
                                })
                        }["SyncHandler.useEffect.fetchInitialData"]));
                    }
                    if (!histError && histData) {
                        setHistory(histData.map({
                            "SyncHandler.useEffect.fetchInitialData": (h)=>({
                                    id: h.id,
                                    recordingDate: h.recording_date,
                                    totalLiquidity: Number(h.total_liquidity),
                                    totalInvestments: Number(h.total_investments),
                                    savingsVsPrevious: Number(h.savings_vs_previous)
                                })
                        }["SyncHandler.useEffect.fetchInitialData"]));
                    }
                }
            }["SyncHandler.useEffect.fetchInitialData"];
            fetchInitialData();
        }
    }["SyncHandler.useEffect"], [
        user,
        setHousehold,
        setMembers,
        supabase
    ]);
    // Real-time listener for household changes or invitation acceptance
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SyncHandler.useEffect": ()=>{
            if (!user || household) return;
            const channel = supabase.channel('member-updates').on('postgres_changes', {
                event: 'INSERT',
                schema: 'public',
                table: 'household_members',
                filter: `user_id=eq.${user.id}`
            }, {
                "SyncHandler.useEffect.channel": ()=>{
                    // Re-fetch everything if we are added to a household
                    window.location.reload();
                }
            }["SyncHandler.useEffect.channel"]).subscribe();
            return ({
                "SyncHandler.useEffect": ()=>{
                    supabase.removeChannel(channel);
                }
            })["SyncHandler.useEffect"];
        }
    }["SyncHandler.useEffect"], [
        user,
        household,
        supabase
    ]);
    return null;
}
_s(SyncHandler, "QHvoK0JisXDJ9rx3/5rlwPjH9+U=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$useStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$useStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$useStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$useStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$useStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$useStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$useStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$useStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$useStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$useStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$useStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$useStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$useStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$useStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"]
    ];
});
_c = SyncHandler;
var _c;
__turbopack_context__.k.register(_c, "SyncHandler");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/BottomNav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BottomNav",
    ()=>BottomNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/receipt.js [app-client] (ecmascript) <export default as Receipt>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PieChart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-pie.js [app-client] (ecmascript) <export default as PieChart>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function BottomNav() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const links = [
        {
            href: "/",
            label: "Resumen",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PieChart$3e$__["PieChart"]
        },
        {
            href: "/expenses",
            label: "Gastos",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__["Receipt"]
        },
        {
            href: "/home",
            label: "Hogar",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"]
        },
        {
            href: "/wealth",
            label: "Perfil",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"]
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-card border-t border-border z-50 px-6 py-3 shadow-[0_-4px_10px_rgba(0,0,0,0.05)]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            className: "flex justify-between items-center",
            children: links.map((link)=>{
                const Icon = link.icon;
                const isActive = pathname === link.href;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: link.href,
                        "aria-label": link.label,
                        className: `flex flex-col items-center gap-1 transition-colors ${isActive ? "text-primary font-medium" : "text-slate-500 hover:text-slate-800"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                size: 24,
                                strokeWidth: isActive ? 2.5 : 2,
                                className: isActive ? "text-primary" : ""
                            }, void 0, false, {
                                fileName: "[project]/src/components/BottomNav.tsx",
                                lineNumber: 31,
                                columnNumber: 33
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px]",
                                children: link.label
                            }, void 0, false, {
                                fileName: "[project]/src/components/BottomNav.tsx",
                                lineNumber: 32,
                                columnNumber: 33
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/BottomNav.tsx",
                        lineNumber: 26,
                        columnNumber: 29
                    }, this)
                }, link.href, false, {
                    fileName: "[project]/src/components/BottomNav.tsx",
                    lineNumber: 25,
                    columnNumber: 25
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/src/components/BottomNav.tsx",
            lineNumber: 19,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/BottomNav.tsx",
        lineNumber: 18,
        columnNumber: 9
    }, this);
}
_s(BottomNav, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = BottomNav;
var _c;
__turbopack_context__.k.register(_c, "BottomNav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/AddTransactionModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AddTransactionModal",
    ()=>AddTransactionModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$useStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/useStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function AddTransactionModal() {
    _s();
    const { addTransaction, user, wealth, updateLiquidity, household, members, isAddTxModalOpen, closeAddTxModal, openAddTxModal } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$useStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])();
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
    // Form state
    const [amount, setAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [description, setDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [category, setCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Ocio");
    const [type, setType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("personal");
    const [paidBy, setPaidBy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(user?.id || "");
    const [splitType, setSplitType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("50-50");
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const categories = [
        "Ocio",
        "Supermercado",
        "Hogar",
        "Transporte",
        "Salud",
        "Personal",
        "Otro"
    ];
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!amount || !description || !user || !household) return;
        const numAmount = parseFloat(amount.replace(",", "."));
        if (isNaN(numAmount) || numAmount <= 0) return;
        setIsSubmitting(true);
        const newTx = {
            household_id: household.id,
            amount: numAmount,
            category,
            type,
            date: new Date().toISOString().split("T")[0],
            description,
            paid_by: type === "shared" ? paidBy : user.id,
            ...type === "shared" ? {
                split_type: splitType
            } : {}
        };
        const { data, error } = await supabase.from("transactions").insert(newTx).select().single();
        setIsSubmitting(false);
        if (!error && data) {
            // Update local store for transaction
            addTransaction({
                id: data.id,
                type: data.type,
                amount: Number(data.amount),
                category: data.category,
                date: data.date,
                description: data.description,
                paidBy: data.paid_by,
                splitType: data.split_type,
                splitAmountA: data.split_amount_a,
                splitAmountB: data.split_amount_b
            });
            // Update Liquidity: Subtract what the user actually PAID from their wallet
            // If it's personal: they paid the full amount
            // If it's shared: they paid the amount IF their id matches 'paidBy'
            if (type === "personal" || type === "shared" && paidBy === user.id) {
                const currentLiquidity = wealth?.liquidity || 0;
                const newLiquidity = currentLiquidity - numAmount;
                // Update in Supabase
                await supabase.from("wealth").update({
                    liquidity: newLiquidity
                }).eq("user_id", user.id);
                // Update in Store
                updateLiquidity(newLiquidity);
            }
            closeModal();
        } else {
            console.error("Failed to add transaction:", error);
        }
    };
    const closeModal = ()=>{
        closeAddTxModal();
        setAmount("");
        setDescription("");
        setType("personal");
        setSplitType("50-50");
        setPaidBy(user?.id || "");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: isAddTxModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-50 flex items-end justify-center sm:items-center bg-black/40 backdrop-blur-sm animate-in fade-in duration-200",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-[90vh] sm:h-[80vh] sm:max-w-md bg-white rounded-t-3xl sm:rounded-3xl shadow-xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-full sm:slide-in-from-bottom-0 sm:zoom-in-95 duration-300",
                onClick: (e)=>e.stopPropagation(),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between p-5 border-b border-gray-100 bg-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: closeModal,
                                className: "p-2 -ml-2 text-gray-400 hover:text-gray-600 bg-gray-50 rounded-full transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AddTransactionModal.tsx",
                                    lineNumber: 111,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/AddTransactionModal.tsx",
                                lineNumber: 110,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-bold text-gray-800",
                                children: "Nuevo Gasto"
                            }, void 0, false, {
                                fileName: "[project]/src/components/AddTransactionModal.tsx",
                                lineNumber: 113,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-9"
                            }, void 0, false, {
                                fileName: "[project]/src/components/AddTransactionModal.tsx",
                                lineNumber: 114,
                                columnNumber: 29
                            }, this),
                            " "
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AddTransactionModal.tsx",
                        lineNumber: 109,
                        columnNumber: 25
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 flex flex-col overflow-y-auto bg-slate-50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                id: "tx-form",
                                onSubmit: handleSubmit,
                                className: "p-6 space-y-6 flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs font-semibold text-gray-500 uppercase tracking-wider",
                                                children: "Importe"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AddTransactionModal.tsx",
                                                lineNumber: 123,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-center gap-1 mt-2 px-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        step: "0.01",
                                                        inputMode: "decimal",
                                                        value: amount,
                                                        onChange: (e)=>setAmount(e.target.value),
                                                        placeholder: "0",
                                                        className: "w-full max-w-[280px] text-5xl sm:text-6xl font-black text-slate-800 bg-transparent text-center focus:outline-none placeholder:text-gray-300 transition-all",
                                                        autoFocus: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/AddTransactionModal.tsx",
                                                        lineNumber: 125,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-3xl font-bold text-gray-400",
                                                        children: "€"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/AddTransactionModal.tsx",
                                                        lineNumber: 135,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/AddTransactionModal.tsx",
                                                lineNumber: 124,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/AddTransactionModal.tsx",
                                        lineNumber: 122,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex bg-gray-200/60 p-1.5 rounded-2xl w-full",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setType("personal"),
                                                className: `flex-1 py-3 text-sm font-semibold rounded-xl transition-all ${type === "personal" ? "bg-white text-indigo-600 shadow-sm" : "text-gray-500 hover:text-gray-700"}`,
                                                children: "Gasto Privado"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AddTransactionModal.tsx",
                                                lineNumber: 141,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setType("shared"),
                                                className: `flex-1 py-3 text-sm font-semibold rounded-xl transition-all ${type === "shared" ? "bg-white text-indigo-600 shadow-sm" : "text-gray-500 hover:text-gray-700"}`,
                                                children: "Gasto Compartido"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AddTransactionModal.tsx",
                                                lineNumber: 148,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/AddTransactionModal.tsx",
                                        lineNumber: 140,
                                        columnNumber: 33
                                    }, this),
                                    type === "shared" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white p-4 rounded-2xl shadow-sm border border-gray-100 space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-sm font-medium text-gray-700 block mb-3",
                                                        children: "¿Quién lo ha pagado?"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/AddTransactionModal.tsx",
                                                        lineNumber: 161,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-3 overflow-x-auto pb-2",
                                                        children: members.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>setPaidBy(m.id),
                                                                className: `flex-none py-3 px-4 rounded-xl border flex items-center gap-2 transition-all ${paidBy === m.id ? "border-indigo-600 bg-indigo-50 text-indigo-700 font-semibold" : "border-gray-200 text-gray-600 hover:bg-gray-50"}`,
                                                                children: [
                                                                    m.avatar_url ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                        src: m.avatar_url,
                                                                        alt: m.display_name,
                                                                        className: "w-6 h-6 rounded-full"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/AddTransactionModal.tsx",
                                                                        lineNumber: 171,
                                                                        columnNumber: 61
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-6 h-6 rounded-full bg-indigo-400 flex items-center justify-center text-xs text-white",
                                                                        children: m.display_name?.charAt(0).toUpperCase() || "U"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/AddTransactionModal.tsx",
                                                                        lineNumber: 173,
                                                                        columnNumber: 61
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "whitespace-nowrap",
                                                                        children: m.display_name?.split(" ")[0]
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/AddTransactionModal.tsx",
                                                                        lineNumber: 177,
                                                                        columnNumber: 57
                                                                    }, this)
                                                                ]
                                                            }, m.id, true, {
                                                                fileName: "[project]/src/components/AddTransactionModal.tsx",
                                                                lineNumber: 164,
                                                                columnNumber: 53
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/AddTransactionModal.tsx",
                                                        lineNumber: 162,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/AddTransactionModal.tsx",
                                                lineNumber: 160,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pt-2 border-t border-gray-100",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-sm font-medium text-gray-700 block mb-3",
                                                        children: "División"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/AddTransactionModal.tsx",
                                                        lineNumber: 184,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>setSplitType("50-50"),
                                                            className: `px-4 py-2 rounded-lg text-sm transition-colors ${splitType === "50-50" ? "bg-slate-800 text-white" : "bg-gray-100 text-gray-600"}`,
                                                            children: "50/50"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/AddTransactionModal.tsx",
                                                            lineNumber: 186,
                                                            columnNumber: 49
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/AddTransactionModal.tsx",
                                                        lineNumber: 185,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/AddTransactionModal.tsx",
                                                lineNumber: 183,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/AddTransactionModal.tsx",
                                        lineNumber: 159,
                                        columnNumber: 37
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white p-4 rounded-2xl shadow-sm border border-gray-100 space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-sm font-medium text-gray-700 block mb-2",
                                                        children: "Concepto"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/AddTransactionModal.tsx",
                                                        lineNumber: 202,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: description,
                                                        onChange: (e)=>setDescription(e.target.value),
                                                        placeholder: "Ej. Cena en pizzería...",
                                                        className: "w-full border-b-2 border-gray-100 py-2 focus:border-indigo-500 focus:outline-none transition-colors bg-transparent text-gray-800"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/AddTransactionModal.tsx",
                                                        lineNumber: 203,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/AddTransactionModal.tsx",
                                                lineNumber: 201,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-sm font-medium text-gray-700 block mb-3",
                                                        children: "Categoría"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/AddTransactionModal.tsx",
                                                        lineNumber: 212,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-wrap gap-2",
                                                        children: categories.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>setCategory(c),
                                                                className: `px-4 py-2 rounded-full text-xs font-medium transition-colors ${category === c ? "bg-indigo-100 text-indigo-700 border border-indigo-200" : "bg-gray-100 text-gray-600 hover:bg-gray-200 border border-transparent"}`,
                                                                children: c
                                                            }, c, false, {
                                                                fileName: "[project]/src/components/AddTransactionModal.tsx",
                                                                lineNumber: 215,
                                                                columnNumber: 49
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/AddTransactionModal.tsx",
                                                        lineNumber: 213,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/AddTransactionModal.tsx",
                                                lineNumber: 211,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/AddTransactionModal.tsx",
                                        lineNumber: 200,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AddTransactionModal.tsx",
                                lineNumber: 119,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 bg-white border-t border-gray-100 sm:rounded-b-3xl mt-auto",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    form: "tx-form",
                                    disabled: !amount || !description || isSubmitting,
                                    className: "w-full py-4 bg-slate-900 text-white rounded-2xl font-bold text-lg hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-lg shadow-black/5 flex items-center justify-center",
                                    children: isSubmitting ? "Guardando..." : "Añadir Gasto"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AddTransactionModal.tsx",
                                    lineNumber: 233,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/AddTransactionModal.tsx",
                                lineNumber: 232,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AddTransactionModal.tsx",
                        lineNumber: 118,
                        columnNumber: 25
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AddTransactionModal.tsx",
                lineNumber: 104,
                columnNumber: 21
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/AddTransactionModal.tsx",
            lineNumber: 103,
            columnNumber: 17
        }, this)
    }, void 0, false);
}
_s(AddTransactionModal, "K1uLlzx1pp+Mvg9m3oxEoDUQB1M=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$useStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"]
    ];
});
_c = AddTransactionModal;
var _c;
__turbopack_context__.k.register(_c, "AddTransactionModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ClientWrapper.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClientWrapper",
    ()=>ClientWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$useStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/useStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SyncHandler$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SyncHandler.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BottomNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/BottomNav.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AddTransactionModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AddTransactionModal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function ClientWrapper({ children }) {
    _s();
    const [isMounted, setIsMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const setUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$useStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])({
        "ClientWrapper.useStore[setUser]": (state)=>state.setUser
    }["ClientWrapper.useStore[setUser]"]);
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ClientWrapper.useEffect": ()=>{
            setIsMounted(true);
            // Fetch initial session
            supabase.auth.getSession().then({
                "ClientWrapper.useEffect": ({ data: { session } })=>{
                    setUser(session?.user || null);
                }
            }["ClientWrapper.useEffect"]);
            // Listen for changes
            const { data: { subscription } } = supabase.auth.onAuthStateChange({
                "ClientWrapper.useEffect": (_event, session)=>{
                    setUser(session?.user || null);
                }
            }["ClientWrapper.useEffect"]);
            return ({
                "ClientWrapper.useEffect": ()=>subscription.unsubscribe()
            })["ClientWrapper.useEffect"];
        }
    }["ClientWrapper.useEffect"], [
        setUser,
        supabase.auth
    ]);
    const household = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$useStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"])({
        "ClientWrapper.useStore[household]": (state)=>state.household
    }["ClientWrapper.useStore[household]"]);
    if (!isMounted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center bg-slate-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-12 w-12 rounded-full border-4 border-slate-200 border-t-primary animate-spin"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClientWrapper.tsx",
                        lineNumber: 39,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-slate-500 font-medium tracking-tight",
                        children: "Cargando CoupleCapital..."
                    }, void 0, false, {
                        fileName: "[project]/src/components/ClientWrapper.tsx",
                        lineNumber: 40,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ClientWrapper.tsx",
                lineNumber: 38,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ClientWrapper.tsx",
            lineNumber: 37,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SyncHandler$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SyncHandler"], {}, void 0, false, {
                fileName: "[project]/src/components/ClientWrapper.tsx",
                lineNumber: 48,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `min-h-[calc(100vh-64px)] ${household ? 'pb-6' : ''} relative`,
                children: [
                    children,
                    household && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AddTransactionModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AddTransactionModal"], {}, void 0, false, {
                        fileName: "[project]/src/components/ClientWrapper.tsx",
                        lineNumber: 51,
                        columnNumber: 31
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ClientWrapper.tsx",
                lineNumber: 49,
                columnNumber: 13
            }, this),
            household && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BottomNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BottomNav"], {}, void 0, false, {
                fileName: "[project]/src/components/ClientWrapper.tsx",
                lineNumber: 53,
                columnNumber: 27
            }, this)
        ]
    }, void 0, true);
}
_s(ClientWrapper, "yp2Ab0/XCbhNShtU6tPOTV8UAas=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$useStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$useStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStore"]
    ];
});
_c = ClientWrapper;
var _c;
__turbopack_context__.k.register(_c, "ClientWrapper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_7208a034._.js.map