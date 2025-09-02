import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from 'antd'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import CookiePolicy from './pages/CookiePolicy'
import './App.css'

const { Content } = Layout

function App() {
  return (
    <Router>
      <Layout className="app-layout">
        <Header />
        <Content className="app-content">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <About />
                <Services />
                <Contact />
              </>
            } />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/cookies" element={<CookiePolicy />} />
          </Routes>
        </Content>
        <Footer />
      </Layout>
    </Router>
  )
}

export default App
