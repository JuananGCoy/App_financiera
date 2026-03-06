"use client";

import { useStore } from "@/store/useStore";
import { Card } from "@/components/ui/Card";
import { Receipt, Plus, User, Users, ListFilter, Trash2 } from "lucide-react";
import { SharedDebtsWidget } from "@/components/SharedDebtsWidget";
import { useState } from "react";
import { createClient } from "@/lib/supabase";

export default function ExpensesPage() {
    const { transactions, user, wealth, members, openAddTxModal, deleteTransaction, updateLiquidity } = useStore();
    const [filter, setFilter] = useState<"all" | "shared" | "personal">("all");
    const [deletingId, setDeletingId] = useState<string | null>(null);
    const supabase = createClient();

    const filteredTxs = transactions.filter(t => {
        if (filter === "all") return true;
        return t.type === filter;
    });

    const handleDelete = async (id: string, amount: number, type: string, paidBy: string) => {
        if (!confirm("¿Estás seguro de que quieres borrar este gasto?")) return;

        setDeletingId(id);
        const { error } = await supabase
            .from("transactions")
            .delete()
            .eq("id", id);

        if (!error) {
            // Revert Liquidity if it was paid by the user
            if (type === "personal" || (type === "shared" && paidBy === user?.id)) {
                const newLiquidity = (wealth?.liquidity || 0) + amount;

                // Update in Supabase
                await supabase
                    .from("wealth")
                    .update({ liquidity: newLiquidity })
                    .eq("user_id", user?.id);

                // Update in Store
                updateLiquidity(newLiquidity);
            }

            deleteTransaction(id);
        } else {
            console.error("Error deleting transaction:", error);
            alert("No se pudo borrar el gasto.");
        }
        setDeletingId(null);
    };

    return (
        <div className="p-6 space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-semibold text-slate-800">Gastos</h1>
                <button
                    onClick={openAddTxModal}
                    className="bg-primary hover:bg-emerald-600 text-white p-2 rounded-full transition-colors shadow-sm"
                >
                    <Plus size={20} />
                </button>
            </div>

            {/* Debt Engine Widget */}
            <SharedDebtsWidget />

            {/* Filter Tabs */}
            <div className="flex bg-slate-100 p-1 rounded-xl w-full">
                <button
                    onClick={() => setFilter("all")}
                    className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 ${filter === "all" ? "bg-white text-slate-800 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
                >
                    <ListFilter size={14} /> Todos
                </button>
                <button
                    onClick={() => setFilter("shared")}
                    className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 ${filter === "shared" ? "bg-white text-indigo-600 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
                >
                    <Users size={14} /> Compartido
                </button>
                <button
                    onClick={() => setFilter("personal")}
                    className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 ${filter === "personal" ? "bg-white text-emerald-600 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
                >
                    <User size={14} /> Personal
                </button>
            </div>

            {/* Expenses List */}
            <div>
                <h3 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
                    <Receipt size={18} className="text-slate-500" />
                    Historial de Gastos
                </h3>
                <div className="space-y-3 pb-20">
                    {filteredTxs.map(t => (
                        <Card key={t.id} className="p-4 flex flex-col gap-2 relative group hover:shadow-md transition-shadow">
                            <div className="flex justify-between items-start">
                                <div className="flex items-center gap-3">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${t.paidBy === user?.id ? "bg-primary/10 text-primary" : "bg-slate-100 text-slate-600"
                                        }`}>
                                        {members.find(m => m.id === t.paidBy)?.display_name?.charAt(0).toUpperCase() || "U"}
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <p className="font-medium text-slate-800">{t.description}</p>
                                            <button
                                                onClick={() => handleDelete(t.id, t.amount, t.type, t.paidBy)}
                                                disabled={deletingId === t.id}
                                                className="opacity-0 group-hover:opacity-100 p-1.5 text-slate-300 hover:text-red-500 transition-all"
                                            >
                                                <Trash2 size={14} />
                                            </button>
                                        </div>
                                        <p className="text-xs text-slate-500">
                                            {t.category} • {new Date(t.date).toLocaleDateString()}
                                        </p>
                                    </div>
                                </div>
                                <div className="text-right flex-shrink-0">
                                    <p className="font-bold text-slate-800 text-lg leading-tight">
                                        {t.amount.toLocaleString('es-ES', { minimumFractionDigits: 2 })} €
                                    </p>
                                    <p className={`text-[10px] uppercase tracking-wide px-2 py-0.5 rounded-full inline-block mt-1 ${t.type === "personal" ? "bg-emerald-50 text-emerald-600 border border-emerald-100" : "bg-slate-100 text-slate-500"
                                        }`}>
                                        {t.type === "personal" ? "Privado" : "Compartido"}
                                    </p>
                                </div>
                            </div>

                            {/* Details footer if shared */}
                            {t.type === "shared" && (
                                <div className="mt-2 pt-2 border-t border-slate-100 text-xs text-slate-500 flex justify-between">
                                    <span>Pagado por {members.find(m => m.id === t.paidBy)?.display_name || "Alguien"}</span>
                                    <span>
                                        {t.splitType === "50-50" ? "División 50/50" : "Personalizado"}
                                    </span>
                                </div>
                            )}
                        </Card>
                    ))}

                    {filteredTxs.length === 0 && (
                        <p className="text-center text-slate-500 py-8 text-sm">
                            No hay gastos {filter === "all" ? "" : filter === "shared" ? "compartidos" : "personales"} registrados.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
