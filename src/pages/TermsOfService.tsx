import { Layout, Typography, Divider } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import './LegalPages.css'

const { Content } = Layout
const { Title, Paragraph, Text } = Typography

const TermsOfService = () => {
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
            <Title level={1}>Terms of Service</Title>
            <Text type="secondary">Last updated: January 15, 2024</Text>
          </div>

          <div className="legal-body">
            <Paragraph>
              These Terms of Service ("Terms") govern your use of ZensHub's website and services. By accessing or using our 
              services, you agree to be bound by these Terms. If you disagree with any part of these terms, you may not 
              access our services.
            </Paragraph>

            <Title level={2}>1. Services Description</Title>
            <Paragraph>
              ZensHub provides mobile application development services, including but not limited to:
            </Paragraph>
            <ul>
              <li>Native Android application development</li>
              <li>Cross-platform mobile development</li>
              <li>UI/UX design services</li>
              <li>App maintenance and support</li>
              <li>Consulting and technical advisory</li>
            </ul>

            <Title level={2}>2. Use of Services</Title>
            <Paragraph>
              You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not to:
            </Paragraph>
            <ul>
              <li>Use our services for any illegal or unauthorized purpose</li>
              <li>Interfere with or disrupt our services or servers</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Use our services to transmit harmful or malicious code</li>
              <li>Violate any applicable laws or regulations</li>
            </ul>

            <Title level={2}>3. Intellectual Property</Title>
            <Paragraph>
              All content, features, and functionality on our website, including but not limited to text, graphics, logos, 
              and software, are owned by ZensHub and are protected by copyright, trademark, and other intellectual property laws.
            </Paragraph>

            <Title level={2}>4. Client Projects</Title>
            <Paragraph>
              For client projects, the following terms apply:
            </Paragraph>
            <ul>
              <li>All intellectual property rights in custom-developed applications belong to the client upon full payment</li>
              <li>ZensHub retains rights to reusable components and frameworks</li>
              <li>Source code and documentation will be delivered upon project completion</li>
              <li>Warranty period is 30 days after project delivery</li>
            </ul>

            <Title level={2}>5. Payment Terms</Title>
            <Paragraph>
              Payment terms for our services are as follows:
            </Paragraph>
            <ul>
              <li>50% payment required upon project initiation</li>
              <li>Remaining 50% due upon project completion</li>
              <li>Payment methods: Bank transfer, PayPal, or other agreed methods</li>
              <li>Late payments may incur additional charges</li>
            </ul>

            <Title level={2}>6. Limitation of Liability</Title>
            <Paragraph>
              ZensHub shall not be liable for any indirect, incidental, special, consequential, or punitive damages, 
              including but not limited to loss of profits, data, or use, arising out of or relating to our services.
            </Paragraph>

            <Title level={2}>7. Confidentiality</Title>
            <Paragraph>
              We are committed to maintaining the confidentiality of your business information and project details. 
              We will not disclose confidential information to third parties without your consent, except as required by law.
            </Paragraph>

            <Title level={2}>8. Termination</Title>
            <Paragraph>
              Either party may terminate the service agreement with written notice. Upon termination:
            </Paragraph>
            <ul>
              <li>Client will pay for services rendered up to termination date</li>
              <li>ZensHub will deliver completed work and source code</li>
              <li>Confidentiality obligations remain in effect</li>
            </ul>

            <Title level={2}>9. Governing Law</Title>
            <Paragraph>
              These Terms shall be governed by and construed in accordance with the laws of Vietnam. Any disputes arising 
              from these Terms shall be resolved through negotiation or mediation.
            </Paragraph>

            <Title level={2}>10. Changes to Terms</Title>
            <Paragraph>
              We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting 
              on our website. Your continued use of our services constitutes acceptance of the modified Terms.
            </Paragraph>

            <Title level={2}>Contact Information</Title>
            <Paragraph>
              If you have any questions about these Terms of Service, please contact us at:
            </Paragraph>
            <Paragraph>
              <strong>Email:</strong> legal@zenshub.com<br />
              <strong>Address:</strong> 666/40/27/5 Nguyen Van Qua, HCMC<br />
              <strong>Phone:</strong> +84 123 456 789
            </Paragraph>

            <Divider />

            <div className="legal-footer">
              <Text type="secondary">
                These Terms of Service are effective as of January 15, 2024, and will remain in effect until modified 
                or terminated.
              </Text>
            </div>
          </div>
        </div>
      </Content>
    </Layout>
  )
}

export default TermsOfService

