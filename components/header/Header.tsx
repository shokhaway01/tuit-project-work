'use client'

import Link from 'next/link';
import { useState } from 'react';

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 bg-linear-to-r from-slate-900 to-slate-800 shadow-lg">
            <div className="flex-1">
                <Link href="/" className="md:text-3xl text-xl font-black bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    SHOKHAWAY INC.
                </Link>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-10">
                <Link 
                    href="/courses" 
                    className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 font-semibold text-sm uppercase tracking-wider"
                >
                    Курсы
                </Link>
                <Link 
                    href="/tests" 
                    className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 font-semibold text-sm uppercase tracking-wider"
                >
                    Тесты
                </Link>
                <Link 
                    href="/contacts" 
                    className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 font-semibold text-sm uppercase tracking-wider"
                >
                    Контакты
                </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden flex flex-col gap-1.5 focus:outline-none"
            >
                <span className={`w-6 h-0.5 bg-cyan-400 transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`w-6 h-0.5 bg-cyan-400 transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-6 h-0.5 bg-cyan-400 transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>

            {/* Mobile Navigation */}
            {isOpen && (
                <nav className="absolute top-16 left-0 right-0 bg-slate-900 flex flex-col gap-4 p-8 md:hidden">
                    <Link 
                        href="/courses" 
                        className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 font-semibold text-sm uppercase tracking-wider"
                    >
                        Курсы
                    </Link>
                    <Link 
                        href="/tests" 
                        className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 font-semibold text-sm uppercase tracking-wider"
                    >
                        Тесты
                    </Link>
                    <Link 
                        href="/contacts" 
                        className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 font-semibold text-sm uppercase tracking-wider"
                    >
                        Контакты
                    </Link>
                </nav>
            )}
        </header>
    )
}

export const HeroSection = () => {
    return (
        <section className="mt-15 min-h-screen bg-linear-to-b from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-8 py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto w-full">
                
                {/* Left Content */}
                <div className="flex flex-col gap-6">
                    <h1 className="text-4xl md:text-6xl font-black bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight">
                        Будущее образования здесь
                    </h1>
                    
                    <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
                        Погрузитесь в мир инновационного обучения. Наши курсы разработаны экспертами индустрии, чтобы подготовить вас к вызовам завтрашнего дня. Учитесь, растите, достигайте новых высот вместе с Shokhaway.
                    </p>
                    
                    <div className="flex gap-4 pt-4">
                        <Link 
                            href="/courses"
                            className="px-8 py-3 bg-linear-to-r from-cyan-400 to-blue-500 text-slate-900 font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 uppercase tracking-wider"
                        >
                            Начать обучение
                        </Link>
                        <Link 
                            href="/contacts"
                            className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 font-bold rounded-lg hover:bg-cyan-400/10 transition-all duration-300 uppercase tracking-wider"
                        >
                            Узнать больше
                        </Link>
                    </div>
                </div>

                {/* Right - GIF Placeholder */}
                <div className="relative">
                    <div className="w-full aspect-square bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-lg border-2 border-cyan-400/50 flex items-center justify-center backdrop-blur-sm">
                        <div className="text-center">
                            <p className="text-slate-400 text-lg font-semibold">
                                [Место для футуристичной гифки]
                            </p>
                            <p className="text-slate-500 text-sm mt-2">
                                Замените на изображение или GIF
                            </p>
                        </div>
                    </div>
                    
                    {/* Animated glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg opacity-20 blur-2xl -z-10 animate-pulse"></div>
                </div>

            </div>
        </section>
    )
}
