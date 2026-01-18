import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Profile from './pages/Profile'
import ProductDetails from './pages/ProductDetails'

import Layout from './components/Layout'

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Layout>
    )
}

export default App
