import React from 'react';

export const MissionVision: React.FC = () => {
    return (
        <section className="py-20 px-6 lg:px-12 bg-white dark:bg-background-dark">
            <div className="max-w-[1440px] mx-auto">
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { icon: "spa", title: "Our Mission", text: "To innovate sustainable supply chains and deliver premium Palm Acid Oil products while minimizing environmental impact.", color: "bg-secondary/30" },
                        { icon: "public", title: "Our Vision", text: "To become the premier bridge for commerce between Korea and Malaysia, setting the standard for cross-border trading excellence.", color: "bg-accent/30" },
                        { icon: "handshake", title: "Core Values", text: "Built on unshakeable integrity, transparency in every deal, and a relentless pursuit of mutual growth for all partners.", color: "bg-gray-100" }
                    ].map((item, idx) => (
                        <div key={idx} className={`bg-background-light dark:bg-[#1a2e1d] p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5 hover:shadow-md transition-shadow animate-fade-in-up group delay-${(idx+1)*100} hover:-translate-y-1 duration-300`}>
                            <div className={`w-12 h-12 ${item.color} rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors`}>
                                <span className="material-symbols-outlined text-green-800 group-hover:text-white">{item.icon}</span>
                            </div>
                            <h3 className="text-xl font-bold mb-3 dark:text-white">{item.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};