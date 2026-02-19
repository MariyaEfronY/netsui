"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ShieldCheck, ArrowRight, Loader2 } from 'lucide-react';
import Link from 'next/link';

export default function AdminLogin() {
    const [data, setData] = useState({ email: '', password: '' });
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        const res = await fetch('/api/auth/admin/login', {
            method: 'POST',
            body: JSON.stringify(data),
        });

        if (res.ok) router.push('/admin');
        else {
            alert("Invalid credentials.");
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#020617] flex items-center justify-center p-6 text-white">
            <div className="w-full max-w-md bg-white/5 p-10 rounded-[2.5rem] border border-white/10 backdrop-blur-md">
                <ShieldCheck size={48} className="mx-auto text-blue-500 mb-6" />
                <h1 className="text-2xl font-bold text-center italic uppercase mb-8">Admin Login</h1>

                <form onSubmit={handleLogin} className="space-y-4">
                    <input
                        type="email" placeholder="EMAIL"
                        className="w-full bg-white/5 p-4 rounded-xl border border-white/10 outline-none focus:border-blue-500 transition-all"
                        onChange={e => setData({ ...data, email: e.target.value })}
                    />
                    <input
                        type="password" placeholder="PASSWORD"
                        className="w-full bg-white/5 p-4 rounded-xl border border-white/10 outline-none focus:border-blue-500 transition-all"
                        onChange={e => setData({ ...data, password: e.target.value })}
                    />
                    <button disabled={loading} className="w-full bg-blue-600 p-4 rounded-xl font-bold uppercase hover:bg-blue-700 transition-all flex justify-center items-center gap-2">
                        {loading ? <Loader2 className="animate-spin" /> : <>Enter Gateway <ArrowRight size={18} /></>}
                    </button>
                </form>
                <p className="mt-6 text-center text-xs text-slate-400">
                    Register? <Link href="/register" className="text-blue-500 hover:underline">Enroll Here</Link>
                </p>
            </div>
        </div>
    );
}