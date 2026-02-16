"use client";
import React, { useState } from 'react';
import AdminSidebar from './Sidebar'; // Importing from same folder
import { Menu, User, Activity } from 'lucide-react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[#F8FAFC]">
            <AdminSidebar isOpen={isOpen} setIsOpen={setIsOpen} />

            <div className="lg:ml-64 min-h-screen flex flex-col">
                {/* Portal Header */}
                <header className="h-20 bg-white border-b border-slate-200 px-6 md:px-10 flex items-center justify-between sticky top-0 z-30">
                    <button className="lg:hidden p-2 text-slate-900" onClick={() => setIsOpen(true)}>
                        <Menu size={24} />
                    </button>

                    <div className="hidden md:flex items-center gap-3">
                        <Activity size={16} className="text-blue-600 animate-pulse" />
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Secure Admin Corridor</span>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="h-10 w-10 bg-slate-900 rounded-full flex items-center justify-center text-white border-4 border-slate-100">
                            <User size={18} />
                        </div>
                    </div>
                </header>

                {/* Content Section */}
                <main className="flex-1 p-6 md:p-12 max-w-7xl w-full">
                    {children}
                </main>
            </div>
        </div>
    );
}