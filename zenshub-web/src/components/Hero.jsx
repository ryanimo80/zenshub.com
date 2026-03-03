import { motion as Motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-24 pb-20 px-6 overflow-hidden bg-bg-oled">
            {/* Background Aura */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none opacity-50"></div>
            <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none opacity-30"></div>

            <div className="relative max-w-7xl mx-auto text-center">
                {/* Badge */}
                <Motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 glass-dark px-4 py-2 rounded-full oled-border mb-8 shadow-xl shadow-indigo-500/10"
                >
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span className="text-xs font-bold tracking-widest uppercase text-text-secondary">
                        Building Next-Gen Mobile Apps
                    </span>
                </Motion.div>

                {/* Headline */}
                <Motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-8 text-glow"
                >
                    Crafting <br />
                    <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                        Remarkable Mobile
                    </span> <br />
                    Experiences
                </Motion.h1>

                {/* Subtext */}
                <Motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="max-w-2xl mx-auto text-lg md:text-xl text-text-secondary mb-12 leading-relaxed"
                >
                    ZensHub is a technology startup specializing in high-performance iOS and Android applications
                    that deliver exceptional user experiences and real value.
                </Motion.p>

                {/* CTAs */}
                <Motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a
                        href="#projects"
                        className="group w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 hover:shadow-2xl hover:shadow-primary/40 transition-all hover:-translate-y-1"
                    >
                        View Our Work
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                        href="#contact"
                        className="w-full sm:w-auto glass-dark text-text-primary px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-white/10 transition-all oled-border shadow-xl shadow-white/5"
                    >
                        Get In Touch
                    </a>
                </Motion.div>

                {/* Stats Row */}
                <Motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 opacity-80"
                >
                    {[
                        { label: 'Projects', value: '5+' },
                        { label: 'Users', value: '10K+' },
                        { label: 'Rating', value: '4.8★' },
                        { label: 'Platforms', value: 'iOS/Android' }
                    ].map((stat, i) => (
                        <div key={i} className="text-center group cursor-pointer hover:scale-110 transition-transform">
                            <div className="text-3xl font-bold text-text-primary mb-1 group-hover:text-primary transition-colors">{stat.value}</div>
                            <div className="text-xs font-bold uppercase tracking-widest text-text-muted">{stat.label}</div>
                        </div>
                    ))}
                </Motion.div>
            </div>
        </section>
    )
}

export default Hero
