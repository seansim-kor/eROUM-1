import React from 'react';

export const CallToAction: React.FC = () => {
    const scrollToContact = () => {
        const element = document.getElementById('contact');
        if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
    };

    return (
        <section className="w-full relative py-20 px-6 lg:px-12 bg-[#111812] overflow-hidden text-center mt-10">
            <div className="absolute inset-0 opacity-10" style={{backgroundImage: "radial-gradient(#ec5b13 1px, transparent 1px)", backgroundSize: "32px 32px"}}></div>
            <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">Ready to expand your business horizon?</h2>
                <p className="text-gray-400 text-lg">Partner with eROUM Global for sustainable growth and expert market navigation.</p>
                <button onClick={scrollToContact} className="mt-4 flex items-center justify-center rounded-lg h-14 px-8 bg-primary hover:bg-[#d44e0f] text-white text-base font-bold transition-all shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1">
                    Let's Talk Business
                </button>
            </div>
        </section>
    );
};