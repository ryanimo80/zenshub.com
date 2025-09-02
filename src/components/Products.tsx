import { Card, Row, Col, Button, Tag, Rate } from 'antd'
import { 
  DownloadOutlined, 
  EyeOutlined,
  HeartOutlined
} from '@ant-design/icons'
import './Products.css'

// Sample mobile app data
const mobileApps = [
  {
    id: 1,
    name: 'ZensTask Pro',
    description: 'Advanced task management app with AI-powered productivity insights and team collaboration features.',
    category: 'Productivity',
    rating: 4.8,
    downloads: '50K+',
    price: 'Free',
    icon: '📱',
    features: ['AI Assistant', 'Team Sync', 'Analytics'],
    color: '#1890ff'
  },
  {
    id: 2,
    name: 'HealthTracker',
    description: 'Comprehensive health monitoring app with fitness tracking, nutrition planning, and wellness insights.',
    category: 'Health & Fitness',
    rating: 4.9,
    downloads: '100K+',
    price: 'Free',
    icon: '💪',
    features: ['Fitness Tracking', 'Nutrition', 'Sleep Monitor'],
    color: '#52c41a'
  },
  {
    id: 3,
    name: 'FinanceFlow',
    description: 'Smart personal finance manager with budgeting tools, expense tracking, and investment insights.',
    category: 'Finance',
    rating: 4.7,
    downloads: '75K+',
    price: 'Free',
    icon: '💰',
    features: ['Budget Planning', 'Expense Tracking', 'Investment'],
    color: '#722ed1'
  },
  {
    id: 4,
    name: 'EduLearn',
    description: 'Interactive learning platform with personalized courses, progress tracking, and skill assessments.',
    category: 'Education',
    rating: 4.6,
    downloads: '25K+',
    price: 'Free',
    icon: '📚',
    features: ['Personalized Learning', 'Progress Tracking', 'Certificates'],
    color: '#faad14'
  },
  {
    id: 5,
    name: 'TravelCompanion',
    description: 'Complete travel planning app with itinerary management, local recommendations, and booking integration.',
    category: 'Travel',
    rating: 4.8,
    downloads: '30K+',
    price: 'Free',
    icon: '✈️',
    features: ['Itinerary Planning', 'Local Guides', 'Booking'],
    color: '#13c2c2'
  },
  {
    id: 6,
    name: 'SocialConnect',
    description: 'Next-generation social networking app with privacy-focused features and meaningful connections.',
    category: 'Social',
    rating: 4.5,
    downloads: '200K+',
    price: 'Free',
    icon: '🤝',
    features: ['Privacy Focused', 'Meaningful Connections', 'Groups'],
    color: '#eb2f96'
  }
]

const Products = () => {
  return (
    <section className="products-section" id="products">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Mobile Applications</h2>
          <p className="section-subtitle">
            Discover our innovative Android applications designed to enhance your digital experience 
            and streamline your daily tasks.
          </p>
        </div>

        <Row gutter={[24, 24]} className="products-grid">
          {mobileApps.map((app) => (
            <Col xs={24} sm={12} lg={8} key={app.id}>
              <Card 
                className="product-card"
                hoverable
                cover={
                  <div className="product-card-cover">
                    <div 
                      className="product-icon"
                      style={{ backgroundColor: app.color }}
                    >
                      <span className="product-icon-emoji">{app.icon}</span>
                    </div>
                  </div>
                }
                actions={[
                  <Button 
                    type="primary" 
                    icon={<DownloadOutlined />}
                    className="download-btn"
                  >
                    Download
                  </Button>,
                  <Button 
                    icon={<EyeOutlined />}
                    className="preview-btn"
                  >
                    Preview
                  </Button>,
                  <Button 
                    icon={<HeartOutlined />}
                    className="favorite-btn"
                  />
                ]}
              >
                <div className="product-card-content">
                  <div className="product-header">
                    <h3 className="product-name">{app.name}</h3>
                    <Tag color="blue" className="product-category">
                      {app.category}
                    </Tag>
                  </div>
                  
                  <p className="product-description">
                    {app.description}
                  </p>
                  
                  <div className="product-features">
                    {app.features.map((feature, index) => (
                      <Tag key={index} className="feature-tag">
                        {feature}
                      </Tag>
                    ))}
                  </div>
                  
                  <div className="product-meta">
                    <div className="product-rating">
                      <Rate 
                        disabled 
                        defaultValue={app.rating} 
                        allowHalf 
                        className="rating-stars"
                      />
                      <span className="rating-text">{app.rating}</span>
                    </div>
                    
                    <div className="product-stats">
                      <span className="downloads">
                        <DownloadOutlined /> {app.downloads}
                      </span>
                      <span className="price">{app.price}</span>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="products-cta">
        </div>
      </div>
    </section>
  )
}

export default Products
