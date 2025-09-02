import { Layout, Typography, Divider } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import './LegalPages.css'

const { Content } = Layout
const { Title, Paragraph, Text } = Typography

const PrivacyPolicy = () => {
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
            <Title level={1}>Privacy Policy</Title>
            <Text type="secondary">Last updated: January 15, 2024</Text>
          </div>

          <div className="legal-body">
            <Paragraph>
              At ZensHub, we are committed to protecting your privacy and ensuring the security of your personal information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our 
              website or use our services.
            </Paragraph>

            <Title level={2}>Information We Collect</Title>
            <Paragraph>
              We may collect the following types of information:
            </Paragraph>
            <ul>
              <li><strong>Personal Information:</strong> Name, email address, phone number, and company information when you contact us</li>
              <li><strong>Usage Information:</strong> Information about how you use our website and services</li>
              <li><strong>Technical Information:</strong> IP address, browser type, device information, and cookies</li>
            </ul>

            <Title level={2}>How We Use Your Information</Title>
            <Paragraph>
              We use the collected information for the following purposes:
            </Paragraph>
            <ul>
              <li>To provide and maintain our services</li>
              <li>To communicate with you about our services</li>
              <li>To improve our website and services</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and prevent fraud</li>
            </ul>

            <Title level={2}>Information Sharing</Title>
            <Paragraph>
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
              except in the following circumstances:
            </Paragraph>
            <ul>
              <li>With your explicit consent</li>
              <li>To comply with legal requirements</li>
              <li>To protect our rights and safety</li>
              <li>In connection with a business transfer or merger</li>
            </ul>

            <Title level={2}>Data Security</Title>
            <Paragraph>
              We implement appropriate security measures to protect your personal information against unauthorized access, 
              alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, 
              and we cannot guarantee absolute security.
            </Paragraph>

            <Title level={2}>Cookies and Tracking</Title>
            <Paragraph>
              We use cookies and similar tracking technologies to enhance your experience on our website. You can control 
              cookie settings through your browser preferences.
            </Paragraph>

            <Title level={2}>Your Rights</Title>
            <Paragraph>
              You have the right to:
            </Paragraph>
            <ul>
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Object to processing of your information</li>
              <li>Withdraw consent at any time</li>
            </ul>

            <Title level={2}>Contact Us</Title>
            <Paragraph>
              If you have any questions about this Privacy Policy or our data practices, please contact us at:
            </Paragraph>
            <Paragraph>
              <strong>Email:</strong> privacy@zenshub.com<br />
              <strong>Address:</strong> 666/40/27/5 Nguyen Van Qua, HCMC<br />
              <strong>Phone:</strong> +84 123 456 789
            </Paragraph>

            <Divider />

            <div className="legal-footer">
              <Text type="secondary">
                This Privacy Policy is effective as of January 15, 2024, and will remain in effect except with respect to 
                any changes in its provisions in the future.
              </Text>
            </div>
          </div>
        </div>
      </Content>
    </Layout>
  )
}

export default PrivacyPolicy

