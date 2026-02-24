import React from 'react'
import { Facebook, Twitter, Instagram, Youtube, Send } from 'lucide-react'
import { useLocation } from 'react-router-dom'

const Footer = () => {
    const location = useLocation()

    if (location.pathname === '/' || location.pathname === '/register') return null

    return (
        <footer className="container-padding" style={{ background: '#004D32', color: 'white' }}>
            <div className="footer-columns" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '40px', marginBottom: '40px' }}>
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

            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '30px' }}>
                <div style={{ display: 'flex', gap: '20px', fontSize: '0.85rem', flexWrap: 'wrap' }}>
                    <span>Home</span>
                    <span>Shop</span>
                    <span>Orders</span>
                    <span>Contact Us</span>
                    <span>About Us</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '0.85rem' }}>Newsletter</span>
                    <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                        <input
                            type="email"
                            placeholder="Email"
                            style={{
                                padding: '10px 80px 10px 15px',
                                borderRadius: '8px',
                                border: 'none',
                                background: '#c7ede0',
                                width: '200px'
                            }}
                        />
                        <button style={{ position: 'absolute', right: '4px', background: '#27ae60', color: 'white', padding: '6px 15px', borderRadius: '6px', fontWeight: 600, fontSize: '0.8rem' }}>Join</button>
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
