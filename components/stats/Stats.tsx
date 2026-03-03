'use client';

import { useEffect, useState } from "react";

export const StatsCard = ({ label, value, suffix }: { label: string; value: number; suffix: string }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const end = value;
        const duration = 2000;
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [value]);

    return (
        <div className="flex flex-col items-center p-8 bg-linear-to-br from-blue-500 via-blue-600 to-blue-700 rounded-xl text-white shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 animate-fadeInUp">
            <div className="text-5xl font-bold mb-2 animate-pulse">{count}{suffix}</div>
            <div className="text-sm font-medium tracking-wide">{label}</div>
        </div>
    );
};

export const StatsSection = () => {
    return (
        <div className="py-16 px-8 bg-linear-to-r from-slate-50 via-blue-50 to-slate-100 relative overflow-hidden">
            <style>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                @keyframes slideInRight {
                    from {
                        opacity: 0;
                        transform: translateX(50px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                @keyframes progressBar {
                    from {
                        width: 0%;
                    }
                }
                .animate-fadeInUp {
                    animation: fadeInUp 0.7s ease-out forwards;
                }
                .animate-slideInRight {
                    animation: slideInRight 0.8s ease-out forwards;
                }
                .progress-animate {
                    animation: progressBar 1.5s ease-out forwards;
                }
            `}</style>
            
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 animate-slideInRight">
                    <h2 className="text-4xl font-bold text-gray-900 leading-tight">Киберзащита для старшего поколения</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Каждый день тысячи пожилых людей становятся жертвами киберпреступлений. 
                        Наши специализированные курсы помогают старшему поколению безопасно пользоваться интернетом, 
                        защищать личные данные и избежать мошенничества.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        За последний год участники наших программ значительно повысили уровень цифровой грамотности 
                        и снизили риск стать жертвой киберугроз.
                    </p>
                </div>
                
                <div className="bg-white rounded-2xl shadow-2xl p-8 space-y-6 animate-fadeInUp" style={{animationDelay: '0.2s'}}>
                    <div className="space-y-6">
                        <div>
                            <div className="flex justify-between mb-3">
                                <span className="font-semibold text-gray-800">Защита от мошенничества</span>
                                <span className="text-blue-600 font-bold text-lg">92%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                                <div className="bg-linear-to-r from-blue-500 to-blue-600 h-3 rounded-full progress-animate" style={{width: '92%'}}></div>
                            </div>
                        </div>
                        
                        <div>
                            <div className="flex justify-between mb-3">
                                <span className="font-semibold text-gray-800">Уверенность в сети</span>
                                <span className="text-green-600 font-bold text-lg">85%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                                <div className="bg-linear-to-r from-green-500 to-green-600 h-3 rounded-full progress-animate" style={{width: '85%', animationDelay: '0.3s'}}></div>
                            </div>
                        </div>
                        
                        <div>
                            <div className="flex justify-between mb-3">
                                <span className="font-semibold text-gray-800">Снижение инцидентов</span>
                                <span className="text-purple-600 font-bold text-lg">78%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                                <div className="bg-linear-to-r from-purple-500 to-purple-600 h-3 rounded-full progress-animate" style={{width: '78%', animationDelay: '0.6s'}}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};