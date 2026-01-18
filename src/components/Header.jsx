import React from 'react'
import { Search, ShoppingCart, User, Menu } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
    const location = useLocation()

    // Don't show header on auth pages (Login is now /)
    if (location.pathname === '/' || location.pathname === '/register') return null

    return (
        <header style={{ padding: '20px 60px', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, zIndex: 100, borderBottom: '1px solid #f0f0f0' }}>
            <Link to="/home" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
                <h1 style={{ color: '#2C5F4D', fontSize: '2rem', fontWeight: 900, fontFamily: 'monospace', letterSpacing: '-1px' }}>
                    KICK<span style={{ fontSize: '0.6rem', verticalAlign: 'top', color: '#2ECC71', marginLeft: '2px' }}>BETA</span>
                </h1>
            </Link>

            <nav style={{ display: 'flex', gap: '32px' }}>
                <Link to="/home" style={navLinkStyle}>Home</Link>
                <Link to="/shop" style={navLinkStyle}>Shop</Link>
                <Link to="/orders" style={navLinkStyle}>Orders</Link>
                <Link to="/contact" style={navLinkStyle}>Contact Us</Link>
                <Link to="/about" style={navLinkStyle}>About Us</Link>
            </nav>

            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
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
    )
}

const navLinkStyle = {
    textDecoration: 'none',
    color: '#2C5F4D',
    fontWeight: 500,
    fontSize: '0.95rem',
    transition: 'color 0.2s'
}

export default Header
