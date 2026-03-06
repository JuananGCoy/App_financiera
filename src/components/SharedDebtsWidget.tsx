"use client";

import { useState } from "react";
import { useStore } from "@/store/useStore";
import { createClient } from "@/lib/supabase";

export function SharedDebtsWidget() {
    const { getDebtBalance, user, household, members, addTransaction } = useStore();
    const balance = getDebtBalance();
    const [isSettling, setIsSettling] = useState(false);
    const supabase = createClient();

    const handleSettle = async () => {
        if (!user || !household || !balance.whoOwes || balance.amount === 0) return;
        setIsSettling(true);

        const newTx = {
            household_id: household.id,
            amount: balance.amount,
            category: "Liquidación",
            type: "shared",
            date: new Date().toISOString().split('T')[0],
            description: "Liquidación de deudas",
            // The one who owes is the one who pays the settlement
            paid_by: balance.whoOwes === "partner" ? (members.find(m => m.id !== user.id)?.id || "") : user.id,
            split_type: "custom",
            split_amount_a: 0,
            split_amount_b: 0,
        };

        const { data, error } = await supabase
            .from("transactions")
            .insert(newTx)
            .select()
            .single();

        setIsSettling(false);

        if (!error && data) {
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
        } else {
            console.error("Failed to settle debt:", error);
        }
    };


    return (
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 mb-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Balance de Pareja</h3>

            {balance.whoOwes && balance.amount > 0 ? (
                <div className="bg-orange-50 rounded-2xl p-4 border border-orange-100 flex justify-between items-center">
                    <div>
                        <p className="font-semibold text-orange-800 text-sm md:text-base">
                            {balance.whoOwes === user?.id
                                ? `Debes a tu pareja`
                                : `Tu pareja te debe`}
                        </p>
                        <p className="text-orange-600 text-xs mt-1">Hay que ajustar cuentas</p>
                    </div>
                    <div className="text-right">
                        <p className="text-2xl font-bold text-orange-600">
                            {balance.amount.toLocaleString('es-ES', { minimumFractionDigits: 2 })}€
                        </p>
                        <button
                            onClick={handleSettle}
                            disabled={isSettling}
                            className="mt-3 text-xs font-bold px-4 py-2 bg-orange-600 text-white rounded-xl hover:bg-orange-700 disabled:opacity-50 transition-colors shadow-sm"
                        >
                            {isSettling ? "Liquidando..." : "Liquidar deuda"}
                        </button>
                    </div>
                </div>
            ) : (
                <div className="bg-green-50 rounded-2xl p-4 border border-green-100 flex items-center justify-center">
                    <p className="text-green-700 font-medium">✨ Cuentas claras, ¡todo al día!</p>
                </div>
            )}
        </div>
    );
}
