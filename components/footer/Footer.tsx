'use client';
export const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div className="animate-fade-in">
                        <h3 className="font-bold mb-4 text-lg">About</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">Your project description</p>
                    </div>
                    <div className="animate-fade-in animation-delay-100">
                        <h3 className="font-bold mb-4 text-lg">Links</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="/" className="hover:text-white transition-colors duration-300">Home</a></li>
                            <li><a href="/about" className="hover:text-white transition-colors duration-300">About</a></li>
                            <li><a href="/contact" className="hover:text-white transition-colors duration-300">Contact</a></li>
                        </ul>
                    </div>
                    <div className="animate-fade-in animation-delay-200">
                        <h3 className="font-bold mb-4 text-lg">Legal</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a href="/privacy" className="hover:text-white transition-colors duration-300">Privacy</a></li>
                            <li><a href="/terms" className="hover:text-white transition-colors duration-300">Terms</a></li>
                        </ul>
                    </div>
                    <div className="animate-fade-in animation-delay-300">
                        <h3 className="font-bold mb-4 text-lg">Follow</h3>
                        <div className="flex space-x-4">
                            <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-300">Instagram</a>
                            <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-300">GitHub</a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm animate-fade-in">
                    <p>&copy; 2026 Your Company. K.Shohjaxon production.</p>
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .animate-fade-in {
                    animation: fadeIn 0.6s ease-out forwards;
                    opacity: 0;
                }
                
                .animation-delay-100 { animation-delay: 0.1s; }
                .animation-delay-200 { animation-delay: 0.2s; }
                .animation-delay-300 { animation-delay: 0.3s; }
            `}</style>
        </footer>
    )
}
