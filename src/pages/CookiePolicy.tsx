import { Layout, Typography, Divider } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import './LegalPages.css'

const { Content } = Layout
const { Title, Paragraph, Text } = Typography

const CookiePolicy = () => {
  return (
    <Layout className="legal-page">
      <Content className="legal-content">
        <div className="container">
          <div className="back-link">
            <Link to="/">
              <ArrowLeftOutlined /> Back to Home
            </Link>
          </div>

          <div className="legal-header">
            <Title level={1}>Cookie Policy</Title>
            <Text type="secondary">Last updated: January 15, 2024</Text>
          </div>

          <div className="legal-body">
            <Paragraph>
              This Cookie Policy explains how ZensHub uses cookies and similar technologies when you visit our website. 
              By using our website, you consent to the use of cookies in accordance with this policy.
            </Paragraph>

            <Title level={2}>What Are Cookies?</Title>
            <Paragraph>
              Cookies are small text files that are stored on your device when you visit a website. They help websites 
              remember information about your visit, such as your preferred language and other settings, which can make 
              your next visit easier and more useful.
            </Paragraph>

            <Title level={2}>Types of Cookies We Use</Title>
            
            <Title level={3}>Essential Cookies</Title>
            <Paragraph>
              These cookies are necessary for the website to function properly. They enable basic functions like page 
              navigation and access to secure areas of the website. The website cannot function properly without these cookies.
            </Paragraph>

            <Title level={3}>Analytics Cookies</Title>
            <Paragraph>
              These cookies help us understand how visitors interact with our website by collecting and reporting 
              information anonymously. This helps us improve our website and services.
            </Paragraph>

            <Title level={3}>Functional Cookies</Title>
            <Paragraph>
              These cookies enable enhanced functionality and personalization, such as remembering your preferences 
              and settings.
            </Paragraph>

            <Title level={3}>Marketing Cookies</Title>
            <Paragraph>
              These cookies are used to track visitors across websites to display relevant and engaging advertisements.
            </Paragraph>

            <Title level={2}>Specific Cookies We Use</Title>
            <Paragraph>
              The following cookies may be used on our website:
            </Paragraph>
            <ul>
              <li><strong>Session Cookies:</strong> Temporary cookies that expire when you close your browser</li>
              <li><strong>Persistent Cookies:</strong> Cookies that remain on your device for a set period</li>
              <li><strong>Third-party Cookies:</strong> Cookies set by third-party services we use</li>
            </ul>

            <Title level={2}>How to Control Cookies</Title>
            <Paragraph>
              You can control and manage cookies in several ways:
            </Paragraph>
            <ul>
              <li><strong>Browser Settings:</strong> Most browsers allow you to refuse or accept cookies</li>
              <li><strong>Cookie Preferences:</strong> You can change your cookie preferences at any time</li>
              <li><strong>Third-party Opt-outs:</strong> Some third-party services provide opt-out mechanisms</li>
            </ul>

            <Title level={2}>Managing Browser Settings</Title>
            <Paragraph>
              To manage cookies through your browser settings:
            </Paragraph>
            <ul>
              <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
              <li><strong>Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
              <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
              <li><strong>Edge:</strong> Settings → Cookies and site permissions → Cookies and site data</li>
            </ul>

            <Title level={2}>Impact of Disabling Cookies</Title>
            <Paragraph>
              If you choose to disable cookies, some features of our website may not function properly. This may affect:
            </Paragraph>
            <ul>
              <li>Your ability to access certain areas of the website</li>
              <li>Personalization features</li>
              <li>Analytics and performance monitoring</li>
              <li>Security features</li>
            </ul>

            <Title level={2}>Third-Party Services</Title>
            <Paragraph>
              We may use third-party services that set their own cookies:
            </Paragraph>
            <ul>
              <li><strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
              <li><strong>Social Media:</strong> For social media integration and sharing</li>
              <li><strong>Payment Processors:</strong> For secure payment processing</li>
            </ul>

            <Title level={2}>Updates to This Policy</Title>
            <Paragraph>
              We may update this Cookie Policy from time to time to reflect changes in our practices or for other 
              operational, legal, or regulatory reasons. We will notify you of any material changes by posting the 
              updated policy on our website.
            </Paragraph>

            <Title level={2}>Contact Us</Title>
            <Paragraph>
              If you have any questions about our use of cookies, please contact us at:
            </Paragraph>
            <Paragraph>
              <strong>Email:</strong> privacy@zenshub.com<br />
              <strong>Address:</strong> 666/40/27/5 Nguyen Van Qua, HCMC<br />
              <strong>Phone:</strong> +84 123 456 789
            </Paragraph>

            <Divider />

            <div className="legal-footer">
              <Text type="secondary">
                This Cookie Policy is effective as of January 15, 2024, and will remain in effect until modified 
                or replaced.
              </Text>
            </div>
          </div>
        </div>
      </Content>
    </Layout>
  )
}

export default CookiePolicy

