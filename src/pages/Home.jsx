import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ShoppingBag, ChevronRight, Star } from 'lucide-react'
import heroShoe from '../assets/hero-shoe.png'
import casualShoe from '../assets/casual-shoe.png'
import sportsShoe from '../assets/sports-shoe.png'
import oliveShoe from '../assets/olive-shoe.png'

import { API_BASE_URL } from '../api'

const Home = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    // Map backend image names to frontend assets
    const assetMap = {
        'hero-shoe.png': heroShoe,
        'casual-shoe.png': casualShoe,
        'sports-shoe.png': sportsShoe,
        'olive-shoe.png': oliveShoe
    }

    useEffect(() => {
        fetch(`${API_BASE_URL}/api/products`)
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setLoading(false)
            })
            .catch(err => {
                console.error("Error fetching products:", err)
                setLoading(false)
            })
    }, [])

    return (
        <div style={{ padding: '40px 80px', background: '#f8fdfb' }}>

            {/* Top Section: Hero + Summer Sale */}
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '30px', marginBottom: '60px' }}>

                {/* Hero Banner */}
                <div style={{
                    background: 'linear-gradient(135deg, #A9DFC2 0%, #2C5F4D 100%)',
                    borderRadius: '32px',
                    padding: '60px',
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    color: 'white',
                    height: '450px',
                    boxShadow: '0 20px 40px rgba(26, 135, 99, 0.2)'
                }}>
                    <div style={{ zIndex: 1, maxWidth: '50%' }}>
                        <p style={{ fontSize: '1.2rem', fontWeight: 600, color: '#A9DFC2' }}>New Arrivals 2026</p>
                        <h1 style={{ fontSize: '4rem', fontWeight: 800, margin: '15px 0', lineHeight: 1.1 }}>Step Into The Future.</h1>
                        <p style={{ fontSize: '1.1rem', opacity: 0.9, marginBottom: '30px' }}>Experience ultimate comfort and revolutionary design with the new KICK collection.</p>
                        <button style={{ background: 'white', color: '#1A8763', padding: '16px 36px', borderRadius: '12px', fontWeight: 700, fontSize: '1.1rem', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>
                            Shop Now
                        </button>
                    </div>

                    {/* Hero Image */}
                    <motion.img
                        src={heroShoe}
                        alt="Hero Shoe"
                        animate={{
                            y: [0, -15, 0],
                            rotate: [-15, -10, -15]
                        }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        style={{
                            position: 'absolute',
                            right: '20px',
                            top: '40px',
                            width: '500px',
                            filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.4))'
                        }}
                    />
                </div>

                {/* Small Summer Sale Banner */}
                <div style={{
                    background: 'linear-gradient(135deg, #2C5F4D 0%, #1A8763 100%)',
                    borderRadius: '32px',
                    padding: '40px',
                    textAlign: 'center',
                    color: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    height: '450px',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px', background: 'rgba(255,255,255,0.05)', borderRadius: '50%' }}></div>
                    <h2 style={{ fontSize: '3rem', fontWeight: 800 }}>50% OFF</h2>
                    <p style={{ fontSize: '1.3rem', marginTop: '10px', opacity: 0.9 }}>Summer Sale Styles</p>
                    <button style={{ border: '2px solid white', color: 'white', padding: '12px 30px', borderRadius: '12px', fontWeight: 700, marginTop: '30px', alignSelf: 'center' }}>
                        View Sale
                    </button>
                    <img src={sportsShoe} style={{ width: '250px', marginTop: '30px', alignSelf: 'center', transform: 'rotate(15deg)', filter: 'drop-shadow(0 15px 30px rgba(0,0,0,0.2))' }} />
                </div>
            </div>

            {/* Featured Products Section */}
            <div style={{ marginBottom: '80px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px' }}>
                    <div>
                        <h3 style={{ fontSize: '2.5rem', color: '#1A8763' }}>Featured Kicks</h3>
                        <p style={{ color: '#666', marginTop: '5px' }}>Top picks from our latest release</p>
                    </div>
                    <button style={{ color: '#1A8763', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
                        See All <ChevronRight size={20} />
                    </button>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '30px' }}>
                    {loading ? (
                        <div style={{ gridColumn: 'span 4', textAlign: 'center', padding: '100px', color: '#1A8763', fontWeight: 700 }}>Loading Kicks...</div>
                    ) : products.map((product) => (
                        <Link to={`/product/${product.id}`} key={product.id} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <motion.div
                                whileHover={{ y: -10 }}
                                className="glass-card"
                                style={{ padding: '20px', background: 'white', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}
                            >
                                <div style={{ background: '#f1f9f6', borderRadius: '20px', padding: '20px', position: 'relative', marginBottom: '20px', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <img src={assetMap[product.image] || heroShoe} alt={product.name} style={{ width: '100%', transform: 'rotate(-10deg)', filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.1))' }} />
                                    <button style={{ position: 'absolute', top: '15px', right: '15px', background: 'white', padding: '10px', borderRadius: '50%', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
                                        <ShoppingBag size={20} color="#1A8763" />
                                    </button>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                                    <span style={{ color: '#1A8763', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '4px' }}>
                                        <Star size={14} fill="#1A8763" /> {product.rating}
                                    </span>
                                    <span style={{ fontSize: '1.2rem', fontWeight: 800 }}>${product.price}</span>
                                </div>
                                <h4 style={{ fontSize: '1.1rem', fontWeight: 600 }}>{product.name}</h4>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Explore Categories */}
            <div style={{ background: '#1A8763', borderRadius: '32px', padding: '60px', color: 'white', display: 'flex', gap: '80px', alignItems: 'center' }}>
                <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Explore Categories</h3>
                    <p style={{ fontSize: '1.1rem', opacity: 0.8, marginBottom: '40px' }}>Find the perfect pair for every occasion, from high-performance track shoes to casual everyday wear.</p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
                        {['Running', 'Casual', 'Limited Edition', 'Sports'].map((cat) => (
                            <div key={cat} style={{ background: 'rgba(255,255,255,0.1)', padding: '20px', borderRadius: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span style={{ fontWeight: 600 }}>{cat}</span>
                                <ChevronRight size={18} />
                            </div>
                        ))}
                    </div>
                </div>
                <div style={{ flex: 1, position: 'relative' }}>
                    <img src={sportsShoe} style={{ width: '100%', transform: 'rotate(-15deg) scale(1.1)', filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.3))' }} />
                </div>
            </div>
        </div>
    )
}

export default Home
