import React from 'react';

export const Hero: React.FC = () => {
    const scrollToAbout = () => {
        const element = document.getElementById('about');
        if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
    };

    return (
        <section id="home" className="w-full flex justify-center relative overflow-hidden py-10">
            <div className="w-full max-w-[1440px] px-4 md:px-10 py-5">
                <div className="relative rounded-xl overflow-hidden min-h-[600px] flex items-center justify-center bg-cover bg-center shadow-lg" 
                    style={{backgroundImage: 'linear-gradient(rgba(234, 240, 246, 0.4) 0%, rgba(234, 240, 246, 0.7) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDM9yUZ4a2AUQeSUUlVPgW1IEaheUdNZmp7ErktdXyyLEG4dxJEh4r-vZvmhqCghyeoSm-6R_75VDjSuroUuC4IYIM8czuICBL2TV3eBW4pYnkR77mGm8YghVTMJt2k40QQKaHUqAsGu4cflR8INv6S5ePHgaCG_UbdNl97RfEAXIScPmS-4PEXfzXhaftITPaNd4a0uIMyC_kWLxZBaR_IqlsrINeC7nyK7ra2DV_PdDX1h9eZABLnyze6cF6USSOK8_DyvIMbpY0")'}}>
                    <div className="relative z-10 flex flex-col items-center text-center max-w-[800px] px-4 gap-6 animate-fade-in-up">
                        <h1 className="text-text-dark text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight">
                            Bridging Resources,<br/>
                            <span className="text-primary">Refining the Future</span>
                        </h1>
                        <h2 className="text-text-light text-lg md:text-xl font-normal leading-relaxed max-w-[600px]">
                            Premier Palm Acid Oil Trading &amp; Strategic Consulting connecting Korea and Malaysia.
                        </h2>
                        <div className="pt-4">
                            <button onClick={scrollToAbout} className="flex items-center gap-2 h-12 px-8 rounded-full bg-primary hover:bg-primary/90 transition-all text-background-light text-white text-base font-bold tracking-wide transform hover:scale-105 duration-200 shadow-lg shadow-primary/30">
                                <span>Explore Our Solutions</span>
                                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                            </button>
                        </div>
                    </div>
                    <div className="absolute inset-0 opacity-10 pointer-events-none"></div>
                </div>
            </div>
        </section>
    );
};