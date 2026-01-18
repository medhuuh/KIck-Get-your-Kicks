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
        <div style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <AuthBackground />

            {/* Top Logo - Matching Pixel Style */}
            <div style={{ position: 'absolute', top: '40px', left: '60px', zIndex: 10 }}>
                <h1 style={{ color: '#2C5F4D', fontSize: '4.5rem', fontWeight: 900, fontFamily: '"Press Start 2P", monospace', letterSpacing: '-5px', lineHeight: 1 }}>
                    KICK<span style={{ fontSize: '1rem', verticalAlign: 'top', color: '#2ECC71', marginLeft: '8px', fontFamily: 'monospace' }}>BETA</span>
                </h1>
            </div>

            {/* Nav Actions */}
            <div style={{ position: 'absolute', top: '40px', right: '60px', display: 'flex', alignItems: 'center', gap: '30px', zIndex: 10 }}>
                <button style={{ background: '#1A8763', color: 'white', padding: '12px 30px', borderRadius: '25px', fontWeight: 700, fontSize: '0.9rem' }}>SIGN IN</button>
                <Link to="/register" style={{ color: 'white', textDecoration: 'none', fontWeight: 700, fontSize: '0.9rem', opacity: 0.8 }}>REGISTER</Link>
                <button style={{ color: 'white', fontWeight: 700, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '6px', opacity: 0.8 }}>
                    ENGLISH <span style={{ fontSize: '0.7rem' }}>▼</span>
                </button>
            </div>

            <div style={{ width: '100%', maxWidth: '1300px', display: 'flex', alignItems: 'center', gap: '80px', padding: '0 60px', marginTop: '60px' }}>

                {/* Left Side: Floating Olive Shoe */}
                <div style={{ flex: 1.2, position: 'relative' }}>
                    <motion.div
                        animate={{
                            y: [0, -25, 0],
                            rotate: [-25, -20, -25]
                        }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <img
                            src={oliveShoe}
                            alt="Olive Shoe"
                            style={{ width: '100%', filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.4))' }}
                        />
                    </motion.div>
                </div>

                {/* Right Side: Sign In Form */}
                <div style={{ flex: 0.8, maxWidth: '450px' }}>
                    <div style={{ marginBottom: '40px', position: 'relative' }}>
                        <p style={{ color: 'white', fontWeight: 800, fontSize: '1rem', letterSpacing: '1px', marginBottom: '5px' }}>SIGN IN</p>
                        <div style={{ position: 'relative' }}>
                            <h2 style={{ color: '#A9DFC2', fontSize: '2.5rem', fontWeight: 900, lineHeight: 1, letterSpacing: '1px' }}>
                                GET YOUR KICKS.
                            </h2>
                            {/* Flourish & symbol */}
                            <span style={{
                                position: 'absolute',
                                right: '10px',
                                top: '-20px',
                                fontSize: '6rem',
                                color: 'rgba(255,255,255,0.15)',
                                fontFamily: 'serif',
                                fontStyle: 'italic',
                                pointerEvents: 'none'
                            }}>&</span>
                        </div>
                    </div>

                    <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <div style={{ position: 'relative' }}>
                            <input
                                type="text"
                                placeholder="Enter Phone number or Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                style={authInputStyle}
                            />
                        </div>

                        <div style={{ position: 'relative' }}>
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter Your Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                style={authInputStyle}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                style={{ position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.4)', background: 'none', border: 'none', cursor: 'pointer' }}
                            >
                                {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
                            </button>
                        </div>

                        <div style={{ textAlign: 'right', marginTop: '-10px' }}>
                            <a href="#" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', textDecoration: 'none', fontWeight: 600 }}>Forgot Password?</a>
                        </div>

                        <button
                            type="submit"
                            style={{
                                padding: '18px',
                                borderRadius: '12px',
                                background: '#004D32',
                                color: 'white',
                                fontWeight: 800,
                                fontSize: '1.2rem',
                                marginTop: '10px',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                                border: 'none',
                                cursor: 'pointer'
                            }}
                        >
                            SIGN IN
                        </button>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', color: 'white', fontSize: '0.9rem', margin: '15px 0', opacity: 0.6 }}>
                            <div style={{ flex: 1, height: '1px', background: 'white' }}></div>
                            OR
                            <div style={{ flex: 1, height: '1px', background: 'white' }}></div>
                        </div>

                        <p style={{ textAlign: 'center', color: 'white', fontSize: '0.85rem', fontWeight: 600, opacity: 0.8 }}>continue with</p>

                        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                            <button type="button" style={socialBtnStyle}>
                                <img src="https://www.svgrepo.com/show/475647/facebook-color.svg" width="24" alt="FB" />
                            </button>
                            <button type="button" style={socialBtnStyle}>
                                <img src="https://www.svgrepo.com/show/475656/google-color.svg" width="24" alt="Google" />
                            </button>
                        </div>

                        <p style={{ textAlign: 'center', color: 'white', fontSize: '0.95rem', marginTop: '20px', opacity: 0.8 }}>
                            Don't have an Account? <Link to="/register" style={{ fontWeight: 800, textDecoration: 'none', color: 'white' }}>Create Account!</Link>
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
