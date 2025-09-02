import React from 'react'
import { Layout, Row, Col, Button, Divider } from 'antd'
import { 
  MailOutlined, 
  PhoneOutlined, 
  EnvironmentOutlined,
  GithubOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  FacebookOutlined,
  ArrowUpOutlined
} from '@ant-design/icons'
import { Link } from 'react-router-dom'
import './Footer.css'

const { Footer: AntFooter } = Layout

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Add scroll event listener to show/hide scroll to top button
  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const scrollToTopBtn = document.querySelector('.scroll-to-top')
      
      if (scrollToTopBtn) {
        if (scrollTop > 300) {
          scrollToTopBtn.classList.add('visible')
        } else {
          scrollToTopBtn.classList.remove('visible')
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AntFooter className="footer">
      <div className="container">
        <Row gutter={[48, 32]}>
          {/* Company Info */}
          <Col xs={24} sm={12} lg={6}>
            <div className="footer-section">
              <h3 className="footer-title">ZensHub</h3>
              <p className="footer-description">
                Leading mobile Android development company creating innovative applications 
                that transform businesses and enhance user experiences.
              </p>
              <div className="social-links">
                <Button 
                  type="text" 
                  icon={<GithubOutlined />} 
                  className="social-link"
                  href="https://github.com" 
                  target="_blank"
                />
                <Button 
                  type="text" 
                  icon={<LinkedinOutlined />} 
                  className="social-link"
                  href="https://linkedin.com" 
                  target="_blank"
                />
                <Button 
                  type="text" 
                  icon={<TwitterOutlined />} 
                  className="social-link"
                  href="https://twitter.com" 
                  target="_blank"
                />
                <Button 
                  type="text" 
                  icon={<FacebookOutlined />} 
                  className="social-link"
                  href="https://facebook.com" 
                  target="_blank"
                />
              </div>
            </div>
          </Col>

          {/* Products */}
          <Col xs={24} sm={12} lg={6}>
            <div className="footer-section">
              <h4 className="footer-subtitle">Products</h4>
              <ul className="footer-links">
                <li><Link to="/#products">Mobile Apps</Link></li>
                <li><Link to="/#products">Android Development</Link></li>
                <li><Link to="/#products">Custom Solutions</Link></li>
                <li><Link to="/#products">Enterprise Apps</Link></li>
              </ul>
            </div>
          </Col>

          {/* Services */}
          <Col xs={24} sm={12} lg={6}>
            <div className="footer-section">
              <h4 className="footer-subtitle">Services</h4>
              <ul className="footer-links">
                <li><Link to="/#services">App Development</Link></li>
                <li><Link to="/#services">UI/UX Design</Link></li>
                <li><Link to="/#services">App Maintenance</Link></li>
                <li><Link to="/#services">Consulting</Link></li>
              </ul>
            </div>
          </Col>

          {/* Contact */}
          <Col xs={24} sm={12} lg={6}>
            <div className="footer-section">
              <h4 className="footer-subtitle">Contact</h4>
              <div className="contact-info">
                <div className="contact-item">
                  <MailOutlined className="contact-icon" />
                  <span>hello@zenshub.com</span>
                </div>
                <div className="contact-item">
                  <PhoneOutlined className="contact-icon" />
                  <span>+84 123 456 789</span>
                </div>
                <div className="contact-item">
                  <EnvironmentOutlined className="contact-icon" />
                  <span>666/40/27/5 Nguyen Van Qua, HCMC</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <Divider className="footer-divider" />

        {/* Legal Links */}
        <div className="footer-legal-links">
          <div className="legal-links-container">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/cookies">Cookie Policy</Link>
          </div>
          <p className="copyright">
            © 2024 ZensHub. All rights reserved.
          </p>
        </div>

        {/* Scroll to Top Button */}
        <Button 
          type="primary" 
          icon={<ArrowUpOutlined />} 
          className="scroll-to-top"
          onClick={scrollToTop}
          size="large"
        />
      </div>
    </AntFooter>
  )
}

export default Footer
