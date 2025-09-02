import { useState, useEffect } from 'react'
import { Layout, Menu, Button, Drawer } from 'antd'
import { MenuOutlined, CloseOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import './Header.css'

const { Header: AntHeader } = Layout

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const menuItems = [
    {
      key: 'home',
      label: <Link to="/">Home</Link>,
    },
    {
      key: 'about',
      label: <Link to="/#about">About</Link>,
    },
    {
      key: 'services',
      label: <Link to="/#services">Services</Link>,
    },
    {
      key: 'contact',
      label: <Link to="/#contact">Contact</Link>,
    },
  ]

  const showMobileMenu = () => {
    setMobileMenuOpen(true)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  // Smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest('a')
      
      if (link && link.hash && link.pathname === '/') {
        e.preventDefault()
        const element = document.querySelector(link.hash)
        if (element) {
          const headerHeight = 80 // Header height
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - headerHeight
          
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          })
        }
      }
    }

    document.addEventListener('click', handleAnchorClick)
    return () => document.removeEventListener('click', handleAnchorClick)
  }, [])

  return (
    <AntHeader className="header">
      <div className="header-container">
        <div className="header-logo">
          <Link to="/">
            <h1>ZensHub</h1>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="header-menu desktop-menu">
          <Menu
            mode="horizontal"
            items={menuItems}
            className="header-menu-items"
          />
        </div>

        {/* Mobile Menu Button */}
        <div className="header-mobile-menu">
          <Button
            type="text"
            icon={<MenuOutlined />}
            onClick={showMobileMenu}
            className="mobile-menu-button"
          />
        </div>

        {/* Mobile Drawer */}
        <Drawer
          title="Menu"
          placement="right"
          onClose={closeMobileMenu}
          open={mobileMenuOpen}
          className="mobile-drawer"
          closeIcon={<CloseOutlined />}
        >
          <Menu
            mode="vertical"
            items={menuItems}
            className="mobile-menu-items"
            onClick={closeMobileMenu}
          />
        </Drawer>
      </div>
    </AntHeader>
  )
}

export default Header
