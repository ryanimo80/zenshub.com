import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import './LoadingSpinner.css'

interface LoadingSpinnerProps {
  size?: 'small' | 'default' | 'large'
  text?: string
  fullScreen?: boolean
}

const LoadingSpinner = ({ 
  size = 'default', 
  text = 'Loading...', 
  fullScreen = false 
}: LoadingSpinnerProps) => {
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

  if (fullScreen) {
    return (
      <div className="loading-fullscreen">
        <div className="loading-content">
          <Spin indicator={antIcon} size={size} />
          <p className="loading-text">{text}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="loading-container">
      <Spin indicator={antIcon} size={size} />
      {text && <p className="loading-text">{text}</p>}
    </div>
  )
}

export default LoadingSpinner

