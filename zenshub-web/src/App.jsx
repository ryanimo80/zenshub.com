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
      <div className="min-h-screen bg-[#F5F3FF] dark:bg-[#0F172A] text-[#1E1B4B] dark:text-white">
        
        {/* Background Effects */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#6366F1]/20 dark:bg-[#6366F1]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#818CF8]/20 dark:bg-[#818CF8]/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#10B981]/10 dark:bg-[#10B981]/5 rounded-full blur-3xl"></div>
        </div>

        {/* Navigation - Glass */}
        <nav className="fixed top-4 left-4 right-4 z-50">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl rounded-2xl px-6 py-4 shadow-lg border border-white/20 dark:border-gray-700/50">
              <div className="flex items-center justify-between">
                <a href="#" className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#6366F1] to-[#818CF8] rounded-xl flex items-center justify-center shadow-lg shadow-[#6366F1]/30">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <span className="font-heading font-bold text-xl bg-gradient-to-r from-[#6366F1] to-[#818CF8] bg-clip-text text-transparent">ZensHub</span>
                </a>
                
                <div className="hidden md:flex items-center gap-8">
                  <a href="#about" className="text-[#1E1B4B]/70 dark:text-gray-300 hover:text-[#6366F1] dark:hover:text-[#818CF8] transition-colors font-medium cursor-pointer">About</a>
                  <a href="#projects" className="text-[#1E1B4B]/70 dark:text-gray-300 hover:text-[#6366F1] dark:hover:text-[#818CF8] transition-colors font-medium cursor-pointer">Projects</a>
                  <a href="#contact" className="text-[#1E1B4B]/70 dark:text-gray-300 hover:text-[#6366F1] dark:hover:text-[#818CF8] transition-colors font-medium cursor-pointer">Contact</a>
                </div>

                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => setDarkMode(!darkMode)}
                    className="p-2.5 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover:bg-[#6366F1]/10 dark:hover:bg-gray-700/50 transition-all cursor-pointer border border-white/20 dark:border-gray-600/30"
                    aria-label="Toggle dark mode"
                  >
                    {darkMode ? (
                      <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 text-[#6366F1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
                      </svg>
                    )}
                  </button>
                  <a href="#contact" className="bg-gradient-to-r from-[#10B981] to-[#34D399] text-white px-6 py-2.5 rounded-xl font-bold hover:shadow-lg hover:shadow-[#10B981]/30 transition-all cursor-pointer hover:-translate-y-0.5">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section - Glass */}
        <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 relative">
          <div className="max-w-7xl mx-auto relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Content */}
              <div className="space-y-8">
                {/* Glass Card */}
                <div className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl rounded-3xl p-8 lg:p-10 border border-white/30 dark:border-gray-700/30 shadow-xl">
                  <div className="inline-flex items-center gap-2 bg-[#10B981]/10 dark:bg-[#10B981]/20 px-4 py-2 rounded-full mb-6 border border-[#10B981]/20">
                    <span className="w-2 h-2 bg-[#10B981] rounded-full animate-pulse"></span>
                    <span className="text-sm font-semibold text-[#10B981]">Building Next-Gen Apps</span>
                  </div>
                  
                  <h1 className="font-heading text-4xl lg:text-6xl font-bold leading-tight mb-6 text-[#1E1B4B] dark:text-white">
                    Crafting<br />
                    <span className="bg-gradient-to-r from-[#6366F1] to-[#818CF8] bg-clip-text text-transparent">Amazing Mobile</span><br />
                    Experiences
                  </h1>
                  
                  <p className="text-lg text-[#1E1B4B]/70 dark:text-gray-300 mb-8 max-w-lg">
                    ZensHub is a technology startup specializing in developing high-quality mobile applications 
                    that deliver exceptional user experiences.
                  </p>
                  
                  <div className="flex flex-wrap gap-4">
                    <a href="#projects" className="bg-gradient-to-r from-[#6366F1] to-[#818CF8] text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl hover:shadow-[#6366F1]/30 transition-all cursor-pointer inline-flex items-center gap-2 hover:-translate-y-0.5">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                      </svg>
                      View Projects
                    </a>
                    <a href="#contact" className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm text-[#1E1B4B] dark:text-white px-8 py-4 rounded-xl font-bold border border-white/30 dark:border-gray-600/30 hover:bg-[#6366F1]/5 transition-all cursor-pointer inline-flex items-center gap-2">
                      Get In Touch
                    </a>
                  </div>
                </div>
                
                {/* Stats Glass */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-md rounded-2xl p-5 border border-white/20 dark:border-gray-700/30 text-center hover:bg-white/70 dark:hover:bg-gray-900/70 transition-all cursor-pointer group">
                    <div className="font-heading text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#6366F1] to-[#818CF8] bg-clip-text text-transparent group-hover:scale-110 transition-transform">5+</div>
                    <div className="text-sm font-medium text-[#1E1B4B]/60 dark:text-gray-400">Projects</div>
                  </div>
                  <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-md rounded-2xl p-5 border border-white/20 dark:border-gray-700/30 text-center hover:bg-white/70 dark:hover:bg-gray-900/70 transition-all cursor-pointer group">
                    <div className="font-heading text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#10B981] to-[#34D399] bg-clip-text text-transparent group-hover:scale-110 transition-transform">10K+</div>
                    <div className="text-sm font-medium text-[#1E1B4B]/60 dark:text-gray-400">Users</div>
                  </div>
                  <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-md rounded-2xl p-5 border border-white/20 dark:border-gray-700/30 text-center hover:bg-white/70 dark:hover:bg-gray-900/70 transition-all cursor-pointer group">
                    <div className="font-heading text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#6366F1] to-[#818CF8] bg-clip-text text-transparent group-hover:scale-110 transition-transform">4.8★</div>
                    <div className="text-sm font-medium text-[#1E1B4B]/60 dark:text-gray-400">Rating</div>
                  </div>
                </div>
              </div>
              
              {/* Right - Phone Mockup Glass */}
              <div className="relative flex justify-center">
                <div className="relative">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1] to-[#10B981] rounded-[3rem] blur-2xl opacity-30"></div>
                  
                  {/* Phone */}
                  <div className="relative bg-gradient-to-br from-[#6366F1] to-[#818CF8] rounded-[3rem] p-3 shadow-2xl">
                    <div className="bg-white dark:bg-gray-900 rounded-[2.5rem] overflow-hidden">
                      <div className="bg-[#1E1B4B] dark:bg-gray-950 px-6 py-4 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                        </div>
                        <span className="text-white text-xs font-medium">BMI Quiz</span>
                      </div>
                      <div className="p-6 space-y-4">
                        {/* BMI Card - Glass */}
                        <div className="bg-gradient-to-r from-[#6366F1] to-[#818CF8] rounded-2xl p-4 text-white shadow-lg shadow-[#6366F1]/20">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm opacity-90">Your BMI</span>
                            <span className="font-heading text-2xl font-bold">22.5</span>
                          </div>
                          <div className="h-3 bg-white/20 rounded-full overflow-hidden">
                            <div className="h-full w-2/3 bg-white rounded-full"></div>
                          </div>
                          <span className="text-xs mt-1 block opacity-80">Normal weight</span>
                        </div>
                        
                        {/* Info Cards - Glass */}
                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-3 border border-white/20 dark:border-gray-700/30">
                            <div className="text-xs text-[#1E1B4B]/60 dark:text-gray-400">Weight</div>
                            <div className="font-heading font-bold text-[#6366F1]">65 kg</div>
                          </div>
                          <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-3 border border-white/20 dark:border-gray-700/30">
                            <div className="text-xs text-[#1E1B4B]/60 dark:text-gray-400">Height</div>
                            <div className="font-heading font-bold text-[#6366F1]">170 cm</div>
                          </div>
                        </div>
                        
                        {/* Buttons */}
                        <div className="flex gap-2 pt-2">
                          <div className="flex-1 bg-[#10B981] text-white text-center py-3 rounded-xl font-bold text-sm cursor-pointer hover:bg-[#059669] transition-colors">
                            Calculate
                          </div>
                          <div className="flex-1 bg-[#6366F1] text-white text-center py-3 rounded-xl font-bold text-sm cursor-pointer hover:bg-[#4F46E5] transition-colors">
                            Save
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating Badges - Glass */}
                  <div className="absolute -top-5 -right-5 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl px-4 py-3 shadow-xl border border-white/30 dark:border-gray-700/30">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-[#10B981]/20 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-[#10B981]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="font-bold text-[#1E1B4B] dark:text-white text-sm">Free</span>
                    </div>
                  </div>
                  
                  <div className="absolute -bottom-4 -left-5 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl px-4 py-3 shadow-xl border border-white/30 dark:border-gray-700/30">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-[#6366F1]/20 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-[#6366F1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                        </svg>
                      </div>
                      <span className="font-bold text-[#1E1B4B] dark:text-white text-sm">iOS & Android</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section - Glass Cards */}
        <section id="projects" className="py-20 lg:py-28 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl lg:text-5xl font-bold text-[#1E1B4B] dark:text-white mb-4">
                Our Projects
              </h2>
              <p className="text-lg text-[#1E1B4B]/70 dark:text-gray-300 max-w-2xl mx-auto">
                Discover our innovative mobile applications designed to make life better.
              </p>
            </div>
            
            {/* Featured - BMI Quiz */}
            <div className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl rounded-3xl p-1 border border-white/30 dark:border-gray-700/30 mb-8">
              <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 lg:p-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="inline-flex items-center gap-2 bg-[#10B981]/10 dark:bg-[#10B981]/20 text-[#10B981] px-4 py-1.5 rounded-full text-sm font-semibold mb-4 border border-[#10B981]/20">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      Featured
                    </div>
                    
                    <h3 className="font-heading text-3xl font-bold bg-gradient-to-r from-[#6366F1] to-[#818CF8] bg-clip-text text-transparent mb-4">
                      BMI Quiz
                    </h3>
                    
                    <p className="text-[#1E1B4B]/70 dark:text-gray-300 mb-6 max-w-md">
                      A free mobile application that helps you easily track and manage your BMI. 
                      With a friendly interface and smart features, BMI Quiz supports you 
                      on your health journey effectively.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-4 border border-white/20 dark:border-gray-700/30">
                        <div className="font-heading text-xl font-bold text-[#10B981]">Free</div>
                        <div className="text-sm text-[#1E1B4B]/60 dark:text-gray-400">Unlimited use</div>
                      </div>
                      <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-4 border border-white/20 dark:border-gray-700/30">
                        <div className="font-heading text-xl font-bold text-[#6366F1]">Cross-platform</div>
                        <div className="text-sm text-[#1E1B4B]/60 dark:text-gray-400">iOS & Android</div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center gap-2 text-sm font-medium text-[#1E1B4B]/70 dark:text-gray-300">
                        <svg className="w-5 h-5 text-[#10B981]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Track BMI over time
                      </div>
                      <div className="flex items-center gap-2 text-sm font-medium text-[#1E1B4B]/70 dark:text-gray-300">
                        <svg className="w-5 h-5 text-[#10B981]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Health tips
                      </div>
                    </div>
                  </div>
                  
                  {/* Phone Preview */}
                  <div className="flex justify-center">
                    <div className="bg-gradient-to-br from-[#6366F1] to-[#818CF8] rounded-[2rem] p-2 shadow-xl">
                      <div className="bg-white dark:bg-gray-900 rounded-[1.75rem] overflow-hidden w-64">
                        <div className="bg-[#1E1B4B] dark:bg-gray-950 px-4 py-3 flex items-center justify-between">
                          <div className="flex gap-1">
                            <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                          </div>
                        </div>
                        <div className="p-4 space-y-3">
                          <div className="bg-gradient-to-r from-[#6366F1] to-[#818CF8] rounded-xl p-3 text-white">
                            <div className="flex justify-between items-center">
                              <span className="text-xs opacity-90">BMI</span>
                              <span className="font-bold">22.5</span>
                            </div>
                            <div className="h-1.5 bg-white/20 rounded-full mt-2">
                              <div className="h-full w-2/3 bg-white rounded-full"></div>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-2">
                              <div className="text-[10px] text-gray-500">Weight</div>
                              <div className="font-bold text-sm">65 kg</div>
                            </div>
                            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-2">
                              <div className="text-[10px] text-gray-500">Height</div>
                              <div className="font-bold text-sm">170 cm</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Other Projects - Glass Cards Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-md rounded-2xl p-6 border border-white/20 dark:border-gray-700/30 hover:bg-white/70 dark:hover:bg-gray-900/70 hover:scale-[1.02] transition-all cursor-pointer group">
                <div className="w-14 h-14 bg-gradient-to-br from-[#6366F1] to-[#818CF8] rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-[#6366F1]/20 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                  </svg>
                </div>
                <h4 className="font-heading text-xl font-bold text-[#1E1B4B] dark:text-white mb-2">Smart Quiz</h4>
                <p className="text-sm text-[#1E1B4B]/60 dark:text-gray-400 mb-4">AI-powered quiz application</p>
                <span className="inline-block bg-[#6366F1]/10 text-[#6366F1] text-xs font-semibold px-3 py-1 rounded-full border border-[#6366F1]/20">Coming Soon</span>
              </div>
              
              <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-md rounded-2xl p-6 border border-white/20 dark:border-gray-700/30 hover:bg-white/70 dark:hover:bg-gray-900/70 hover:scale-[1.02] transition-all cursor-pointer group">
                <div className="w-14 h-14 bg-gradient-to-br from-[#10B981] to-[#34D399] rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-[#10B981]/20 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h4 className="font-heading text-xl font-bold text-[#1E1B4B] dark:text-white mb-2">Expense Tracker</h4>
                <p className="text-sm text-[#1E1B4B]/60 dark:text-gray-400 mb-4">Smart expense management</p>
                <span className="inline-block bg-[#10B981]/10 text-[#10B981] text-xs font-semibold px-3 py-1 rounded-full border border-[#10B981]/20">Coming Soon</span>
              </div>
              
              <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-md rounded-2xl p-6 border border-white/20 dark:border-gray-700/30 hover:bg-white/70 dark:hover:bg-gray-900/70 hover:scale-[1.02] transition-all cursor-pointer group">
                <div className="w-14 h-14 bg-gradient-to-br from-[#6366F1] to-[#818CF8] rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-[#6366F1]/20 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h4 className="font-heading text-xl font-bold text-[#1E1B4B] dark:text-white mb-2">Daily Planner</h4>
                <p className="text-sm text-[#1E1B4B]/60 dark:text-gray-400 mb-4">Daily task planning</p>
                <span className="inline-block bg-[#6366F1]/10 text-[#6366F1] text-xs font-semibold px-3 py-1 rounded-full border border-[#6366F1]/20">Coming Soon</span>
              </div>
            </div>
          </div>
        </section>

        {/* About Section - Glass */}
        <section id="about" className="py-20 lg:py-28 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-heading text-4xl lg:text-5xl font-bold text-[#1E1B4B] dark:text-white mb-6">
                  About ZensHub
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-[#6366F1] to-[#818CF8] rounded-3xl p-6 text-white shadow-xl shadow-[#6366F1]/20">
                    <p className="text-lg">
                      ZensHub is a young technology startup, established with the mission to 
                      deliver high-quality mobile applications that make everyone's life easier.
                    </p>
                  </div>
                  
                  <div className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl rounded-3xl p-6 border border-white/30 dark:border-gray-700/30">
                    <p className="text-lg text-[#1E1B4B]/70 dark:text-gray-300">
                      We focus on developing applications in health, education, and lifestyle. 
                      With an experienced team of passionate developers, ZensHub is committed 
                      to delivering the best products to users.
                    </p>
                  </div>
                </div>
                
                {/* Value Props - Glass */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-md rounded-2xl p-5 border border-white/20 dark:border-gray-700/30 hover:bg-white/70 dark:hover:bg-gray-900/70 transition-all cursor-pointer group">
                    <div className="w-10 h-10 bg-[#6366F1]/10 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <svg className="w-5 h-5 text-[#6366F1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                      </svg>
                    </div>
                    <div className="font-heading font-bold text-[#1E1B4B] dark:text-white">High Quality</div>
                    <div className="text-xs text-[#1E1B4B]/60 dark:text-gray-400">International Standards</div>
                  </div>
                  
                  <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-md rounded-2xl p-5 border border-white/20 dark:border-gray-700/30 hover:bg-white/70 dark:hover:bg-gray-900/70 transition-all cursor-pointer group">
                    <div className="w-10 h-10 bg-[#10B981]/10 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <svg className="w-5 h-5 text-[#10B981]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                      </svg>
                    </div>
                    <div className="font-heading font-bold text-[#1E1B4B] dark:text-white">Fast Delivery</div>
                    <div className="text-xs text-[#1E1B4B]/60 dark:text-gray-400">Quick Updates</div>
                  </div>
                  
                  <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-md rounded-2xl p-5 border border-white/20 dark:border-gray-700/30 hover:bg-white/70 dark:hover:bg-gray-900/70 transition-all cursor-pointer group">
                    <div className="w-10 h-10 bg-[#818CF8]/10 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <svg className="w-5 h-5 text-[#818CF8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                      </svg>
                    </div>
                    <div className="font-heading font-bold text-[#1E1B4B] dark:text-white">User-Centric</div>
                    <div className="text-xs text-[#1E1B4B]/60 dark:text-gray-400">Great Experience</div>
                  </div>
                  
                  <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-md rounded-2xl p-5 border border-white/20 dark:border-gray-700/30 hover:bg-white/70 dark:hover:bg-gray-900/70 transition-all cursor-pointer group">
                    <div className="w-10 h-10 bg-[#6366F1]/10 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      <svg className="w-5 h-5 text-[#6366F1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                      </svg>
                    </div>
                    <div className="font-heading font-bold text-[#1E1B4B] dark:text-white">Always Improving</div>
                    <div className="text-xs text-[#1E1B4B]/60 dark:text-gray-400">Regular Updates</div>
                  </div>
                </div>
              </div>
              
              {/* Stats - Glass */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-[#6366F1] to-[#818CF8] rounded-3xl p-8 text-white text-center shadow-xl shadow-[#6366F1]/20 hover:scale-105 transition-transform cursor-pointer">
                  <div className="font-heading text-5xl font-bold mb-2">5+</div>
                  <div className="font-medium">Projects</div>
                </div>
                <div className="bg-gradient-to-br from-[#10B981] to-[#34D399] rounded-3xl p-8 text-white text-center shadow-xl shadow-[#10B981]/20 hover:scale-105 transition-transform cursor-pointer">
                  <div className="font-heading text-5xl font-bold mb-2">10K+</div>
                  <div className="font-medium">Users</div>
                </div>
                <div className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl rounded-3xl p-8 text-center border border-white/30 dark:border-gray-700/30 hover:scale-105 transition-transform cursor-pointer">
                  <div className="font-heading text-5xl font-bold bg-gradient-to-r from-[#6366F1] to-[#818CF8] bg-clip-text text-transparent mb-2">4.8★</div>
                  <div className="font-medium text-[#1E1B4B]/70 dark:text-gray-300">Rating</div>
                </div>
                <div className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl rounded-3xl p-8 text-center border border-white/30 dark:border-gray-700/30 hover:scale-105 transition-transform cursor-pointer">
                  <div className="font-heading text-5xl font-bold bg-gradient-to-r from-[#10B981] to-[#34D399] bg-clip-text text-transparent mb-2">2</div>
                  <div className="font-medium text-[#1E1B4B]/70 dark:text-gray-300">Platforms</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section - Glass CTA */}
        <section id="contact" className="py-20 lg:py-28 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-[#6366F1] to-[#818CF8] rounded-3xl p-1">
              <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-[1.25rem] p-8 lg:p-12">
                <div className="text-center mb-10">
                  <h2 className="font-heading text-4xl lg:text-5xl font-bold text-[#1E1B4B] dark:text-white mb-4">
                    Get In Touch
                  </h2>
                  <p className="text-lg text-[#1E1B4B]/70 dark:text-gray-300">
                    Have an idea for a mobile app? Let's build it together!
                  </p>
                </div>
                
                <form className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-[#1E1B4B] dark:text-gray-300 mb-2">Name</label>
                      <input type="text" id="name" name="name" placeholder="John Doe" 
                        className="w-full px-4 py-3.5 rounded-xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-white/30 dark:border-gray-600/30 focus:border-[#6366F1] focus:ring-2 focus:ring-[#6366F1]/20 outline-none transition-all text-[#1E1B4B] dark:text-white font-medium" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-[#1E1B4B] dark:text-gray-300 mb-2">Email</label>
                      <input type="email" id="email" name="email" placeholder="email@example.com" 
                        className="w-full px-4 py-3.5 rounded-xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-white/30 dark:border-gray-600/30 focus:border-[#6366F1] focus:ring-2 focus:ring-[#6366F1]/20 outline-none transition-all text-[#1E1B4B] dark:text-white font-medium" />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-[#1E1B4B] dark:text-gray-300 mb-2">Subject</label>
                    <input type="text" id="subject" name="subject" placeholder="I want to develop an app..." 
                      className="w-full px-4 py-3.5 rounded-xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-white/30 dark:border-gray-600/30 focus:border-[#6366F1] focus:ring-2 focus:ring-[#6366F1]/20 outline-none transition-all text-[#1E1B4B] dark:text-white font-medium" />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-[#1E1B4B] dark:text-gray-300 mb-2">Message</label>
                    <textarea id="message" name="message" rows="4" placeholder="Describe your project in detail..." 
                      className="w-full px-4 py-3.5 rounded-xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-white/30 dark:border-gray-600/30 focus:border-[#6366F1] focus:ring-2 focus:ring-[#6366F1]/20 outline-none transition-all resize-none text-[#1E1B4B] dark:text-white font-medium"></textarea>
                  </div>
                  
                  <button type="submit" className="w-full bg-gradient-to-r from-[#10B981] to-[#34D399] text-white py-4 rounded-xl font-bold hover:shadow-xl hover:shadow-[#10B981]/30 transition-all cursor-pointer hover:-translate-y-0.5 text-lg">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer - Glass */}
        <footer className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl border-t border-white/30 dark:border-gray-700/30 py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div className="md:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#6366F1] to-[#818CF8] rounded-xl flex items-center justify-center shadow-lg shadow-[#6366F1]/30">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <span className="font-heading font-bold text-2xl bg-gradient-to-r from-[#6366F1] to-[#818CF8] bg-clip-text text-transparent">ZensHub</span>
                </div>
                <p className="text-[#1E1B4B]/60 dark:text-gray-400 max-w-md">
                  A technology startup specializing in developing high-quality mobile applications, 
                  bringing real value to users worldwide.
                </p>
              </div>
              
              <div>
                <h4 className="font-heading font-bold mb-4 text-[#1E1B4B] dark:text-white">Links</h4>
                <ul className="space-y-2">
                  <li><a href="#about" className="text-[#1E1B4B]/60 dark:text-gray-400 hover:text-[#6366F1] dark:hover:text-[#818CF8] transition-colors cursor-pointer font-medium">About</a></li>
                  <li><a href="#projects" className="text-[#1E1B4B]/60 dark:text-gray-400 hover:text-[#6366F1] dark:hover:text-[#818CF8] transition-colors cursor-pointer font-medium">Projects</a></li>
                  <li><a href="#contact" className="text-[#1E1B4B]/60 dark:text-gray-400 hover:text-[#6366F1] dark:hover:text-[#818CF8] transition-colors cursor-pointer font-medium">Contact</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-heading font-bold mb-4 text-[#1E1B4B] dark:text-white">Projects</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-[#1E1B4B]/60 dark:text-gray-400 hover:text-[#6366F1] dark:hover:text-[#818CF8] transition-colors cursor-pointer font-medium">BMI Quiz</a></li>
                  <li><a href="#" className="text-[#1E1B4B]/60 dark:text-gray-400 hover:text-[#6366F1] dark:hover:text-[#818CF8] transition-colors cursor-pointer font-medium">Smart Quiz</a></li>
                  <li><a href="#" className="text-[#1E1B4B]/60 dark:text-gray-400 hover:text-[#6366F1] dark:hover:text-[#818CF8] transition-colors cursor-pointer font-medium">Expense Tracker</a></li>
                </ul>
              </div>
            </div>
            
            <div className="pt-8 border-t border-white/30 dark:border-gray-700/30 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-[#1E1B4B]/50 dark:text-gray-500 text-sm font-medium">
                © 2026 ZensHub. All rights reserved.
              </p>
              <div className="flex items-center gap-3">
                <a href="#" className="w-10 h-10 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-[#6366F1]/10 transition-colors cursor-pointer border border-white/20 dark:border-gray-600/30" aria-label="Facebook">
                  <svg className="w-5 h-5 text-[#1E1B4B]/70 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-[#6366F1]/10 transition-colors cursor-pointer border border-white/20 dark:border-gray-600/30" aria-label="Twitter">
                  <svg className="w-5 h-5 text-[#1E1B4B]/70 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-[#6366F1]/10 transition-colors cursor-pointer border border-white/20 dark:border-gray-600/30" aria-label="Instagram">
                  <svg className="w-5 h-5 text-[#1E1B4B]/70 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24">
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
