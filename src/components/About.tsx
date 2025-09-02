import { Row, Col, Card } from 'antd'
import { 
  TeamOutlined, 
  RocketOutlined, 
  CheckCircleOutlined,
  StarFilled
} from '@ant-design/icons'
import './About.css'

const About = () => {

  const values = [
    {
      icon: <CheckCircleOutlined />,
      title: 'Innovation First',
      description: 'We stay ahead of technology trends to deliver cutting-edge solutions.'
    },
    {
      icon: <StarFilled />,
      title: 'Quality Excellence',
      description: 'Every line of code is crafted with precision and attention to detail.'
    },
    {
      icon: <TeamOutlined />,
      title: 'Client Partnership',
      description: 'We work closely with clients to understand their unique needs and goals.'
    },
    {
      icon: <RocketOutlined />,
      title: 'Fast Delivery',
      description: 'Efficient development process without compromising on quality.'
    }
  ]

  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About ZensHub</h2>
          <p className="section-subtitle">
            We are a passionate team of mobile development experts dedicated to creating 
            innovative Android applications that make a difference.
          </p>
        </div>

        {/* Company Story */}
        <Row gutter={[48, 48]} className="about-story" align="middle">
          <Col xs={24} lg={12}>
            <div className="about-content">
              <h3 className="about-subtitle">Our Story</h3>
              <p className="about-description">
                Founded in 2019, ZensHub has grown from a small startup to a leading mobile 
                development company in Vietnam. Our journey began with a simple mission: to 
                create mobile applications that not only solve problems but also delight users.
              </p>
              <p className="about-description">
                Today, we've successfully delivered over 50 mobile applications across various 
                industries, from healthcare and finance to education and entertainment. Our team 
                of 25+ experts combines technical expertise with creative thinking to deliver 
                exceptional user experiences.
              </p>
              <div className="about-highlights">
                <div className="highlight-item">
                  <CheckCircleOutlined className="highlight-icon" />
                  <span>Native Android Development</span>
                </div>
                <div className="highlight-item">
                  <CheckCircleOutlined className="highlight-icon" />
                  <span>UI/UX Design Excellence</span>
                </div>
                <div className="highlight-item">
                  <CheckCircleOutlined className="highlight-icon" />
                  <span>Agile Development Process</span>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={24} lg={12}>
            <div className="about-visual">
              <div className="about-image-container">
                <div className="about-image-placeholder">
                  <TeamOutlined className="about-image-icon" />
                  <p>Our Amazing Team</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>



        {/* Company Values */}
        <div className="values-section">
          <h3 className="values-title">Our Values</h3>
          <Row gutter={[24, 24]}>
            {values.map((value, index) => (
              <Col xs={24} sm={12} lg={6} key={index}>
                <Card className="value-card" hoverable>
                  <div className="value-icon">{value.icon}</div>
                  <h4 className="value-name">{value.title}</h4>
                  <p className="value-description">{value.description}</p>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </section>
  )
}

export default About
