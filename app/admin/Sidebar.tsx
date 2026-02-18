"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Globe, X, LogOut, UserCheck, } from 'lucide-react';

export default function AdminSidebar({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (val: boolean) => void }) {
    const pathname = usePathname();

    const menu = [
        { name: 'Overview', icon: <LayoutDashboard size={18} />, path: '/admin' },

        {
            name: 'Registrations',
            icon: <UserCheck size={18} />,
            path: '/admin/view-registerations'
        },
    ];

    return (
        <>
            {/* Mobile Backdrop */}
            {isOpen && (
                <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-40 lg:hidden" onClick={() => setIsOpen(false)} />
            )}

            <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-slate-950 text-white transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="h-full flex flex-col p-6">
                    <div className="flex items-center justify-between mb-10 border-b border-white/5 pb-6">
                        <div className="flex items-center gap-3">
                            <div className="h-8 w-8 bg-blue-600 rounded flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                                <Globe size={16} />
                            </div>
                            <span className="font-black tracking-tighter text-xl uppercase">Netsui<span className="text-blue-500">.OS</span></span>
                        </div>
                        <button className="lg:hidden" onClick={() => setIsOpen(false)}><X size={20} /></button>
                    </div>

                    <nav className="flex-1 space-y-2">
                        {menu.map((item) => (
                            <Link
                                key={item.path}
                                href={item.path}
                                onClick={() => setIsOpen(false)}
                                className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all font-bold text-[10px] uppercase tracking-[0.2em] ${pathname === item.path ? 'bg-blue-600 text-white' : 'text-slate-500 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                {item.icon} {item.name}
                            </Link>
                        ))}
                    </nav>

                    <div className="pt-6 border-t border-white/5">
                        <button className="flex items-center gap-4 px-4 py-3 rounded-xl text-red-500 hover:bg-red-500/10 font-bold text-[10px] uppercase tracking-widest transition-all w-full text-left">
                            <LogOut size={18} /> Exit Portal
                        </button>
                    </div>
                </div>
            </aside>
        </>
    );
}