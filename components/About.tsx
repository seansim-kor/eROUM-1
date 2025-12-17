import React from 'react';

export const About: React.FC = () => {
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
        <section id="about" className="w-full bg-[#FAFAF9] dark:bg-background-dark py-16 lg:py-24 border-t border-b border-gray-100 dark:border-white/5">
            <div className="layout-container px-6 lg:px-12 max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-12 items-center">
                <div className="flex flex-col gap-6 animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-green-800 dark:text-green-300 text-xs font-bold uppercase tracking-wider w-fit">
                        <span className="w-2 h-2 rounded-full bg-primary-green"></span>
                        Since 2018
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-black leading-[1.1] tracking-tight text-[#111812] dark:text-white">
                        Bridging Korea <br/>&amp; ASEAN through <span className="text-primary">Sustainable Trade</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-lg leading-relaxed">
                        eROUM Global is your trusted partner in Palm Acid Oil (PAO) trading and strategic business development consulting. We connect markets with integrity and vision.
                    </p>
                    <div className="pt-4 flex gap-4">
                        <button onClick={scrollToContact} className="h-12 px-8 rounded-lg bg-[#111812] text-white font-bold hover:bg-black transition-all shadow-md">
                            Contact Us
                        </button>
                    </div>
                </div>
                <div className="relative w-full aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden animate-fade-in-up delay-[200ms] shadow-2xl shadow-green-900/10">
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent z-10"></div>
                    <img alt="Abstract soothing green oil liquid waves" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGesd9_5uJe_O4GtFfGDEFjN3_H-zaIizUftoLRrXuqjks7N77i35d-TunJcFhMzUdD7vn2004KflfsVjl8PgO_jqqjFvrZ028mXUcVrnOgVItt6B-LC0qgb3PO6NY6PmAsJxtfWOa34RFiKfYdeWadk6t8-1l1jKXJ96rVYZla2ynP-eHEbzXD9md2uXO9CNO0mv3MZG3bRcP_SJdg-u4rHp3QlwPTfddIEUzif_MwmFcEQVnP26SZNI_uYN95aJyFGLrJ5tNWGc"/>
                    <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-5 rounded-xl border border-white/20 shadow-lg z-20 flex items-center gap-4">
                        <div className="bg-secondary/30 p-3 rounded-full text-green-800">
                            <span className="material-symbols-outlined">eco</span>
                        </div>
                        <div>
                            <p className="text-xs text-gray-500 uppercase font-bold">Sustainability Goal</p>
                            <p className="text-sm font-bold text-gray-900">100% Eco-Friendly Supply Chain</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};