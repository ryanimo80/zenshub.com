import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { motion as Motion, AnimatePresence } from 'framer-motion'

function App() {
  return (
    <div className="bg-bg-oled text-text-primary min-h-screen selection:bg-primary/30 selection:text-white">
      <AnimatePresence>
        <Motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Navigation */}
          <Navbar />

          {/* Main Content */}
          <main>
            <Hero />
            <Projects />
            <About />
            <Contact />
          </main>

          {/* Footer */}
          <Footer />

          {/* Global Background Elements */}
          <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/5 rounded-full blur-[120px]"></div>
          </div>
        </Motion.div>
      </AnimatePresence>
    </div>
  )
}

export default App
