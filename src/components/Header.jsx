import { useState, useEffect } from 'react';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed w-full z-50 transition-all duration-300 ${
            scrolled ? 'bg-white/90 backdrop-blur-sm py-2 shadow-md' : 'bg-transparent py-4'
        }`}> Header
            <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
                <a href="#" className="text-2xl font-bold text-primary">Rishab R.</a>

                <nav className="hidden md:flex space-x-8">
                    {['Projects', 'Experience', 'Skills', 'Contact'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="font-medium hover:text-primary transition-colors"
                        >
                            {item}
                        </a>
                    ))}
                </nav>

                <button className="md:hidden text-xl">☰</button>
            </div>
        </header>
    );
}