import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Eye, EyeOff } from 'lucide-react'
import { motion } from 'framer-motion'
import AuthBackground from '../components/AuthBackground'
import oliveShoe from '../assets/olive-shoe.png'

const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        navigate('/home')
    }

    return (
        <div style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
            <AuthBackground />

            {/* Top Logo */}
            <div className="auth-logo-container" style={{ position: 'absolute', top: '30px', left: '30px', zIndex: 10 }}>
                <h1 className="auth-logo" style={{ color: '#2C5F4D', fontSize: '3rem', fontWeight: 900, fontFamily: 'monospace', letterSpacing: '-2px', lineHeight: 1 }}>
                    KICK<span style={{ fontSize: '0.8rem', verticalAlign: 'top', color: '#2ECC71', marginLeft: '4px' }}>BETA</span>
                </h1>
            </div>

            {/* Nav Actions */}
            <div className="auth-nav-container" style={{ position: 'absolute', top: '30px', right: '30px', display: 'flex', alignItems: 'center', gap: '20px', zIndex: 10 }}>
                <Link to="/register" className="auth-nav-link" style={{ color: 'white', textDecoration: 'none', fontWeight: 700, fontSize: '0.85rem' }}>REGISTER</Link>
            </div>

            <div className="auth-content-grid" style={{ width: '100%', maxWidth: '1100px', display: 'flex', alignItems: 'center', gap: '40px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '40px' }}>

                {/* Left Side: Floating Olive Shoe */}
                <div className="auth-image-container" style={{ flex: '1 1 300px', maxWidth: '500px' }}>
                    <motion.div
                        animate={{
                            y: [0, -20, 0],
                            rotate: [-20, -15, -20]
                        }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <img
                            src={oliveShoe}
                            alt="Olive Shoe"
                            style={{ width: '100%', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))' }}
                        />
                    </motion.div>
                </div>

                {/* Right Side: Sign In Form */}
                <div style={{ flex: '1 1 350px', maxWidth: '450px' }}>
                    <div style={{ marginBottom: '30px', position: 'relative' }}>
                        <p style={{ color: 'white', fontWeight: 800, fontSize: '0.9rem', letterSpacing: '1px', marginBottom: '5px' }}>SIGN IN</p>
                        <div style={{ position: 'relative' }}>
                            <h2 style={{ color: '#A9DFC2', fontSize: '2rem', fontWeight: 900, lineHeight: 1.1, letterSpacing: '1px' }}>
                                GET YOUR KICKS.
                            </h2>
                        </div>
                    </div>

                    <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        <div style={{ position: 'relative' }}>
                            <input
                                type="text"
                                placeholder="Email or Phone"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                style={authInputStyle}
                            />
                        </div>

                        <div style={{ position: 'relative' }}>
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                style={authInputStyle}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                style={{ position: 'absolute', right: '15px', top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.4)', background: 'none', border: 'none', cursor: 'pointer' }}
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>

                        <div style={{ textAlign: 'right', marginTop: '-5px' }}>
                            <a href="#" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem', textDecoration: 'none', fontWeight: 600 }}>Forgot?</a>
                        </div>

                        <button
                            type="submit"
                            style={{
                                padding: '16px',
                                borderRadius: '12px',
                                background: '#004D32',
                                color: 'white',
                                fontWeight: 800,
                                fontSize: '1.1rem',
                                marginTop: '5px',
                                boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
                                border: 'none',
                                cursor: 'pointer'
                            }}
                        >
                            SIGN IN
                        </button>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'white', fontSize: '0.8rem', margin: '10px 0', opacity: 0.5 }}>
                            <div style={{ flex: 1, height: '1px', background: 'white' }}></div>
                            OR
                            <div style={{ flex: 1, height: '1px', background: 'white' }}></div>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
                            <button type="button" style={socialBtnStyle}>
                                <img src="https://www.svgrepo.com/show/475647/facebook-color.svg" width="20" alt="FB" />
                            </button>
                            <button type="button" style={socialBtnStyle}>
                                <img src="https://www.svgrepo.com/show/475656/google-color.svg" width="20" alt="Google" />
                            </button>
                        </div>

                        <p style={{ textAlign: 'center', color: 'white', fontSize: '0.9rem', marginTop: '15px', opacity: 0.8 }}>
                            Need an account? <Link to="/register" style={{ fontWeight: 800, textDecoration: 'none', color: '#A9DFC2' }}>Create one!</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

const authInputStyle = {
    width: '100%',
    padding: '18px 25px',
    borderRadius: '15px',
    border: '1px solid rgba(255,255,255,0.2)',
    background: 'rgba(255,255,255,0.05)',
    color: 'white',
    fontSize: '1rem',
    outline: 'none',
    transition: 'all 0.3s ease'
}

const socialBtnStyle = {
    padding: '12px 35px',
    borderRadius: '12px',
    background: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'transform 0.2s',
    cursor: 'pointer',
    border: 'none'
}

export default Login
