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
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        Курсы
                    </Link>
                    <Link 
                        href="/tests" 
                        className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 font-semibold text-sm uppercase tracking-wider"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        Тесты
                    </Link>
                    <Link 
                        href="/contacts" 
                        className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 font-semibold text-sm uppercase tracking-wider"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        Контакты
                    </Link>
                </nav>
            )}
        </header>
    )
}

