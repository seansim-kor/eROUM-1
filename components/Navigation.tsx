import React, { useState } from 'react';
import { Logo } from './Logo';

export const Navigation: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
        setIsMenuOpen(false);
        setActiveSection(id);
    };

    const NavButton: React.FC<{ id: string; label: string }> = ({ id, label }) => (
        <button 
            onClick={() => scrollToSection(id)}
            className={`text-sm font-medium transition-colors ${activeSection === id ? "text-primary font-bold" : "text-gray-700 hover:text-primary dark:text-gray-300"}`}
        >
            {label}
        </button>
    );

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-[#f0f4f1] bg-white/90 backdrop-blur-md dark:bg-background-dark/90 dark:border-white/10">
            <div className="px-6 lg:px-12 py-4 flex items-center justify-between max-w-[1440px] mx-auto">
                <button onClick={() => scrollToSection('home')} className="flex items-center gap-4 text-[#111812] dark:text-white hover:opacity-80 transition-opacity">
                    <Logo />
                    <h2 className="text-xl font-bold tracking-tight">eROUM Global</h2>
                </button>
                
                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-8 ml-auto mr-8">
                    <NavButton id="home" label="Home" />
                    <NavButton id="about" label="About" />
                    <NavButton id="business" label="Business" />
                    <NavButton id="contact" label="Contact" />
                </div>
                
                <div className="flex items-center gap-3">
                    <button className="hidden sm:flex items-center justify-center rounded-lg h-9 px-4 bg-gray-100 hover:bg-gray-200 text-xs font-bold transition-colors">
                        EN / KR
                    </button>
                    <button onClick={() => scrollToSection('contact')} className="hidden sm:flex items-center justify-center rounded-lg h-10 px-6 bg-primary hover:bg-[#d44e0f] text-white text-sm font-bold transition-colors shadow-lg shadow-primary/20">
                        Contact Us
                    </button>
                        <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden flex items-center p-2 text-gray-600"
                    >
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                </div>
            </div>
            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-white dark:bg-background-dark border-b border-gray-200 p-4 flex flex-col gap-4 shadow-xl animate-fade-in-up">
                    <button onClick={() => scrollToSection('home')} className="text-base text-left font-medium p-2 hover:bg-gray-50 rounded dark:text-white dark:hover:bg-white/10">Home</button>
                    <button onClick={() => scrollToSection('about')} className="text-base text-left font-medium p-2 hover:bg-gray-50 rounded dark:text-white dark:hover:bg-white/10">About</button>
                    <button onClick={() => scrollToSection('business')} className="text-base text-left font-medium p-2 hover:bg-gray-50 rounded dark:text-white dark:hover:bg-white/10">Business</button>
                    <button onClick={() => scrollToSection('contact')} className="text-base text-left font-medium p-2 hover:bg-gray-50 rounded dark:text-white dark:hover:bg-white/10">Contact</button>
                </div>
            )}
        </nav>
    );
};