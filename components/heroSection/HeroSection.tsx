import Link from 'next/link';
import futureGif from '../../public/futuregif.gif';

export const HeroSection = () => {
    return (
        <section className="mt-15 min-h-screen bg-linear-to-b from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4 md:px-8 py-12 md:py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto w-full">
                
                {/* Left Content */}
                <div className="flex flex-col gap-4 md:gap-6">
                    <h1 className="text-3xl md:text-6xl font-black bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight">
                        Будущее образования здесь
                    </h1>
                    
                    <p className="text-base md:text-xl text-slate-300 leading-relaxed">
                        Погрузитесь в мир инновационного обучения. Наши курсы разработаны экспертами индустрии, чтобы подготовить вас к вызовам завтрашнего дня.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4">
                        <Link 
                            href="/courses"
                            className="px-6 md:px-8 py-2.5 md:py-3 bg-linear-to-r from-cyan-400 to-blue-500 text-slate-900 font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 uppercase tracking-wider text-sm md:text-base text-center"
                        >
                            Начать обучение
                        </Link>
                        <a 
                            href="/#about"
                            className="px-6 md:px-8 py-2.5 md:py-3 border-2 border-cyan-400 text-cyan-400 font-bold rounded-lg hover:bg-cyan-400/10 transition-all duration-300 uppercase tracking-wider text-sm md:text-base text-center"
                        >
                            Узнать больше
                        </a>
                    </div>
                </div>

                {/* Right - GIF Placeholder */}
                <div className="relative mt-8 md:mt-0">
                    <div className="w-full aspect-square bg-linear-to-br from-cyan-400/20 to-blue-500/20 rounded-lg border-2 border-cyan-400/50 flex items-center justify-center backdrop-blur-sm overflow-hidden">
                        <img 
                            src={futureGif.src}
                            alt="Future education"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    
                    {/* Animated glow effect */}
                    <div className="absolute inset-0 bg-linear-to-r from-cyan-400 to-blue-500 rounded-lg opacity-20 blur-2xl -z-10 animate-pulse"></div>
                </div>

            </div>
        </section>
    )
}
