import { useEffect, useState } from 'react'
import { ArrowRight, Camera, Users, Menu, X } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'

export function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'auto' }) }, [pathname])
  return null
}

export function BrandMark({ footer = false }: { footer?: boolean }) {
  return (
    <Link to="/" className="brand" aria-label="Hannah DeSantis Creations home">
      <img className={`brand-logo ${footer ? 'brand-logo-footer' : ''}`} src={`${import.meta.env.BASE_URL}assets/logo.png`} alt="Hannah DeSantis Creations logo" />
      <span className="brand-copy"><strong>HANNAH DESANTIS</strong><small>CREATIONS</small></span>
    </Link>
  )
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const links = [['Creations', '/creations'], ['About', '/about'], ['Custom Orders', '/custom-orders'], ['How It Works', '/how-it-works']] as const
  return (
    <header className="site-header">
      <div className="nav-shell">
        <BrandMark />
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([label, path]) => <NavLink key={path} to={path}>{label}</NavLink>)}
        </nav>
        <Link className="nav-cta" to="/custom-orders">Inquire Now <ArrowRight size={16} /></Link>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
      </div>
      {menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation">{links.map(([label, path]) => <Link key={path} to={path} onClick={() => setMenuOpen(false)}>{label}</Link>)}</nav>}
    </header>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div><BrandMark footer /><p className="footer-desc">Thoughtfully made custom creations for gifts, celebrations, and everyday moments.</p></div>
        <div><h3>Explore</h3><Link to="/creations">Creations</Link><Link to="/about">About</Link><Link to="/custom-orders">Custom Orders</Link><Link to="/how-it-works">How It Works</Link></div>
        <div><h3>Contact</h3><a href="mailto:hdesantis18@gmail.com">hdesantis18@gmail.com</a><div className="socials"><a href="#" aria-label="Instagram"><Camera /></a><a href="#" aria-label="Facebook"><Users /></a></div></div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Hannah DeSantis Creations</span><span>Made personal. Made with love.</span></div>
    </footer>
  )
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return <><Header /><main>{children}</main><Footer /></>
}
