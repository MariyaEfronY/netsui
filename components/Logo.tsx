import React from 'react';

export default function Logo({ className = "h-8" }: { className?: string }) {
    return (
        <div className={`flex items-center gap-2 ${className}`}>
            {/* Replace 'img' with your actual logo file path */}
            <img
                src="logo/netsilica_logo.jpeg"
                alt="Netsilica Logo"
                className="h-full w-auto object-contain"
            />
            <span className="font-bold text-xl tracking-tighter text-emerald-900 uppercase">
                Netsui <span className="text-emerald-500 underline decoration-2">熱意</span>
            </span>
        </div>
    );
}