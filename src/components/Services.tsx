import { Row, Col, Card, Tag } from 'antd'
import { 
  MobileOutlined, 
  AppstoreOutlined, 
  CodeOutlined, 
  SettingOutlined,
  RocketOutlined,
  CheckCircleOutlined
} from '@ant-design/icons'
import './Services.css'

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <MobileOutlined />,
      title: 'Native Android Development',
      description: 'Custom Android applications built with native technologies for optimal performance and user experience.',
      features: [
        'Kotlin & Java Development',
        'Material Design Implementation',
        'Performance Optimization',
        'Google Play Store Publishing'
      ],
      color: '#1890ff',
      category: 'Development'
    },
    {
      id: 2,
      icon: <AppstoreOutlined />,
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user interfaces designed with user experience in mind.',
      features: [
        'User Research & Analysis',
        'Wireframing & Prototyping',
        'Visual Design & Branding',
        'Usability Testing'
      ],
      color: '#722ed1',
      category: 'Design'
    },
    {
      id: 3,
      icon: <CodeOutlined />,
      title: 'Cross-Platform Development',
      description: 'Efficient mobile applications that work seamlessly across multiple platforms.',
      features: [
        'React Native Development',
        'Flutter Applications',
        'Code Reusability',
        'Platform-Specific Features'
      ],
      color: '#52c41a',
      category: 'Development'
    },
    {
      id: 4,
      icon: <SettingOutlined />,
      title: 'App Maintenance & Support',
      description: 'Ongoing maintenance, updates, and technical support to keep your app running smoothly.',
      features: [
        'Bug Fixes & Updates',
        'Performance Monitoring',
        'Security Patches',
        '24/7 Technical Support'
      ],
      color: '#faad14',
      category: 'Support'
    },
    {
      id: 5,
      icon: <RocketOutlined />,
      title: 'App Optimization',
      description: 'Performance optimization and enhancement to improve user engagement and app store rankings.',
      features: [
        'Performance Analysis',
        'Memory Optimization',
        'Battery Life Improvement',
        'App Store Optimization'
      ],
      color: '#13c2c2',
      category: 'Optimization'
    },
    {
      id: 6,
      icon: <CheckCircleOutlined />,
      title: 'Quality Assurance',
      description: 'Comprehensive testing and quality assurance to ensure your app meets the highest standards.',
      features: [
        'Automated Testing',
        'Manual Testing',
        'Device Compatibility',
        'Performance Testing'
      ],
      color: '#eb2f96',
      category: 'Testing'
    }
  ]

  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive mobile development services tailored to your business needs. 
            From concept to deployment, we handle every aspect of your mobile application.
          </p>
        </div>

        <Row gutter={[24, 24]} className="services-grid">
          {services.map((service) => (
            <Col xs={24} sm={12} lg={8} key={service.id}>
              <Card 
                className="service-card"
                hoverable
                cover={
                  <div className="service-card-cover">
                    <div 
                      className="service-icon"
                      style={{ backgroundColor: service.color }}
                    >
                      {service.icon}
                    </div>
                  </div>
                }
                actions={[]}
              >
                <div className="service-card-content">
                  <div className="service-header">
                    <h3 className="service-name">{service.title}</h3>
                    <Tag color="blue" className="service-category">
                      {service.category}
                    </Tag>
                  </div>
                  
                  <p className="service-description">
                    {service.description}
                  </p>
                  
                  <div className="service-features">
                    <h4 className="features-title">Key Features:</h4>
                    <ul className="features-list">
                      {service.features.map((feature, index) => (
                        <li key={index} className="feature-item">
                          <CheckCircleOutlined className="feature-icon" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="services-cta">
          <div className="cta-content">
            <h3 className="cta-title">Ready to Start Your Project?</h3>
            <p className="cta-description">
              Let's discuss your mobile app idea and bring it to life with our expert team.
            </p>
            <div className="cta-actions">
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
