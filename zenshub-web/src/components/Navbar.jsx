import { motion as Motion } from 'framer-motion'
import { Menu, X, Smartphone } from 'lucide-react'
import { useState } from 'react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ]

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6">
            <div className="max-w-7xl mx-auto">
                <Motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="glass-dark rounded-2xl px-6 py-4 flex items-center justify-between oled-border shadow-2xl shadow-indigo-500/10"
                >
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
                            <Smartphone className="w-6 h-6 text-white" />
                        </div>
                        <span className="font-heading font-bold text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            ZensHub
                        </span>
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-text-secondary hover:text-primary transition-colors font-medium text-sm tracking-wide"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            className="bg-primary text-white px-6 py-2.5 rounded-xl font-bold hover:shadow-lg hover:shadow-primary/30 transition-all hover:-translate-y-0.5"
                        >
                            Get Started
                        </a>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-text-primary p-2"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </Motion.div>

                {/* Mobile Menu */}
                {isOpen && (
                    <Motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="md:hidden mt-4 glass-dark rounded-2xl p-6 oled-border"
                    >
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-text-secondary hover:text-primary transition-colors font-medium text-lg text-center"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="#contact"
                                onClick={() => setIsOpen(false)}
                                className="bg-primary text-white px-6 py-3 rounded-xl font-bold text-center"
                            >
                                Get Started
                            </a>
                        </div>
                    </Motion.div>
                )}
            </div>
        </nav>
    )
}

export default Navbar
