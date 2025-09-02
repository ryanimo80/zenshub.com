import { Row, Col, Card, Rate, Avatar } from 'antd'
import { 
  StarFilled,
  MessageOutlined
} from '@ant-design/icons'
import './Testimonials.css'

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'CEO, TechStart Inc.',
      company: 'TechStart Inc.',
      avatar: 'SJ',
      rating: 5,
      content: 'ZensHub delivered an exceptional mobile app that exceeded our expectations. Their team was professional, responsive, and delivered on time. The app has significantly improved our user engagement.',
      app: 'HealthTracker Pro'
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'Product Manager',
      company: 'FinanceFlow Solutions',
      avatar: 'MC',
      rating: 5,
      content: 'Working with ZensHub was a fantastic experience. They understood our requirements perfectly and created a beautiful, functional app. Their attention to detail and user experience is outstanding.',
      app: 'FinanceFlow Mobile'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      position: 'Founder',
      company: 'EduLearn Academy',
      avatar: 'ER',
      rating: 5,
      content: 'ZensHub transformed our educational platform into a modern mobile app. The development process was smooth, and the final product is exactly what we envisioned. Highly recommended!',
      app: 'EduLearn Platform'
    },
    {
      id: 4,
      name: 'David Kim',
      position: 'CTO',
      company: 'TravelCompanion',
      avatar: 'DK',
      rating: 5,
      content: 'The team at ZensHub is incredibly talented. They built our travel app with cutting-edge features and excellent performance. Our users love the intuitive interface.',
      app: 'TravelCompanion App'
    },
    {
      id: 5,
      name: 'Lisa Wang',
      position: 'Marketing Director',
      company: 'SocialConnect',
      avatar: 'LW',
      rating: 5,
      content: 'ZensHub delivered a social networking app that perfectly captures our vision. The app is fast, reliable, and user-friendly. Their expertise in mobile development is unmatched.',
      app: 'SocialConnect Network'
    },
    {
      id: 6,
      name: 'Robert Taylor',
      position: 'Operations Manager',
      company: 'TaskMaster Corp',
      avatar: 'RT',
      rating: 5,
      content: 'ZensHub created a productivity app that has revolutionized how our team works. The app is intuitive, feature-rich, and has improved our efficiency significantly.',
      app: 'ZensTask Pro'
    }
  ]

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Don't just take our word for it. Here's what our clients have to say about 
            working with ZensHub and the quality of our mobile applications.
          </p>
        </div>

        <Row gutter={[24, 24]} className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <Col xs={24} sm={12} lg={8} key={testimonial.id}>
              <Card className="testimonial-card" hoverable>
                <div className="testimonial-content">
                  <div className="quote-icon">
                    <MessageOutlined />
                  </div>
                  
                  <p className="testimonial-text">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="testimonial-rating">
                    <Rate 
                      disabled 
                      defaultValue={testimonial.rating} 
                      character={<StarFilled />}
                      className="rating-stars"
                    />
                  </div>
                  
                  <div className="testimonial-author">
                    <Avatar 
                      size={48} 
                      className="author-avatar"
                      style={{ backgroundColor: '#1890ff' }}
                    >
                      {testimonial.avatar}
                    </Avatar>
                    <div className="author-info">
                      <h4 className="author-name">{testimonial.name}</h4>
                      <p className="author-position">{testimonial.position}</p>
                      <p className="author-company">{testimonial.company}</p>
                    </div>
                  </div>
                  
                  <div className="app-badge">
                    <span className="app-name">{testimonial.app}</span>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="testimonials-stats">
          <Row gutter={[24, 24]}>
            <Col xs={12} sm={6}>
              <div className="stat-item">
                <div className="stat-number">100%</div>
                <div className="stat-label">Client Satisfaction</div>
              </div>
            </Col>
            <Col xs={12} sm={6}>
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Apps Delivered</div>
              </div>
            </Col>
            <Col xs={12} sm={6}>
              <div className="stat-item">
                <div className="stat-number">4.9</div>
                <div className="stat-label">Average Rating</div>
              </div>
            </Col>
            <Col xs={12} sm={6}>
              <div className="stat-item">
                <div className="stat-number">25+</div>
                <div className="stat-label">Happy Clients</div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
