import { useState } from 'react'
import { Row, Col, Form, Input, Button, message, Card } from 'antd'
import { 
  MailOutlined, 
  PhoneOutlined, 
  EnvironmentOutlined,
  SendOutlined,
  UserOutlined
} from '@ant-design/icons'
import './Contact.css'

const { TextArea } = Input

const Contact = () => {
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)

  const contactInfo = [
    {
      icon: <MailOutlined />,
      title: 'Email Us',
      content: 'hello@zenshub.com',
      description: 'Send us an email anytime'
    },
    {
      icon: <PhoneOutlined />,
      title: 'Call Us',
      content: '+84 123 456 789',
      description: 'Mon-Fri from 8am to 6pm'
    },
    {
      icon: <EnvironmentOutlined />,
      title: 'Visit Us',
      content: '666/40/27/5 Nguyen Van Qua, HCMC',
      description: 'Come say hello at our office'
    }
  ]

  const onFinish = async (_values: any) => {
    setLoading(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      message.success('Thank you! Your message has been sent successfully.')
      form.resetFields()
    } catch (error) {
      message.error('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Ready to start your mobile app project? Let's discuss your ideas and bring them to life.
          </p>
        </div>

        <Row gutter={[48, 48]} className="contact-content">
          {/* Contact Form */}
          <Col xs={24} lg={14}>
            <Card className="contact-form-card">
              <h3 className="form-title">Send us a Message</h3>
              <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                className="contact-form"
              >
                <Row gutter={[16, 16]}>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      name="firstName"
                      label="First Name"
                      rules={[{ required: true, message: 'Please enter your first name' }]}
                    >
                      <Input 
                        prefix={<UserOutlined />} 
                        placeholder="Your first name"
                        size="large"
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      name="lastName"
                      label="Last Name"
                      rules={[{ required: true, message: 'Please enter your last name' }]}
                    >
                      <Input 
                        prefix={<UserOutlined />} 
                        placeholder="Your last name"
                        size="large"
                      />
                    </Form.Item>
                  </Col>
                </Row>

                <Form.Item
                  name="email"
                  label="Email Address"
                  rules={[
                    { required: true, message: 'Please enter your email' },
                    { type: 'email', message: 'Please enter a valid email' }
                  ]}
                >
                  <Input 
                    prefix={<MailOutlined />} 
                    placeholder="your.email@example.com"
                    size="large"
                  />
                </Form.Item>

                <Form.Item
                  name="phone"
                  label="Phone Number"
                  rules={[{ required: true, message: 'Please enter your phone number' }]}
                >
                  <Input 
                    prefix={<PhoneOutlined />} 
                    placeholder="+84 123 456 789"
                    size="large"
                  />
                </Form.Item>

                <Form.Item
                  name="subject"
                  label="Subject"
                  rules={[{ required: true, message: 'Please enter a subject' }]}
                >
                  <Input 
                    placeholder="What's this about?"
                    size="large"
                  />
                </Form.Item>

                <Form.Item
                  name="message"
                  label="Message"
                  rules={[{ required: true, message: 'Please enter your message' }]}
                >
                  <TextArea 
                    placeholder="Tell us about your project..."
                    rows={6}
                    size="large"
                  />
                </Form.Item>

                <Form.Item>
                  <Button 
                    type="primary" 
                    htmlType="submit" 
                    size="large"
                    loading={loading}
                    className="submit-btn"
                    icon={<SendOutlined />}
                  >
                    Send Message
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>

          {/* Contact Information */}
          <Col xs={24} lg={10}>
            <div className="contact-info">
              <h3 className="info-title">Contact Information</h3>
              <p className="info-description">
                We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>

              <div className="contact-items">
                {contactInfo.map((item, index) => (
                  <div key={index} className="contact-item">
                    <div className="contact-icon">
                      {item.icon}
                    </div>
                    <div className="contact-details">
                      <h4 className="contact-title">{item.title}</h4>
                      <p className="contact-content">{item.content}</p>
                      <p className="contact-description">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="office-hours">
                <h4 className="hours-title">Office Hours</h4>
                <div className="hours-list">
                  <div className="hours-item">
                    <span className="day">Monday - Friday:</span>
                    <span className="time">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="hours-item">
                    <span className="day">Saturday:</span>
                    <span className="time">9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="hours-item">
                    <span className="day">Sunday:</span>
                    <span className="time">Closed</span>
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

export default Contact
