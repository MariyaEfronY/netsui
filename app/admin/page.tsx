import { connectDB } from "@/lib/mongodb";
import Visitor from "@/models/Visitor";


export default async function AdminDashboard() {
    await connectDB();

    const visitorData = await Visitor.findOne({ id: "site_views" });

    const stats = [
        { label: 'Total Site Visitors', value: visitorData?.count || 0, color: 'text-blue-600' },

        { label: 'Portal Status', value: 'Active', color: 'text-emerald-500' },
    ];

    return (
        <div className="space-y-12">
            <div className="space-y-2">
                <h1 className="text-4xl font-black text-slate-900 tracking-tight uppercase">Dashboard</h1>
                <p className="text-slate-500 text-sm font-medium">Strategic overview of Netsui activity.</p>
            </div>

            {/* Strategic Stat Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {stats.map((stat, i) => (
                    <div key={i} className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all">
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4">{stat.label}</p>
                        <h2 className={`text-4xl font-black ${stat.color}`}>{stat.value}</h2>
                    </div>
                ))}
            </div>


        </div>
    );
}