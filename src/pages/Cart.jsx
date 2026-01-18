import React, { useState } from 'react'
import { Trash2, Plus, Minus, ArrowLeft, CreditCard } from 'lucide-react'
import { Link } from 'react-router-dom'
import heroShoe from '../assets/hero-shoe.png'
import casualShoe from '../assets/casual-shoe.png'

const Cart = () => {
    const [items, setItems] = useState([
        { id: 1, name: 'KICK Air Max', price: 120, quantity: 1, image: heroShoe },
        { id: 2, name: "Retro Casual", price: 95, quantity: 2, image: casualShoe }
    ])

    const subtotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0)
    const shipping = 15.00
    const tax = subtotal * 0.08
    const total = subtotal + shipping + tax

    const updateQuantity = (id, delta) => {
        setItems(items.map(item =>
            item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
        ))
    }

    const removeItem = (id) => {
        setItems(items.filter(item => item.id !== id))
    }

    return (
        <div className="container-padding" style={{ background: 'linear-gradient(135deg, #f8fdfb 0%, #e0f2f1 100%)', minHeight: '90vh' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '50px' }}>
                <h1 style={{ fontSize: '3.5rem', color: '#1A8763', fontWeight: 800 }}>Your Cart</h1>
                <Link to="/home" style={{ color: '#1A8763', textDecoration: 'none', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <ArrowLeft size={20} /> Continue Shopping
                </Link>
            </div>

            <div className="grid-cart">

                {/* Cart Items Table */}
                <div>
                    <div style={{ background: 'white', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(26, 135, 99, 0.05)' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                            <thead className="cart-table-header">
                                <tr style={{ background: '#f1f9f6', color: '#1A8763' }}>
                                    <th style={thStyle}>Product</th>
                                    <th style={thStyle}>Price</th>
                                    <th style={thStyle}>Quantity</th>
                                    <th style={{ ...thStyle, textAlign: 'right' }}>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map(item => (
                                    <tr key={item.id} className="cart-item-row" style={{ borderBottom: '1px solid #f0f7f4' }}>
                                        <td style={tdStyle}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                                <div className="cart-item-image" style={{
                                                    background: 'linear-gradient(135deg, #e0f2f1 0%, #A9DFC2 100%)',
                                                    borderRadius: '16px',
                                                    padding: '10px',
                                                    width: '90px',
                                                    height: '90px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center'
                                                }}>
                                                    <img src={item.image} alt={item.name} style={{ width: '100%', transform: 'rotate(-15deg)' }} />
                                                </div>
                                                <div>
                                                    <p style={{ fontWeight: 700, fontSize: '1.1rem', color: '#2C5F4D' }}>{item.name}</p>
                                                    <button
                                                        onClick={() => removeItem(item.id)}
                                                        style={{ color: '#e74c3c', fontSize: '0.9rem', fontWeight: 600, marginTop: '5px', display: 'flex', alignItems: 'center', gap: '4px' }}
                                                    >
                                                        <Trash2 size={14} /> Remove
                                                    </button>
                                                </div>
                                            </div>
                                        </td>
                                        <td style={{ ...tdStyle, fontWeight: 600, color: '#1A8763' }}>${item.price.toFixed(2)}</td>
                                        <td style={tdStyle}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', background: '#f8fdfb', padding: '8px 15px', borderRadius: '12px', width: 'fit-content', border: '1px solid #e0f2f1' }}>
                                                <Minus size={16} style={{ cursor: 'pointer', color: '#1A8763' }} onClick={() => updateQuantity(item.id, -1)} />
                                                <span style={{ fontWeight: 800, minWidth: '20px', textAlign: 'center' }}>{item.quantity}</span>
                                                <Plus size={16} style={{ cursor: 'pointer', color: '#1A8763' }} onClick={() => updateQuantity(item.id, 1)} />
                                            </div>
                                        </td>
                                        <td style={{ ...tdStyle, textAlign: 'right', fontWeight: 800, fontSize: '1.1rem', color: '#2C5F4D' }}>
                                            ${(item.price * item.quantity).toFixed(2)}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {items.length === 0 && (
                            <div style={{ padding: '60px', textAlign: 'center' }}>
                                <p style={{ fontSize: '1.2rem', color: '#888' }}>Your cart is empty</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Cart Totals */}
                <div style={{ height: 'fit-content' }}>
                    <div className="glass-card shadow-premium" style={{ padding: '40px', background: 'white', border: 'none' }}>
                        <h3 style={{ fontSize: '1.8rem', marginBottom: '30px', fontWeight: 800, color: '#2C5F4D' }}>Order Summary</h3>

                        <div style={summaryRowStyle}>
                            <span style={{ color: '#888' }}>Subtotal</span>
                            <span style={{ fontWeight: 600 }}>${subtotal.toFixed(2)}</span>
                        </div>
                        <div style={summaryRowStyle}>
                            <span style={{ color: '#888' }}>Estimated Shipping</span>
                            <span style={{ fontWeight: 600 }}>${shipping.toFixed(2)}</span>
                        </div>
                        <div style={summaryRowStyle}>
                            <span style={{ color: '#888' }}>Estimated Tax (8%)</span>
                            <span style={{ fontWeight: 600 }}>${tax.toFixed(2)}</span>
                        </div>

                        <div style={{ ...summaryRowStyle, borderTop: '2px dashed #f0f7f4', paddingTop: '25px', marginTop: '25px', fontSize: '1.8rem', fontWeight: 800, color: '#1A8763' }}>
                            <span>Total</span>
                            <span>${total.toFixed(2)}</span>
                        </div>

                        <button style={{
                            width: '100%',
                            background: '#1A8763',
                            color: 'white',
                            padding: '22px',
                            borderRadius: '18px',
                            fontWeight: 800,
                            marginTop: '40px',
                            fontSize: '1.2rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '12px',
                            boxShadow: '0 15px 30px rgba(26, 135, 99, 0.2)'
                        }}>
                            <CreditCard size={24} /> Checkout Now
                        </button>

                        <p style={{ textAlign: 'center', marginTop: '20px', color: '#888', fontSize: '0.9rem' }}>
                            Secure checkout powered by KICK Payments
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const thStyle = {
    textAlign: 'left',
    padding: '20px',
    fontWeight: 700,
    fontSize: '0.9rem',
    textTransform: 'uppercase',
    letterSpacing: '1px'
}

const tdStyle = {
    padding: '25px 20px'
}

const summaryRowStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '18px',
    fontSize: '1.1rem'
}

export default Cart
