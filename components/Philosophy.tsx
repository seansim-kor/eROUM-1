import React from 'react';

export const Philosophy: React.FC = () => {
    return (
        <section className="w-full max-w-[1200px] px-6 md:px-10 py-16" id="philosophy">
            <div className="flex flex-col gap-12">
                <div className="flex flex-col gap-4 text-center">
                    <div className="inline-flex items-center gap-2 self-center px-3 py-1 rounded-full border border-primary/30 bg-primary/10 w-fit">
                        <span className="material-symbols-outlined text-primary text-sm">spa</span>
                        <span className="text-primary text-xs font-bold uppercase tracking-wider">Our Philosophy</span>
                    </div>
                    <h2 className="text-text-dark dark:text-white text-3xl md:text-4xl font-bold leading-tight">
                        The Philosophy of Benefit <span className="text-primary font-normal">(이로움)</span>
                    </h2>
                    <p className="text-text-light dark:text-gray-400 text-lg max-w-[720px] mx-auto">
                        We strive to create value that benefits our partners, respects nature, and builds a sustainable legacy for generations to come.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { icon: "handshake", title: "Partner Success", desc: "Driving mutual growth through reliable, transparent, and long-term partnerships." },
                        { icon: "eco", title: "Sustainable Nature", desc: "Unwavering commitment to eco-friendly sourcing and responsible processing." },
                        { icon: "trending_up", title: "Future Growth", desc: "Building a lasting legacy by bridging today's resources with tomorrow's needs." }
                    ].map((item, idx) => (
                        <div key={idx} className="group flex flex-col gap-4 p-8 rounded-xl bg-surface-light dark:bg-[#1a2e1d] border border-border-light dark:border-white/10 hover:border-primary/50 transition-colors duration-300">
                            <div className="size-12 rounded-full bg-border-light dark:bg-white/10 group-hover:bg-primary text-text-dark dark:text-white group-hover:text-white flex items-center justify-center transition-colors duration-300">
                                <span className="material-symbols-outlined text-[24px]">{item.icon}</span>
                            </div>
                            <div>
                                <h3 className="text-text-dark dark:text-white text-xl font-bold mb-2">{item.title}</h3>
                                <p className="text-text-light dark:text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};