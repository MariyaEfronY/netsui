"use client";
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    UserCheck, RefreshCcw, Table as TableIcon,
    Search, MapPin, Mail, Phone, Calendar, Clock
} from 'lucide-react';
import * as XLSX from 'xlsx';

interface Registration {
    _id: string;
    fullName: string;
    email: string;
    phone: string;
    location: string;
    gender: string;
    createdAt: string;
}

export default function RegistrationsPage() {
    const [data, setData] = useState<Registration[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");

    const fetchData = async () => {
        setLoading(true);
        try {
            const res = await fetch('/api/register');
            const json = await res.json();
            if (json.success) setData(json.data);
        } catch (err) {
            console.error("Link failed:", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => { fetchData(); }, []);

    const exportToExcel = () => {
        const worksheet = XLSX.utils.json_to_sheet(data);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Registrations");
        XLSX.writeFile(workbook, `Netsui_Registrations.xlsx`);
    };

    const filteredData = data.filter(item =>
        item.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-[#f8fafc] ">


            <div className=" max-w-[1600px] mx-auto">
                {/* --- HEADER SECTION --- */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-10 gap-6">
                    <div>
                        <div className="flex items-center gap-4 mb-2">
                            <div className="p-3 bg-blue-600 rounded-2xl text-white shadow-lg shadow-blue-600/20">
                                <UserCheck size={28} />
                            </div>
                            <h1 className="text-4xl font-black text-slate-900 uppercase tracking-tighter italic">Registrations</h1>
                        </div>
                        <p className="text-slate-500 text-sm font-medium">Monitoring {data.length} institutional bridge enrollments.</p>
                    </div>

                    <div className="flex items-center gap-3 w-full lg:w-auto">
                        <button onClick={exportToExcel} className="flex-1 lg:flex-none flex items-center justify-center gap-2 bg-[#0f172a] text-white px-6 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-blue-600 transition-all">
                            <TableIcon size={16} /> Export Excel
                        </button>
                        <button onClick={fetchData} className="p-3 bg-white border border-slate-200 rounded-2xl hover:bg-slate-50 transition-all text-slate-600">
                            <RefreshCcw size={20} className={loading ? "animate-spin" : ""} />
                        </button>
                    </div>
                </div>

                {/* --- SEARCH & QUICK STATS --- */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
                    <div className="lg:col-span-3 relative">
                        <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                        <input
                            type="text"
                            placeholder="Search by name, email, or identity..."
                            className="w-full pl-14 pr-6 py-5 bg-white rounded-[2rem] border-none shadow-xl shadow-slate-200/60 focus:ring-2 focus:ring-blue-500 outline-none transition-all text-sm font-bold text-slate-700"
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="bg-white p-5 rounded-[2rem] shadow-xl shadow-slate-200/60 border border-white flex flex-col justify-center items-center">
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Total Registrations</span>
                        <span className="text-3xl font-black text-blue-600">{filteredData.length}</span>
                    </div>
                </div>

                {/* --- TABLE CONTAINER --- */}
                <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200/50 border border-white overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse min-w-[1000px]">
                            <thead>
                                <tr className="bg-slate-50/50 border-b border-slate-100">
                                    <th className="px-10 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Consultant Identity</th>
                                    <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Communication</th>
                                    <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400"> Location</th>
                                    <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Registered Timestamp</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50">
                                <AnimatePresence>
                                    {filteredData.map((user, idx) => (
                                        <motion.tr
                                            key={user._id}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: idx * 0.05 }}
                                            className="hover:bg-blue-50/20 transition-colors group"
                                        >
                                            {/* Identity Column */}
                                            <td className="px-10 py-7">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400 font-black text-xs border border-slate-200 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                                        {user.fullName.substring(0, 2).toUpperCase()}
                                                    </div>
                                                    <div>
                                                        <p className="font-black text-slate-900 text-base tracking-tight uppercase">{user.fullName}</p>
                                                        <span className="text-[10px] bg-slate-100 text-slate-500 px-2 py-0.5 rounded font-bold uppercase">{user.gender}</span>
                                                    </div>
                                                </div>
                                            </td>

                                            {/* Communication Column */}
                                            <td className="px-8 py-7">
                                                <div className="flex flex-col gap-1.5">
                                                    <div className="flex items-center gap-2 text-sm text-slate-600 font-bold tracking-tight">
                                                        <Mail size={14} className="text-blue-500" /> {user.email}
                                                    </div>
                                                    <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
                                                        <Phone size={14} /> {user.phone}
                                                    </div>
                                                </div>
                                            </td>

                                            {/* Location Column */}
                                            <td className="px-8 py-7">
                                                <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-[10px] font-black uppercase tracking-[0.1em]">
                                                    <MapPin size={12} /> {user.location}
                                                </span>
                                            </td>

                                            {/* Timestamp Column */}
                                            <td className="px-8 py-7">
                                                <div className="flex flex-col gap-1">
                                                    <div className="flex items-center gap-2 text-sm font-bold text-slate-700">
                                                        <Calendar size={14} className="text-slate-400" />
                                                        {new Date(user.createdAt).toLocaleDateString('en-GB')}
                                                    </div>
                                                    <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase">
                                                        <Clock size={12} />
                                                        {new Date(user.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                                    </div>
                                                </div>
                                            </td>
                                        </motion.tr>
                                    ))}
                                </AnimatePresence>
                            </tbody>
                        </table>
                    </div>

                    {/* Empty State */}
                    {!loading && filteredData.length === 0 && (
                        <div className="py-32 text-center">
                            <p className="text-slate-400 font-black uppercase tracking-widest">No Records Detected</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}