import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Eye, MapPin, Package, Heart, LogOut, User } from 'lucide-react'
import userAvatar from '../assets/user-avatar.png'

const Profile = () => {
    const navigate = useNavigate()
    return (
        <div style={{ padding: '60px 80px', background: 'linear-gradient(135deg, #f8fdfb 0%, #e0f2f1 100%)', minHeight: '80vh' }}>
            <h1 style={{ fontSize: '3rem', color: '#1A8763', marginBottom: '40px', fontWeight: 800 }}>My Profile</h1>

            <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '40px' }}>

                {/* Sidebar */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <button style={{ ...sidebarBtnStyle, ...activeSidebarBtnStyle }}>
                        <User size={20} /> Account Details
                    </button>
                    <button style={sidebarBtnStyle}>
                        <Package size={20} /> My Orders
                    </button>
                    <button style={sidebarBtnStyle}>
                        <MapPin size={20} /> Addresses
                    </button>
                    <button style={sidebarBtnStyle}>
                        <Heart size={20} /> Wishlist
                    </button>
                    <button
                        onClick={() => navigate('/login')}
                        style={{ ...sidebarBtnStyle, marginTop: '20px', color: '#d35400', background: 'rgba(211, 84, 0, 0.05)', cursor: 'pointer' }}
                    >
                        <LogOut size={20} /> Logout
                    </button>
                </div>

                {/* Main Form Area */}
                <div className="glass-card shadow-premium" style={{ padding: '60px', display: 'flex', gap: '60px', alignItems: 'flex-start', background: 'white', border: 'none' }}>
                    <div style={{ textAlign: 'center' }}>
                        <div style={{
                            width: '180px',
                            height: '180px',
                            background: '#2C5F4D',
                            borderRadius: '30px',
                            flexShrink: 0,
                            overflow: 'hidden',
                            boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
                            marginBottom: '20px'
                        }}>
                            <img src={userAvatar} alt="User Avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <button style={{ color: '#1A8763', fontWeight: 700, fontSize: '0.9rem' }}>Change Photo</button>
                    </div>

                    <div style={{ flex: 1 }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px 40px' }}>
                            <div>
                                <label style={labelStyle}>Full Name</label>
                                <input type="text" defaultValue="John Doe" style={profileInputStyle} />
                            </div>
                            <div>
                                <label style={labelStyle}>Email Address</label>
                                <input type="email" defaultValue="johndoe@example.com" style={profileInputStyle} />
                            </div>
                            <div>
                                <label style={labelStyle}>Phone Number</label>
                                <input type="text" defaultValue="+1 234 567 890" style={profileInputStyle} />
                            </div>
                            <div>
                                <label style={labelStyle}>Change Password</label>
                                <div style={{ position: 'relative' }}>
                                    <input type="password" placeholder="••••••••" style={profileInputStyle} />
                                    <Eye size={18} style={{ position: 'absolute', right: '15px', top: '50%', transform: 'translateY(-50%)', opacity: 0.5, cursor: 'pointer' }} />
                                </div>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '20px', marginTop: '60px' }}>
                            <button style={{ flex: 1, border: '2px solid #A9DFC2', color: '#1A8763', padding: '16px', borderRadius: '15px', fontWeight: 700 }}>Cancel</button>
                            <button style={{ flex: 1, background: '#1A8763', color: 'white', padding: '16px', borderRadius: '15px', fontWeight: 700, boxShadow: '0 10px 20px rgba(26, 135, 99, 0.2)' }}>Save Changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const sidebarBtnStyle = {
    textAlign: 'left',
    padding: '18px 25px',
    borderRadius: '15px',
    fontSize: '1rem',
    fontWeight: 600,
    color: '#2C5F4D',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    transition: 'all 0.3s ease'
}

const activeSidebarBtnStyle = {
    background: 'white',
    boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
    color: '#1A8763',
    transform: 'translateX(5px)'
}

const labelStyle = {
    display: 'block',
    marginBottom: '10px',
    fontWeight: 700,
    color: '#1A8763',
    fontSize: '0.9rem',
    textTransform: 'uppercase',
    letterSpacing: '1px'
}

const profileInputStyle = {
    width: '100%',
    padding: '14px 20px',
    borderRadius: '12px',
    border: '2px solid #f0f7f4',
    background: '#f8fdfb',
    fontSize: '1rem',
    fontWeight: 500,
    color: '#2C5F4D',
    outline: 'none',
    transition: 'all 0.3s ease'
}

export default Profile
