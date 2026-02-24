import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ShoppingBag, Star, ArrowLeft, Heart, ShieldCheck, Truck } from 'lucide-react'
import heroShoe from '../assets/hero-shoe.png'
import casualShoe from '../assets/casual-shoe.png'
import sportsShoe from '../assets/sports-shoe.png'
import oliveShoe from '../assets/olive-shoe.png'

import { API_BASE_URL } from '../api'

const ProductDetails = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [selectedSize, setSelectedSize] = useState(null)
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    // Map backend image names to frontend assets
    const assetMap = {
        'hero-shoe.png': heroShoe,
        'casual-shoe.png': casualShoe,
        'sports-shoe.png': sportsShoe,
        'olive-shoe.png': oliveShoe
    }

    useEffect(() => {
        fetch(`${API_BASE_URL}/api/products/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
                setLoading(false)
            })
            .catch(err => {
                console.error("Error fetching product:", err)
                setLoading(false)
            })
    }, [id])

    if (loading) return <div style={{ padding: '100px', textAlign: 'center', color: '#1A8763', fontWeight: 800 }}>Loading Kicks...</div>
    if (!product) return <div style={{ padding: '100px', textAlign: 'center', color: '#e74c3c', fontWeight: 800 }}>Product not found</div>

    return (
        <div className="container-padding" style={{ background: '#f8fdfb', minHeight: '90vh' }}>
            <button
                onClick={() => navigate(-1)}
                style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#1A8763', fontWeight: 700, marginBottom: '20px' }}
            >
                <ArrowLeft size={18} /> Back to Shop
            </button>

            <div className="grid-details">

                {/* Product Image Section */}
                <div style={{ position: 'relative' }}>
                    <div style={{
                        background: 'linear-gradient(135deg, #A9DFC2 0%, #2C5F4D 100%)',
                        borderRadius: '32px',
                        padding: '40px',
                        height: 'auto',
                        minHeight: '300px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 20px 40px rgba(26, 135, 99, 0.15)'
                    }}>
                        <img
                            src={assetMap[product.image] || heroShoe}
                            alt={product.name}
                            style={{ width: '100%', maxWidth: '400px', transform: 'rotate(-15deg)', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.2))' }}
                        />
                    </div>
                </div>

                {/* Product Info Section */}
                <div style={{ padding: '0' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                        <span style={{ color: '#1A8763', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.8rem' }}>New Collection</span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#f39c12' }}>
                            <Star size={16} fill="#f39c12" />
                            <span style={{ fontWeight: 800, color: '#2C5F4D' }}>{product.rating}</span>
                        </div>
                    </div>

                    <h1 className="text-title" style={{ color: '#2C5F4D', marginBottom: '15px' }}>{product.name}</h1>
                    <p style={{ fontSize: '2rem', fontWeight: 700, color: '#1A8763', marginBottom: '20px' }}>${product.price}</p>

                    <p style={{ fontSize: '1rem', color: '#666', lineHeight: 1.6, marginBottom: '30px' }}>
                        {product.description}
                    </p>

                    <div style={{ marginBottom: '30px' }}>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '15px' }}>Select Size</h3>
                        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                            {[7, 8, 9, 10, 11, 12].map((size) => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    style={{
                                        width: '50px',
                                        height: '50px',
                                        borderRadius: '10px',
                                        border: selectedSize === size ? '2px solid #1A8763' : '2px solid #f0f7f4',
                                        background: selectedSize === size ? '#e0f2f1' : 'white',
                                        color: selectedSize === size ? '#1A8763' : '#2C5F4D',
                                        fontWeight: 700,
                                        fontSize: '0.9rem',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div style={{ display: 'flex', gap: '15px', marginBottom: '40px' }}>
                        <button style={{
                            flex: 1,
                            background: '#1A8763',
                            color: 'white',
                            padding: '16px',
                            borderRadius: '12px',
                            fontWeight: 800,
                            fontSize: '1rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '10px',
                            boxShadow: '0 10px 20px rgba(26, 135, 99, 0.2)'
                        }}>
                            <ShoppingBag size={20} /> Add to Cart
                        </button>
                        <button style={{
                            padding: '16px',
                            borderRadius: '12px',
                            border: '2px solid #A9DFC2',
                            color: '#1A8763',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Heart size={20} />
                        </button>
                    </div>

                    <div style={{ borderTop: '2px solid #f0f7f4', paddingTop: '30px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                            <div style={{ background: '#e0f2f1', padding: '10px', borderRadius: '10px', color: '#1A8763' }}>
                                <Truck size={20} />
                            </div>
                            <div>
                                <h4 style={{ fontWeight: 700, color: '#2C5F4D', fontSize: '0.9rem' }}>Free Shipping</h4>
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                            <div style={{ background: '#e0f2f1', padding: '10px', borderRadius: '10px', color: '#1A8763' }}>
                                <ShieldCheck size={20} />
                            </div>
                            <div>
                                <h4 style={{ fontWeight: 700, color: '#2C5F4D', fontSize: '0.9rem' }}>Secure Payment</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
