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
        <div style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <AuthBackground />
            <div style={{ position: 'absolute', top: '40px', left: '60px', zIndex: 10 }}>
                <h1 style={{ color: '#2C5F4D', fontSize: '4.5rem', fontWeight: 900, fontFamily: '"Press Start 2P", monospace', letterSpacing: '-5px', lineHeight: 1 }}>
                    KICK<span style={{ fontSize: '1rem', verticalAlign: 'top', color: '#2ECC71', marginLeft: '8px', fontFamily: 'monospace' }}>BETA</span>
                </h1>
            </div>
            <div style={{ position: 'absolute', top: '40px', right: '60px', display: 'flex', alignItems: 'center', gap: '30px', zIndex: 10 }}>
                <Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 700, fontSize: '0.9rem', opacity: 0.8 }}>SIGN IN</Link>
                <button style={{ background: '#1A8763', color: 'white', padding: '12px 30px', borderRadius: '25px', fontWeight: 700, fontSize: '0.9rem' }}>REGISTER</button>
            </div>
            <div style={{ width: '100%', maxWidth: '1300px', display: 'flex', alignItems: 'center', gap: '80px', padding: '0 60px', marginTop: '60px' }}>
                <div style={{ flex: 1.2, position: 'relative' }}>
                    <motion.div animate={{ y: [0, -25, 0], rotate: [-25, -20, -25] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
                        <img src={oliveShoe} alt="Olive Shoe" style={{ width: '100%', filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.4))' }} />
                    </motion.div>
                </div>
                <div style={{ flex: 0.8, maxWidth: '450px' }}>
                    <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        <input placeholder="Enter Your Name" value={name} onChange={(e) => setName(e.target.value)} style={authInputStyle} />
                        <input placeholder="Enter Your Email Id" value={email} onChange={(e) => setEmail(e.target.value)} style={authInputStyle} />
                        <div style={{ position: 'relative' }}>
                            <input type={showPassword ? "text" : "password"} placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} style={authInputStyle} />
                            <button type="button" onClick={() => setShowPassword(!showPassword)} style={eyeButtonStyle}>
                                {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
                            </button>
                        </div>
                        <button type="submit" style={{ padding: '18px', borderRadius: '12px', background: '#004D32', color: 'white', fontWeight: 800, fontSize: '1.2rem', marginTop: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.2)', border: 'none', cursor: 'pointer' }}>REGISTER</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

const authInputStyle = { width: '100%', padding: '16px 25px', borderRadius: '15px', border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.05)', color: 'white', fontSize: '1rem', outline: 'none' }
const eyeButtonStyle = { position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.4)', background: 'none', border: 'none', cursor: 'pointer' }
export default Register
