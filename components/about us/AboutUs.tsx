export const AboutUs = () => {
    return (
        <section id="#about" className="py-20 px-4 bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
            </div>
            
            <div className="max-w-4xl mx-auto relative z-10">
                <h2 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">О нас</h2>
                <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-8"></div>
                
                <div className="space-y-8">
                    <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
                        <p className="text-lg leading-relaxed text-gray-200">
                            <span className="text-2xl mr-3">🎯</span>
                            Мы создали этот проект из глубокого убеждения, что технология должна быть доступной и полезной для всех. Наша команда состоит из разработчиков и дизайнеров, объединённых одной целью — сделать жизнь проще.
                        </p>
                    </div>
                    
                    <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20">
                        <p className="text-lg leading-relaxed text-gray-200">
                            <span className="text-2xl mr-3">📖</span>
                            <span className="text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text font-semibold">История начала:</span> Всё началось с простой идеи решить проблему, с которой сталкивались лично мы. Мы видели пробел на рынке и решили его заполнить инновационным решением.
                        </p>
                    </div>
                    
                    <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/20">
                        <p className="text-lg leading-relaxed text-gray-200">
                            <span className="text-2xl mr-3">✨</span>
                            <span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text font-semibold">Наша миссия:</span> Мы верим в творчество, качество и внимание к деталям. Каждый день мы работаем, чтобы превзойти ожидания наших пользователей.
                        </p>
                    </div>
                    
                    <div className="mt-12 pt-8 border-t border-white/10 text-center">
                        <p className="text-base text-gray-300 flex items-center justify-center gap-2">
                            <span className="animate-bounce" style={{animationDelay: '0s'}}>🚀</span>
                            Спасибо, что вы с нами в этом путешествии
                            <span className="animate-bounce" style={{animationDelay: '0.2s'}}>🎉</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
