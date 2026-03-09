"use client";

import { useStore } from "@/store/useStore";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip, Legend } from "recharts";

export function ExpensesChart({
    data,
    total
}: {
    data: { name: string; value: number; color: string }[],
    total: number
}) {
    if (data.length === 0) {
        return (
            <div className="h-[200px] flex items-center justify-center text-slate-400 text-sm border-2 border-dashed border-slate-100 rounded-2xl">
                Añade transacciones para ver aquí tus gastos
            </div>
        )
    }

    const CustomTooltip = ({ active, payload }: any) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-slate-800 text-white text-xs p-2 rounded-lg shadow-xl border border-slate-700">
                    <p className="font-semibold">{payload[0].name}</p>
                    <p>{payload[0].value.toFixed(2)} €</p>
                </div>
            );
        }
        return null;
    };


    return (
        <div className="h-[220px] w-full relative">
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius={55}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                        stroke="none"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} className="transition-all duration-300 hover:opacity-80 drop-shadow-sm" />
                        ))}
                    </Pie>
                    <RechartsTooltip content={<CustomTooltip />} />
                </PieChart>
            </ResponsiveContainer>
            {/* Center Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Total</span>
                <span className="text-lg font-black text-slate-800">{total.toFixed(0)}€</span>
            </div>
        </div>
    );
}
