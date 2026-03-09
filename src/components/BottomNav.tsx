"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Receipt, Home, User, PieChart } from "lucide-react";

export function BottomNav() {
    const pathname = usePathname();

    const links = [
        { href: "/", label: "Resumen", icon: PieChart },
        { href: "/expenses", label: "Gastos", icon: Receipt },
        { href: "/home", label: "Hogar", icon: Home },
        { href: "/wealth", label: "Perfil", icon: User },
    ];

    return (
        <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-card border-t border-border z-50 px-6 py-3 shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
            <ul className="flex justify-between items-center">
                {links.map((link) => {
                    const Icon = link.icon;
                    const isActive = pathname === link.href;

                    return (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                aria-label={link.label}
                                className={`flex flex-col items-center gap-1 transition-colors ${isActive ? "text-primary font-medium" : "text-slate-500 hover:text-slate-800"}`}
                            >
                                <Icon size={24} strokeWidth={isActive ? 2.5 : 2} className={isActive ? "text-primary" : ""} />
                                <span className="text-[10px]">{link.label}</span>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
