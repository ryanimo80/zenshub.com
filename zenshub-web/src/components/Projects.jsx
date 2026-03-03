import { motion as Motion } from 'framer-motion'
import { ExternalLink, Smartphone, Zap, Trophy } from 'lucide-react'

const Projects = () => {
    const projects = [
        {
            title: 'BMI Quiz',
            description: 'A comprehensive health tracking application with smart analytics and personalized tips.',
            icon: <Trophy className="w-6 h-6 text-accent" />,
            tag: 'Featured',
            color: 'from-primary/20 to-secondary/20',
            size: 'md:col-span-2 md:row-span-2'
        },
        {
            title: 'Smart Quiz',
            description: 'AI-powered learning platform with adaptive difficulty.',
            icon: <Zap className="w-6 h-6 text-yellow-400" />,
            tag: 'AI Tools',
            color: 'from-yellow-400/10 to-orange-400/10',
            size: 'md:col-span-1 md:row-span-1'
        },
        {
            title: 'Expense Tracker',
            description: 'Minimalist financial management for modern users.',
            icon: <Smartphone className="w-6 h-6 text-sky-400" />,
            tag: 'Fintech',
            color: 'from-sky-400/10 to-indigo-400/10',
            size: 'md:col-span-1 md:row-span-1'
        }
    ]

    return (
        <section id="projects" className="py-32 px-6 bg-bg-oled">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <Motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="font-heading text-4xl md:text-5xl font-bold mb-4"
                    >
                        Our <span className="text-primary italic">Signature</span> Work
                    </Motion.h2>
                    <Motion.p
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-text-secondary text-lg max-w-2xl"
                    >
                        Discover our ecosystem of mobile applications designed with precision
                        and a deep understanding of user behavior.
                    </Motion.p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 h-auto md:h-[700px]">
                    {projects.map((project, i) => (
                        <Motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -5 }}
                            className={`relative group overflow-hidden rounded-[2rem] p-8 glass-dark oled-border flex flex-col justify-between ${project.size}`}
                        >
                            {/* Background Glow */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center shadow-lg">
                                        {project.icon}
                                    </div>
                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted glass px-3 py-1.5 rounded-full">
                                        {project.tag}
                                    </span>
                                </div>

                                <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-text-secondary text-base leading-relaxed max-w-md">
                                    {project.description}
                                </p>
                            </div>

                            <div className="relative z-10 flex items-center justify-between mt-8">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3].map((num) => (
                                        <div key={num} className="w-8 h-8 rounded-full border-2 border-bg-oled bg-surface-hover flex items-center justify-center text-[10px] font-bold">
                                            {num}k
                                        </div>
                                    ))}
                                    <div className="w-8 h-8 rounded-full border-2 border-bg-oled bg-primary flex items-center justify-center text-[10px] font-bold text-white">
                                        +
                                    </div>
                                </div>

                                <Motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="w-12 h-12 bg-white/5 hover:bg-primary transition-colors rounded-2xl flex items-center justify-center oled-border"
                                >
                                    <ExternalLink className="w-5 h-5 text-white" />
                                </Motion.button>
                            </div>

                            {/* Decorative Mockup Element (Pseudo) */}
                            <div className="absolute -bottom-10 -right-10 w-40 h-80 bg-surface-hover opacity-20 rotate-12 rounded-[2rem] border-4 border-white/10 group-hover:rotate-6 transition-transform duration-500 pointer-events-none"></div>
                        </Motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
