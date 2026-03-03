import { motion as Motion } from 'framer-motion'
import { Send, Mail, MapPin, Phone } from 'lucide-react'

const Contact = () => {
    return (
        <section id="contact" className="py-32 px-6 bg-bg-oled relative overflow-hidden">
            {/* Background Decorative Blur */}
            <div className="absolute bottom-0 left-0 w-full h-[500px] bg-primary/5 rounded-full blur-[150px] translate-y-1/2 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto">
                <div className="bg-surface rounded-[3rem] oled-border overflow-hidden shadow-2xl relative">
                    <div className="grid lg:grid-cols-5 h-full">
                        {/* Contact Info */}
                        <div className="lg:col-span-2 bg-primary p-12 md:p-16 flex flex-col justify-between text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>

                            <div className="relative z-10">
                                <h2 className="font-heading text-4xl md:text-5xl font-bold mb-8 leading-tight">
                                    Let's Build Something <span className="italic">Amazing</span> together.
                                </h2>
                                <p className="text-white/80 text-lg mb-12">
                                    Have a vision for a mobile app? Our team of experts is ready to bring it to life.
                                </p>

                                <div className="space-y-8">
                                    <div className="flex items-center gap-4 group cursor-pointer">
                                        <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-all">
                                            <Mail className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="text-xs font-bold uppercase tracking-widest text-white/60 mb-1">Email Us</div>
                                            <div className="font-bold text-lg">hello@zenshub.com</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 group cursor-pointer">
                                        <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-all">
                                            <Phone className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="text-xs font-bold uppercase tracking-widest text-white/60 mb-1">Call Us</div>
                                            <div className="font-bold text-lg">+1 (234) 567-890</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 group cursor-pointer">
                                        <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-all">
                                            <MapPin className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="text-xs font-bold uppercase tracking-widest text-white/60 mb-1">Visit Us</div>
                                            <div className="font-bold text-lg">123 Tech Avenue, SF</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="relative z-10 mt-16 pt-8 border-t border-white/20">
                                <div className="flex gap-4">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-primary transition-colors cursor-pointer">
                                            <div className="w-4 h-4 rounded-sm border-2 border-current"></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-3 p-12 md:p-16 bg-surface relative">
                            <h3 className="font-heading text-2xl font-bold mb-8">Send a Message</h3>
                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-text-muted ml-1">Full Name</label>
                                        <input
                                            type="text"
                                            placeholder="John Doe"
                                            className="w-full bg-surface-hover rounded-2xl p-4 oled-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-medium"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-text-muted ml-1">Email Address</label>
                                        <input
                                            type="email"
                                            placeholder="john@example.com"
                                            className="w-full bg-surface-hover rounded-2xl p-4 oled-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-medium"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-text-muted ml-1">Subject</label>
                                    <select className="w-full bg-surface-hover rounded-2xl p-4 oled-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-medium appearance-none">
                                        <option>App Development</option>
                                        <option>UI/UX Design</option>
                                        <option>Technical Consultation</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-text-muted ml-1">Message</label>
                                    <textarea
                                        rows="5"
                                        placeholder="Tell us about your project..."
                                        className="w-full bg-surface-hover rounded-2xl p-4 oled-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-medium resize-none"
                                    ></textarea>
                                </div>

                                <Motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all uppercase tracking-widest"
                                >
                                    Send Message
                                    <Send className="w-5 h-5" />
                                </Motion.button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
