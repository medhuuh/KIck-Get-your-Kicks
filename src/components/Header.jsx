import React, { useState } from 'react'
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'


const Header = () => {
    const location = useLocation()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    // Don't show header on auth pages (Login is now /)
    if (location.pathname === '/' || location.pathname === '/register') return null

    return (
        <>
            <header style={{ padding: '15px 20px', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, zIndex: 100, borderBottom: '1px solid #f0f0f0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(true)}>
                        <Menu size={24} />
                    </button>
                    <Link to="/home" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
                        <h1 style={{ color: '#2C5F4D', fontSize: '1.8rem', fontWeight: 900, fontFamily: 'monospace', letterSpacing: '-1px' }}>
                            KICK<span style={{ fontSize: '0.6rem', verticalAlign: 'top', color: '#2ECC71', marginLeft: '2px' }}>BETA</span>
                        </h1>
                    </Link>
                </div>

                <nav className="desktop-nav">
                    <Link to="/home" style={navLinkStyle}>Home</Link>
                    <Link to="/shop" style={navLinkStyle}>Shop</Link>
                    <Link to="/orders" style={navLinkStyle}>Orders</Link>
                    <Link to="/contact" style={navLinkStyle}>Contact Us</Link>
                    <Link to="/about" style={navLinkStyle}>About Us</Link>
                </nav>

                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <div className="desktop-nav" style={{ position: 'relative', alignItems: 'center' }}>
                        <input
                            type="text"
                            placeholder="Search"
                            style={{
                                padding: '10px 40px 10px 15px',
                                borderRadius: '20px',
                                border: 'none',
                                background: '#e0f2f1',
                                width: '250px'
                            }}
                        />
                        <Search size={18} style={{ position: 'absolute', right: '15px', color: '#1A8763' }} />
                    </div>
                    <Link to="/cart" style={{ color: '#1A8763' }}><ShoppingCart size={24} /></Link>
                    <Link to="/profile" style={{ color: '#1A8763' }}><User size={24} /></Link>
                </div>
            </header>

            {/* Mobile Navigation Overlay */}
            <div className={`mobile-nav-overlay ${isMenuOpen ? 'open' : ''}`}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
                    <h2 style={{ fontSize: '2rem', color: '#2C5F4D' }}>Menu</h2>
                    <button onClick={() => setIsMenuOpen(false)}>
                        <X size={32} color="#2C5F4D" />
                    </button>
                </div>

                <div style={{ position: 'relative', marginBottom: '20px' }}>
                    <input type="text" placeholder="Search..." style={{ width: '100%', padding: '15px', borderRadius: '12px', border: '1px solid #eee', background: '#f9f9f9' }} />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <Link to="/home" style={mobileNavLinkStyle} onClick={() => setIsMenuOpen(false)}>Home</Link>
                    <Link to="/shop" style={mobileNavLinkStyle} onClick={() => setIsMenuOpen(false)}>Shop</Link>
                    <Link to="/orders" style={mobileNavLinkStyle} onClick={() => setIsMenuOpen(false)}>Orders</Link>
                    <Link to="/contact" style={mobileNavLinkStyle} onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
                    <Link to="/about" style={mobileNavLinkStyle} onClick={() => setIsMenuOpen(false)}>About Us</Link>
                </div>
            </div>
        </>
    )
}

const navLinkStyle = {
    textDecoration: 'none',
    color: '#2C5F4D',
    fontWeight: 600,
    fontSize: '0.95rem',
    transition: 'color 0.2s'
}

const mobileNavLinkStyle = {
    textDecoration: 'none',
    color: '#2C5F4D',
    fontWeight: 700,
    fontSize: '1.5rem',
    borderBottom: '1px solid #eee',
    paddingBottom: '10px'
}

export default Header
