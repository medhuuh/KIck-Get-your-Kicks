import React from 'react'
import { Facebook, Twitter, Instagram, Youtube, Send } from 'lucide-react'
import { useLocation } from 'react-router-dom'

const Footer = () => {
    const location = useLocation()

    if (location.pathname === '/' || location.pathname === '/register') return null

    return (
        <footer style={{ background: '#004D32', color: 'white', padding: '60px 80px 40px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px', marginBottom: '60px' }}>
                <div>
                    <h4 style={footerTitleStyle}>Help</h4>
                    <ul style={footerListStyle}>
                        <li>Track Order</li>
                        <li>Shipping Info</li>
                        <li>Returns & Exchanges</li>
                        <li>Help Center</li>
                    </ul>
                </div>
                <div>
                    <h4 style={footerTitleStyle}>Shop</h4>
                    <ul style={footerListStyle}>
                        <li>New Arrivals</li>
                        <li>Best Sellers</li>
                        <li>Sale</li>
                        <li>Gift Cards</li>
                    </ul>
                </div>
                <div>
                    <h4 style={footerTitleStyle}>Company</h4>
                    <ul style={footerListStyle}>
                        <li>Our Story</li>
                        <li>Sustainability</li>
                        <li>Careers</li>
                        <li>Press</li>
                    </ul>
                </div>
                <div>
                    <h4 style={footerTitleStyle}>Follow Us</h4>
                    <div style={{ display: 'flex', gap: '20px', marginTop: '15px' }}>
                        <Facebook size={20} style={{ cursor: 'pointer', opacity: 0.8 }} />
                        <Twitter size={20} style={{ cursor: 'pointer', opacity: 0.8 }} />
                        <Instagram size={20} style={{ cursor: 'pointer', opacity: 0.8 }} />
                        <Youtube size={20} style={{ cursor: 'pointer', opacity: 0.8 }} />
                    </div>
                </div>
            </div>

            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: '30px', fontSize: '0.9rem' }}>
                    <span>Home</span>
                    <span>Shop</span>
                    <span>Orders</span>
                    <span>Contact Us</span>
                    <span>About Us</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <span style={{ fontSize: '0.9rem' }}>Sign up for Newsletter</span>
                    <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            style={{
                                padding: '12px 100px 12px 15px',
                                borderRadius: '8px',
                                border: 'none',
                                background: '#c7ede0'
                            }}
                        />
                        <button style={{ position: 'absolute', right: '5px', background: '#27ae60', color: 'white', padding: '8px 20px', borderRadius: '6px', fontWeight: 600 }}>Sign up</button>
                    </div>
                </div>
            </div>
        </footer>
    )
}

const footerTitleStyle = {
    marginBottom: '20px',
    fontSize: '1.2rem',
    fontWeight: 700
}

const footerListStyle = {
    listStyle: 'none',
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    fontSize: '0.9rem',
    opacity: 0.8
}

export default Footer
