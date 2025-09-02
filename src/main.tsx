import React from 'react'
import ReactDOM from 'react-dom/client'
import { ConfigProvider } from 'antd'
import App from './App.tsx'
import './index.css'

// Ant Design theme configuration
const theme = {
  token: {
    fontFamily: "'Public Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
    borderRadius: 4,
    colorPrimary: '#1890ff',
    colorSuccess: '#52c41a',
    colorWarning: '#faad14',
    colorError: '#ff4d4f',
    colorInfo: '#1890ff',
  },
  components: {
    Button: {
      borderRadius: 4,
      controlHeight: 40,
    },
    Card: {
      borderRadius: 4,
    },
    Input: {
      borderRadius: 4,
    },
    Select: {
      borderRadius: 4,
    },
  },
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider theme={theme}>
      <App />
    </ConfigProvider>
  </React.StrictMode>,
)
