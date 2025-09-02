import type { ReactNode } from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import './AnimatedSection.css'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  animation?: 'fadeIn' | 'slideInLeft' | 'slideInRight' | 'slideInUp' | 'scaleIn'
  delay?: number
}

const AnimatedSection = ({ 
  children, 
  className = '', 
  animation = 'fadeIn',
  delay = 0 
}: AnimatedSectionProps) => {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
    triggerOnce: true
  })

  return (
    <div
      ref={elementRef}
      className={`animated-section ${className} ${animation} ${isIntersecting ? 'animate' : ''}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export default AnimatedSection
