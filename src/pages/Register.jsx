import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Eye, EyeOff } from 'lucide-react'
import { motion } from 'framer-motion'
import AuthBackground from '../components/AuthBackground'
import oliveShoe from '../assets/olive-shoe.png'

const Register = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const navigate = useNavigate()

    const handleRegister = (e) => {
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
                <Link to="/" className="auth-nav-link" style={{ color: 'white', textDecoration: 'none', fontWeight: 700, fontSize: '0.85rem' }}>SIGN IN</Link>
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

                {/* Right Side: Sign Up Form */}
                <div style={{ flex: '1 1 350px', maxWidth: '450px' }}>
                    <div style={{ marginBottom: '30px', position: 'relative' }}>
                        <p style={{ color: 'white', fontWeight: 800, fontSize: '0.9rem', letterSpacing: '1px', marginBottom: '5px' }}>CREATE ACCOUNT</p>
                        <div style={{ position: 'relative' }}>
                            <h2 style={{ color: '#A9DFC2', fontSize: '2rem', fontWeight: 900, lineHeight: 1.1, letterSpacing: '1px' }}>
                                JOIN THE CLUB.
                            </h2>
                        </div>
                    </div>
                    <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <input placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} style={authInputStyle} />
                        <input placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} style={authInputStyle} />
                        <div style={{ position: 'relative' }}>
                            <input type={showPassword ? "text" : "password"} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={authInputStyle} />
                            <button type="button" onClick={() => setShowPassword(!showPassword)} style={eyeButtonStyle}>
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>
                        <button type="submit" style={{ padding: '16px', borderRadius: '12px', background: '#004D32', color: 'white', fontWeight: 800, fontSize: '1.1rem', marginTop: '10px', boxShadow: '0 8px 16px rgba(0,0,0,0.2)', border: 'none', cursor: 'pointer' }}>REGISTER</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

const authInputStyle = { width: '100%', padding: '16px 25px', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.05)', color: 'white', fontSize: '1rem', outline: 'none' }
const eyeButtonStyle = { position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.4)', background: 'none', border: 'none', cursor: 'pointer' }
export default Register
