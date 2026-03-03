import { motion as Motion } from 'framer-motion'
import { Shield, Target, Users } from 'lucide-react'

const About = () => {
    const values = [
        {
            title: 'High Quality',
            desc: 'International standards in performance and security.',
            icon: <Shield className="w-6 h-6 text-primary" />
        },
        {
            title: 'User-Centric',
            desc: 'Intuitive experiences that put people first.',
            icon: <Users className="w-6 h-6 text-secondary" />
        },
        {
            title: 'Goal Oriented',
            desc: 'Scalable solutions that grow with your business.',
            icon: <Target className="w-6 h-6 text-accent" />
        }
    ]

    return (
        <section id="about" className="py-32 px-6 bg-surface overflow-hidden relative">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <Motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="glass-dark rounded-[3rem] p-12 oled-border shadow-2xl relative z-10 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50"></div>
                            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-8 relative z-10 leading-tight">
                                Innovating at the Intersection of <span className="text-secondary">Art</span> and <span className="text-primary">Engineering</span>
                            </h2>
                            <p className="text-text-secondary text-lg mb-8 relative z-10 leading-relaxed">
                                ZensHub is more than just a dev studio. We are a collective of passionate builders, designers, and strategists
                                dedicated to creating digital products that solve real-world problems.
                            </p>
                            <div className="flex items-center gap-4 relative z-10">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3, 4].map(i => (
                                        <div key={i} className="w-10 h-10 rounded-full bg-surface-hover border-2 border-bg-oled flex items-center justify-center text-[10px] font-bold">
                                            {i}
                                        </div>
                                    ))}
                                </div>
                                <span className="text-sm font-bold text-text-muted">Trusted by innovators worldwide</span>
                            </div>
                        </div>

                        {/* Decorative Grid */}
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/10 rounded-full blur-[80px]"></div>
                    </Motion.div>

                    <div className="space-y-12">
                        <div>
                            <h3 className="font-heading text-2xl font-bold mb-6 flex items-center gap-3">
                                <span className="w-8 h-1 bg-primary rounded-full"></span>
                                Our Core Philosophy
                            </h3>
                            <div className="grid gap-6">
                                {values.map((v, i) => (
                                    <Motion.div
                                        key={v.title}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="glass-dark p-6 rounded-2xl oled-border flex gap-6 hover:bg-white/5 transition-colors cursor-default"
                                    >
                                        <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center flex-shrink-0">
                                            {v.icon}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-1">{v.title}</h4>
                                            <p className="text-text-secondary text-sm leading-relaxed">{v.desc}</p>
                                        </div>
                                    </Motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
