import { Smartphone } from 'lucide-react'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="py-20 px-6 border-t oled-border bg-bg-oled">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <a href="#" className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center oled-border">
                                <Smartphone className="w-6 h-6 text-primary" />
                            </div>
                            <span className="font-heading font-bold text-2xl tracking-tight">ZensHub</span>
                        </a>
                        <p className="text-text-secondary text-base max-w-sm leading-relaxed mb-8">
                            A forward-thinking technology studio crafting mobile experiences that resonate.
                            We believe in precision, performance, and purpose.
                        </p>
                        <div className="flex gap-4">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="w-10 h-10 rounded-xl bg-surface oled-border flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-all cursor-pointer">
                                    <div className="w-4 h-4 rounded-sm border-2 border-current opacity-50"></div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-heading font-bold mb-8 uppercase tracking-widest text-xs text-text-muted">Explore</h4>
                        <ul className="space-y-4">
                            {['Home', 'About', 'Projects', 'Services'].map(link => (
                                <li key={link}>
                                    <a href={`#${link.toLowerCase()}`} className="text-text-secondary hover:text-primary transition-colors text-sm font-medium">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-heading font-bold mb-8 uppercase tracking-widest text-xs text-text-muted">Legal</h4>
                        <ul className="space-y-4">
                            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(link => (
                                <li key={link}>
                                    <a href="#" className="text-text-secondary hover:text-primary transition-colors text-sm font-medium">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="pt-12 border-t oled-border flex flex-col md:row justify-between items-center gap-6">
                    <p className="text-text-muted text-xs font-bold uppercase tracking-widest">
                        © {currentYear} ZensHub Studio. Crafted with passion + precision.
                    </p>
                    <div className="flex gap-8">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-text-muted">System Operational</span>
                        </div>
                        <a href="#" className="text-[10px] font-bold uppercase tracking-widest text-text-muted hover:text-primary transition-colors">
                            Deploy Stats
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
