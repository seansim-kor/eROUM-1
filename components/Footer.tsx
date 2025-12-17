import React from 'react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
             const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
    };
    return (
        <footer className="bg-gray-50 dark:bg-[#0a160c] pt-20 pb-10 px-6 lg:px-12 border-t border-gray-200 dark:border-white/5">
            <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2 text-[#111812] dark:text-white mb-2">
                        <Logo />
                        <span className="text-lg font-bold">eROUM Global</span>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                        Bridging Korea and Malaysia through sustainable trade and expert consulting.
                    </p>
                </div>
                <div className="flex flex-col gap-4">
                    <h4 className="font-bold text-[#111812] dark:text-white">Company</h4>
                    <button onClick={() => scrollToSection('about')} className="text-left text-gray-500 dark:text-gray-400 text-sm hover:text-primary transition-colors">About Us</button>
                    <a className="text-gray-500 dark:text-gray-400 text-sm hover:text-primary transition-colors" href="#">Careers</a>
                    <a className="text-gray-500 dark:text-gray-400 text-sm hover:text-primary transition-colors" href="#">Partners</a>
                </div>
                <div className="flex flex-col gap-4">
                    <h4 className="font-bold text-[#111812] dark:text-white">Services</h4>
                    <button onClick={() => scrollToSection('business')} className="text-left text-gray-500 dark:text-gray-400 text-sm hover:text-primary transition-colors">PAO Trading</button>
                    <button onClick={() => scrollToSection('business')} className="text-left text-gray-500 dark:text-gray-400 text-sm hover:text-primary transition-colors">Business Consulting</button>
                    <a className="text-gray-500 dark:text-gray-400 text-sm hover:text-primary transition-colors" href="#">Market Research</a>
                </div>
                <div className="flex flex-col gap-4">
                    <h4 className="font-bold text-[#111812] dark:text-white">Contact</h4>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                        Unit 12-3A, Menara 1MK,<br/>
                        1 Jalan Kiara, Mont Kiara,<br/>
                        50480 Kuala Lumpur, Malaysia
                    </p>
                    <a className="text-primary font-bold text-sm hover:underline" href="mailto:info@eroum.global">info@eroum.global</a>
                </div>
            </div>
            <div className="max-w-[1440px] mx-auto pt-8 border-t border-gray-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-400 text-xs">© 2023 eROUM Global Sdn Bhd. All rights reserved.</p>
                <div className="flex gap-6">
                    <a className="text-gray-400 hover:text-gray-600 dark:hover:text-white text-xs" href="#">Privacy Policy</a>
                    <a className="text-gray-400 hover:text-gray-600 dark:hover:text-white text-xs" href="#">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};