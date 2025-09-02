import { Button, Row, Col } from 'antd'
import { ArrowRightOutlined, MobileOutlined, RocketOutlined, CodeOutlined } from '@ant-design/icons'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <Row gutter={[48, 48]} align="middle">
          <Col xs={24} lg={12} className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Mobile Android Development
                <span className="hero-title-highlight"> Experts</span>
              </h1>
              <p className="hero-subtitle">
                We create innovative, high-performance mobile applications that transform businesses 
                and enhance user experiences on Android platforms.
              </p>
              <div className="hero-features">
                <div className="hero-feature">
                  <MobileOutlined className="hero-feature-icon" />
                  <span>Native Android Apps</span>
                </div>
                <div className="hero-feature">
                  <RocketOutlined className="hero-feature-icon" />
                  <span>Fast Development</span>
                </div>
                <div className="hero-feature">
                  <CodeOutlined className="hero-feature-icon" />
                  <span>Clean Code</span>
                </div>
              </div>
              <div className="hero-actions">
                <Button type="primary" size="large" className="hero-cta-primary">
                  View Our Apps
                  <ArrowRightOutlined />
                </Button>
              </div>
            </div>
          </Col>
          <Col xs={24} lg={12} className="hero-visual">
            <div className="hero-image-container">
              <div className="hero-mockup">
                <div className="mockup-screen">
                  <div className="mockup-content">
                    <div className="mockup-app-icon"></div>
                    <div className="mockup-app-name">ZensHub App</div>
                  </div>
                </div>
                <div className="mockup-screen mockup-screen-2">
                  <div className="mockup-content">
                    <div className="mockup-app-icon"></div>
                    <div className="mockup-app-name">Mobile Solution</div>
                  </div>
                </div>
                <div className="mockup-screen mockup-screen-3">
                  <div className="mockup-content">
                    <div className="mockup-app-icon"></div>
                    <div className="mockup-app-name">Innovation Hub</div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  )
}

export default Hero
