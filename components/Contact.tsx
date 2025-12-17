import React from 'react';

export const Contact: React.FC = () => {
    return (
        <section id="contact" className="w-full px-4 lg:px-40 py-20 bg-background-light dark:bg-background-dark">
            <div className="mx-auto max-w-[1200px] flex flex-col items-center">
                <div className="mb-12 text-center max-w-2xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 dark:border-white/10 mb-4">
                        <span className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Get in Touch</span>
                    </div>
                    <h2 className="text-slate-900 dark:text-white text-[32px] font-bold leading-tight tracking-[-0.015em] mb-4">Contact Information</h2>
                    <p className="text-slate-500 dark:text-slate-400 text-lg">We are ready to discuss your business needs. Reach out to us through the channels below.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-12">
                    {/* Office Card */}
                    <div className="bg-white dark:bg-slate-900 rounded-xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center h-full">
                        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                            <span className="material-symbols-outlined text-3xl">location_on</span>
                        </div>
                        <h3 className="text-slate-900 dark:text-white text-xl font-bold mb-3">Our Office</h3>
                        <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                            Selangor, Malaysia
                        </p>
                    </div>
                    {/* Email Card */}
                    <div className="bg-white dark:bg-slate-900 rounded-xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center h-full">
                        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                            <span className="material-symbols-outlined text-3xl">mail</span>
                        </div>
                        <h3 className="text-slate-900 dark:text-white text-xl font-bold mb-3">Email Us</h3>
                        <a className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors text-base font-medium break-all" href="mailto:seansim.kor@gmail.com">
                            seansim.kor@gmail.com
                        </a>
                        <p className="text-slate-400 text-sm mt-2">Support 24/7</p>
                    </div>
                    {/* Phone Card */}
                    <div className="bg-white dark:bg-slate-900 rounded-xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center h-full">
                        <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                            <span className="material-symbols-outlined text-3xl">call</span>
                        </div>
                        <h3 className="text-slate-900 dark:text-white text-xl font-bold mb-3">Call Us</h3>
                        <a className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors text-base font-medium" href="tel:+60172018149">
                            +60 17 201 8149
                        </a>
                        <p className="text-slate-400 text-sm mt-2">Mon - Fri, 9am - 6pm</p>
                    </div>
                </div>

                {/* Map */}
                <div className="w-full bg-white dark:bg-slate-900 rounded-xl overflow-hidden h-[400px] shadow-sm border border-slate-200 dark:border-slate-800 relative group">
                    <img alt="Static Map of Selangor location" className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDP8C__Qc7cBV012EKp8HkOzm5wtfWQDw1os4Q-1Ch0Eyyo6igRTpYHXXfBUoS8S8LflLJzKbpufpNo_h4I0wa4xbd_A6JjPHX57UzVAe2Of_KLst5sftSfxkNmhufgOrVk3po-euoLwlN3RSNj5oRlQhbIHR39lH4Hq1Z_3LR3L1uRqM7tBKxIc4PS93okTf9KS7-uyqbTBzUv00_YSfoWePoAc894ejAK4sPJU7OtXlEM8LvXGKsyXTkJabD8Qo72FwfGVCP7u68"/>
                    <div className="absolute inset-0 bg-slate-900/10 flex items-center justify-center pointer-events-none">
                        <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-lg shadow-lg flex items-center gap-3">
                            <span className="material-symbols-outlined text-primary text-2xl">map</span>
                            <span className="text-base font-bold text-slate-900">View on Google Maps</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};