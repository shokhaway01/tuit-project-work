export const Danger = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-gray-200 p-4 md:p-12">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-2xl md:text-4xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
                    🛡️ Кибербезопасность: Защитите себя онлайн
                </h1>
                
                <section className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 md:p-8 mb-6 md:mb-8 rounded-lg border border-yellow-400/20">
                    <h2 className="text-xl md:text-2xl font-bold text-yellow-400 mb-4 md:mb-6 border-l-4 border-yellow-400 pl-4">
                        ⚠️ Основные угрозы
                    </h2>
                    <ul className="space-y-2 md:space-y-3">
                        <li className="pb-2 md:pb-3 border-b border-yellow-400/10 last:border-b-0"><strong className="text-yellow-400">Фишинг:</strong> Поддельные письма и сайты, которые выглядят настоящими</li>
                        <li className="pb-2 md:pb-3 border-b border-yellow-400/10 last:border-b-0"><strong className="text-yellow-400">Вирусы:</strong> Вредоносные программы, которые повреждают устройство</li>
                        <li className="pb-2 md:pb-3 border-b border-yellow-400/10 last:border-b-0"><strong className="text-yellow-400">Слабые пароли:</strong> Легко подбираемые пароли облегчают доступ злоумышленникам</li>
                        <li className="pb-2 md:pb-3 border-b border-yellow-400/10 last:border-b-0"><strong className="text-yellow-400">Публичный Wi-Fi:</strong> Небезопасные сети позволяют перехватывать ваши данные</li>
                    </ul>
                </section>

                <section className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 md:p-8 rounded-lg border border-yellow-400/20">
                    <h2 className="text-xl md:text-2xl font-bold text-yellow-400 mb-4 md:mb-6 border-l-4 border-yellow-400 pl-4">
                        🔐 Как защититься
                    </h2>
                    <ul className="space-y-2 md:space-y-3">
                        <li className="pb-2 md:pb-3 border-b border-yellow-400/10 last:border-b-0">✅ Используйте <strong className="text-yellow-400">сложные пароли</strong></li>
                        <li className="pb-2 md:pb-3 border-b border-yellow-400/10 last:border-b-0">✅ Не открывайте <strong className="text-yellow-400">подозрительные ссылки</strong></li>
                        <li className="pb-2 md:pb-3 border-b border-yellow-400/10 last:border-b-0">✅ Обновляйте <strong className="text-yellow-400">программы и ОС</strong></li>
                        <li className="pb-2 md:pb-3 border-b border-yellow-400/10 last:border-b-0">✅ Включайте <strong className="text-yellow-400">двухфакторную аутентификацию</strong></li>
                        <li className="pb-2 md:pb-3 border-b border-yellow-400/10 last:border-b-0">✅ Проверяйте <strong className="text-yellow-400">адрес сайта</strong></li>
                        <li className="pb-2 md:pb-3 border-b border-yellow-400/10 last:border-b-0">✅ Избегайте данных в <strong className="text-yellow-400">открытых Wi-Fi</strong></li>
                    </ul>
                </section>
            </div>
        </div>
    )
}
