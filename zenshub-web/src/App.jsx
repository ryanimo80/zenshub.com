import { useState, useEffect } from 'react'

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || 
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
    }
    return false
  })

  useEffect(() => {
    const root = window.document.documentElement
    if (darkMode) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-background text-text-main dark:bg-gray-900 dark:text-white transition-colors duration-300">
        
        {/* Navigation */}
        <nav className="fixed top-4 left-4 right-4 z-50">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/90 dark:bg-white/10 backdrop-blur-md rounded-full px-6 py-3 shadow-lg border border-gray-100 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <a href="#" className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary dark:bg-white rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white dark:text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <span className="font-heading font-bold text-lg text-primary dark:text-white">ZensHub</span>
                </a>
                
                <div className="hidden md:flex items-center gap-8">
                  <a href="#about" className="text-secondary dark:text-gray-300 hover:text-primary dark:hover:text-white transition-colors cursor-pointer">About</a>
                  <a href="#projects" className="text-secondary dark:text-gray-300 hover:text-primary dark:hover:text-white transition-colors cursor-pointer">Projects</a>
                  <a href="#contact" className="text-secondary dark:text-gray-300 hover:text-primary dark:hover:text-white transition-colors cursor-pointer">Contact</a>
                </div>

                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => setDarkMode(!darkMode)}
                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
                    aria-label="Toggle dark mode"
                  >
                    {darkMode ? (
                      <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
                      </svg>
                    )}
                  </button>
                  <a href="#contact" className="bg-cta text-white px-5 py-2 rounded-full font-medium hover:bg-primary transition-colors cursor-pointer">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="hero-gradient dark:hero-gradient-dark pt-28 pb-20 lg:pt-40 lg:pb-32">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 bg-white dark:bg-white/10 px-4 py-2 rounded-full shadow-sm mb-6">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse-soft"></span>
                  <span className="text-sm text-secondary dark:text-gray-300 font-medium">Developing next app</span>
                </div>
                
                <h1 className="font-heading text-4xl lg:text-6xl font-bold text-primary dark:text-white leading-tight mb-6">
                  Building the Future<br />
                  <span className="gradient-text">Mobile Applications</span>
                </h1>
                
                <p className="text-lg text-secondary dark:text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0">
                  ZensHub is a technology startup specializing in developing high-quality mobile applications, 
                  delivering exceptional user experiences and smart solutions for modern life.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a href="#projects" className="bg-cta text-white px-8 py-4 rounded-full font-semibold hover:bg-primary transition-all cursor-pointer hover:shadow-lg inline-flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    View Projects
                  </a>
                  <a href="#about" className="bg-white dark:bg-white/10 text-primary dark:text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-50 dark:hover:bg-white/20 transition-all cursor-pointer inline-flex items-center justify-center gap-2 border border-gray-200 dark:border-gray-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    Learn More
                  </a>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                  <div>
                    <div className="font-heading text-2xl lg:text-3xl font-bold text-primary dark:text-white">5+</div>
                    <div className="text-sm text-secondary dark:text-gray-400">Projects</div>
                  </div>
                  <div>
                    <div className="font-heading text-2xl lg:text-3xl font-bold text-primary dark:text-white">10K+</div>
                    <div className="text-sm text-secondary dark:text-gray-400">Users</div>
                  </div>
                  <div>
                    <div className="font-heading text-2xl lg:text-3xl font-bold text-primary dark:text-white">4.8</div>
                    <div className="text-sm text-secondary dark:text-gray-400">Rating</div>
                  </div>
                </div>
              </div>
              
              {/* Hero Image / Mockup */}
              <div className="relative">
                <div className="relative animate-float">
                  <div className="bg-gradient-to-br from-primary to-cta rounded-3xl p-2 shadow-2xl">
                    <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden">
                      <div className="bg-primary dark:bg-gray-900 px-4 py-3 flex items-center gap-2">
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      </div>
                      <div className="p-6 bg-gradient-to-br from-blue-50 to-white dark:from-gray-700 dark:to-gray-800">
                        <div className="text-center">
                          <div className="w-20 h-20 bg-cta rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg">
                            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                            </svg>
                          </div>
                          <h3 className="font-heading text-xl font-bold text-primary dark:text-white mb-2">BMI Quiz</h3>
                          <p className="text-secondary dark:text-gray-300 text-sm mb-4">Track Your BMI</p>
                          <div className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-4 py-2 rounded-full text-sm font-medium inline-block">
                            ⭐ 4.9/5
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 p-3 rounded-xl shadow-lg cursor-pointer hover:scale-105 transition-transform">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs text-secondary dark:text-gray-400">Free</div>
                      <div className="text-sm font-bold text-primary dark:text-white">Download</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 p-3 rounded-xl shadow-lg cursor-pointer hover:scale-105 transition-transform">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs text-secondary dark:text-gray-400">iOS & Android</div>
                      <div className="text-sm font-bold text-primary dark:text-white">Cross-platform</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 lg:py-28 bg-white dark:bg-gray-900">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary dark:text-white mb-4">
                Featured Projects
              </h2>
              <p className="text-secondary dark:text-gray-300 text-lg max-w-2xl mx-auto">
                We are proud to present our developed and released applications, 
                bringing real value to users.
              </p>
            </div>
            
            {/* Featured Project: BMI Quiz */}
            <div className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 lg:p-12 mb-12 border border-blue-100 dark:border-gray-700">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-4 py-1 rounded-full text-sm font-medium mb-4">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    Free App
                  </div>
                  
                  <h3 className="font-heading text-2xl lg:text-3xl font-bold text-primary dark:text-white mb-4">
                    BMI Quiz
                  </h3>
                  
                  <p className="text-secondary dark:text-gray-300 mb-6">
                    A free mobile application that helps you easily track and manage your BMI. 
                    With a friendly interface and smart features, BMI Quiz supports you 
                    on your health journey effectively.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
                      <div className="font-heading text-xl font-bold text-primary dark:text-white">Free</div>
                      <div className="text-sm text-secondary dark:text-gray-400">Unlimited use</div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
                      <div className="font-heading text-xl font-bold text-primary dark:text-white">Cross-platform</div>
                      <div className="text-sm text-secondary dark:text-gray-400">iOS & Android</div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    <div className="flex items-center gap-2 text-sm text-secondary dark:text-gray-300">
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Track BMI over time
                    </div>
                    <div className="flex items-center gap-2 text-sm text-secondary dark:text-gray-300">
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Quick health assessment
                    </div>
                    <div className="flex items-center gap-2 text-sm text-secondary dark:text-gray-300">
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Health improvement tips
                    </div>
                  </div>
                </div>
                
                <div className="order-1 lg:order-2">
                  <div className="bg-gradient-to-br from-primary to-cta rounded-3xl p-1 shadow-2xl max-w-xs mx-auto">
                    <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden">
                      <div className="bg-primary dark:bg-gray-900 px-4 py-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                        </div>
                        <span className="text-white text-xs">BMI Quiz</span>
                      </div>
                      <div className="p-6 space-y-4">
                        <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm text-secondary dark:text-gray-300">Your BMI</span>
                            <span className="font-heading text-xl font-bold text-primary dark:text-white">22.5</span>
                          </div>
                          <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                            <div className="h-full w-2/3 bg-green-500 rounded-full"></div>
                          </div>
                          <span className="text-xs text-green-600 dark:text-green-400 font-medium">Normal weight</span>
                        </div>
                        
                        <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4">
                          <div className="text-sm text-secondary dark:text-gray-300 mb-1">Weight</div>
                          <div className="font-heading text-lg font-bold text-primary dark:text-white">65 kg</div>
                        </div>
                        
                        <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4">
                          <div className="text-sm text-secondary dark:text-gray-300 mb-1">Height</div>
                          <div className="font-heading text-lg font-bold text-primary dark:text-white">170 cm</div>
                        </div>
                        
                        <div className="flex gap-2">
                          <div className="flex-1 bg-cta text-white text-center py-2 rounded-lg text-sm font-medium cursor-pointer hover:opacity-90">
                            Recalculate
                          </div>
                          <div className="flex-1 bg-primary text-white text-center py-2 rounded-lg text-sm font-medium cursor-pointer hover:opacity-90">
                            Save
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Other Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl p-6 hover:shadow-xl transition-shadow cursor-pointer group">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                  </svg>
                </div>
                <h4 className="font-heading text-lg font-bold text-primary dark:text-white mb-2">Smart Quiz</h4>
                <p className="text-secondary dark:text-gray-300 text-sm mb-4">Smart quiz app with AI</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-secondary dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">In Development</span>
                  <span className="text-sm text-cta font-medium">Coming Soon</span>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl p-6 hover:shadow-xl transition-shadow cursor-pointer group">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h4 className="font-heading text-lg font-bold text-primary dark:text-white mb-2">Expense Tracker</h4>
                <p className="text-secondary dark:text-gray-300 text-sm mb-4">Smart personal expense management</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-secondary dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">In Development</span>
                  <span className="text-sm text-cta font-medium">Coming Soon</span>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl p-6 hover:shadow-xl transition-shadow cursor-pointer group">
                <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-cyan-600 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h4 className="font-heading text-lg font-bold text-primary dark:text-white mb-2">Daily Planner</h4>
                <p className="text-secondary dark:text-gray-300 text-sm mb-4">Daily task planning</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-secondary dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">In Development</span>
                  <span className="text-sm text-cta font-medium">Coming Soon</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 lg:py-28 bg-primary dark:bg-gray-950 text-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-6">
                  About ZensHub
                </h2>
                <p className="text-gray-300 text-lg mb-6">
                  ZensHub is a young technology startup, established with the mission to 
                  deliver high-quality mobile applications that make everyone's life easier.
                </p>
                <p className="text-gray-300 mb-8">
                  We focus on developing applications in health, education, and lifestyle. 
                  With an experienced team of passionate developers, ZensHub is committed 
                  to delivering the best products to users.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                      </svg>
                    </div>
                    <div>
                      <div className="font-heading font-bold">High Quality</div>
                      <div className="text-sm text-gray-400">International Standards</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                      </svg>
                    </div>
                    <div>
                      <div className="font-heading font-bold">Fast</div>
                      <div className="text-sm text-gray-400">Development & Updates</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <div className="font-heading font-bold">User-Centric</div>
                      <div className="text-sm text-gray-400">Great Experience</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                      </svg>
                    </div>
                    <div>
                      <div className="font-heading font-bold">Continuous Improvement</div>
                      <div className="text-sm text-gray-400">Regular Updates</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-cta to-primary rounded-3xl p-8 shadow-2xl">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 rounded-2xl p-6 text-center">
                      <div className="font-heading text-3xl font-bold mb-2">5+</div>
                      <div className="text-sm text-gray-300">Projects</div>
                    </div>
                    <div className="bg-white/10 rounded-2xl p-6 text-center">
                      <div className="font-heading text-3xl font-bold mb-2">10K+</div>
                      <div className="text-sm text-gray-300">Users</div>
                    </div>
                    <div className="bg-white/10 rounded-2xl p-6 text-center">
                      <div className="font-heading text-3xl font-bold mb-2">4.8★</div>
                      <div className="text-sm text-gray-300">Rating</div>
                    </div>
                    <div className="bg-white/10 rounded-2xl p-6 text-center">
                      <div className="font-heading text-3xl font-bold mb-2">2</div>
                      <div className="text-sm text-gray-300">Platforms</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 lg:py-28 bg-background dark:bg-primary">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary dark:text-white mb-4">
                Contact Us
              </h2>
              <p className="text-secondary dark:text-gray-300 text-lg">
                Have an idea for a mobile app? Share it with ZensHub!
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100 dark:border-gray-700">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-secondary dark:text-gray-300 mb-2">Name</label>
                    <input type="text" id="name" name="name" placeholder="John Doe" 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 focus:border-cta focus:ring-2 focus:ring-cta/20 outline-none transition-all bg-white dark:bg-gray-700 text-text-main dark:text-white" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-secondary dark:text-gray-300 mb-2">Email</label>
                    <input type="email" id="email" name="email" placeholder="email@example.com" 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 focus:border-cta focus:ring-2 focus:ring-cta/20 outline-none transition-all bg-white dark:bg-gray-700 text-text-main dark:text-white" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-secondary dark:text-gray-300 mb-2">Subject</label>
                  <input type="text" id="subject" name="subject" placeholder="I want to develop an app..." 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 focus:border-cta focus:ring-2 focus:ring-cta/20 outline-none transition-all bg-white dark:bg-gray-700 text-text-main dark:text-white" />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-secondary dark:text-gray-300 mb-2">Message</label>
                  <textarea id="message" name="message" rows="5" placeholder="Describe your project in detail..." 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 focus:border-cta focus:ring-2 focus:ring-cta/20 outline-none transition-all resize-none bg-white dark:bg-gray-700 text-text-main dark:text-white"></textarea>
                </div>
                
                <button type="submit" className="w-full bg-cta text-white py-4 rounded-xl font-semibold hover:bg-primary transition-all cursor-pointer hover:shadow-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-primary dark:bg-gray-950 text-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div className="md:col-span-2">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <span className="font-heading font-bold text-xl">ZensHub</span>
                </div>
                <p className="text-gray-400 max-w-md">
                  A technology startup specializing in developing high-quality mobile applications, 
                  bringing real value to users.
                </p>
              </div>
              
              <div>
                <h4 className="font-heading font-bold mb-4">Links</h4>
                <ul className="space-y-2">
                  <li><a href="#about" className="text-gray-400 hover:text-white transition-colors cursor-pointer">About</a></li>
                  <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Projects</a></li>
                  <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Contact</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-heading font-bold mb-4">Projects</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">BMI Quiz</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Smart Quiz</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Expense Tracker</a></li>
                </ul>
              </div>
            </div>
            
            <div className="pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © 2026 ZensHub. All rights reserved.
              </p>
              <div className="flex items-center gap-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer" aria-label="Facebook">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer" aria-label="Twitter">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer" aria-label="Instagram">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </footer>

      </div>
    </div>
  )
}

export default App
