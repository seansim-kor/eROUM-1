import React from 'react';

export const Business: React.FC = () => {
    return (
        <section id="business" className="w-full max-w-[1200px] px-6 md:px-10 py-10">
                {/* PAO Trading */}
            <div className="flex flex-col-reverse md:flex-row items-stretch gap-8 bg-surface-light dark:bg-[#1a2e1d] rounded-xl p-6 md:p-8 border border-border-light dark:border-white/10 shadow-lg mb-10 group hover:border-primary/30 transition-colors">
                <div className="flex-1 flex flex-col justify-center gap-6 md:pr-8">
                    <div>
                        <p className="text-primary text-sm font-bold uppercase tracking-wider mb-2">Core Business</p>
                        <h3 className="text-text-dark dark:text-white text-3xl font-bold mb-3">Palm Acid Oil (PAO) Trading</h3>
                        <p className="text-text-light dark:text-gray-300 text-base leading-relaxed">
                            We specialize in the sustainable sourcing, quality assurance, and global logistics of Palm Acid Oil. Our robust network ensures a consistent supply chain optimized for biofuel production and industrial applications.
                        </p>
                    </div>
                    <ul className="flex flex-col gap-3">
                        {["Direct sourcing from top-tier mills", "Rigorous quality control standards", "End-to-end logistics management"].map((txt, i) => (
                            <li key={i} className="flex items-center gap-3 text-text-dark dark:text-gray-200 text-sm">
                                <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                                {txt}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex-1 min-h-[300px] md:min-h-0">
                    <div className="w-full h-full rounded-lg bg-cover bg-center shadow-md transform group-hover:scale-[1.02] transition-transform duration-500" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBO346IB2PCZ-z5dllJ-pQzeveLheE9F_fnHEVzNR0Nx2Rh3vK8ougmnfCPFH7JnsZ2rNt-5VkHe75ZQh6Bh-OhepFzhO5H1AfGRcltd9kh3f1CGNGnWDkh_-qfMXxR1kyRw-rwR5K-QL5RKcNO0SDdYxhRG5tJ068ZFwa6La1Y2cjZOJwmTcGtHvbXoqrCyyPIwjiWc23fPhXXNXBB1Gk7EdDttUDTfZ-9NuihNNS6N7RUML5DGP0YrA7JtA_HuFfy2m3_BJPco6U")'}}>
                    </div>
                </div>
            </div>

            {/* Strategic Consulting */}
            <div className="flex flex-col md:flex-row items-stretch gap-8 bg-surface-light dark:bg-[#1a2e1d] rounded-xl p-6 md:p-8 border border-border-light dark:border-white/10 shadow-lg group hover:border-secondary-accent/50 transition-colors">
                <div className="flex-1 min-h-[300px] md:min-h-0">
                    <div className="w-full h-full rounded-lg bg-cover bg-center shadow-md transform group-hover:scale-[1.02] transition-transform duration-500" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCtNEhkeCrJVzR75R2AOR9nr6ev-NkYUxQoUBFSPAaED8f96waNYp8-UkjZTxMHQojIQ7aAKR42EJRWWhvsQwPiwaRsMRy4LnVgjhCJQauvOM7_ArR4cmviax7LDuNGxeIk9HF_klVDwY7IzcTHU3HP3uDc0uFkzvW5vOeczSWjjuEgVIIeJC6v3Om32eRhh2Ttsg8GB1h1cukGO6Ed0ZBvZIL51_L_gUxGlNp3oPHXY1mYbAWeDD0bj8EEAk2PoZQ3Xbz2PZ9v2Xk")'}}>
                    </div>
                </div>
                <div className="flex-1 flex flex-col justify-center gap-6 md:pl-8">
                    <div>
                        <p className="text-secondary-accent text-sm font-bold uppercase tracking-wider mb-2">Strategic Consulting</p>
                        <h3 className="text-text-dark dark:text-white text-3xl font-bold mb-3">Business Development</h3>
                        <p className="text-text-light dark:text-gray-300 text-base leading-relaxed">
                            Bridging the gap for Korean enterprises entering the Malaysian market. We provide expert market entry strategies, local regulatory insights, and business matching services to ensure a smooth and profitable expansion.
                        </p>
                    </div>
                    <ul className="flex flex-col gap-3">
                        {["Market feasibility studies", "Local partner identification", "Regulatory compliance guidance"].map((txt, i) => (
                            <li key={i} className="flex items-center gap-3 text-text-dark dark:text-gray-200 text-sm">
                                <span className="material-symbols-outlined text-secondary-accent text-[20px]">check_circle</span>
                                {txt}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};