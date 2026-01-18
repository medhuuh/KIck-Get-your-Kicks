const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Mock Data (To be replaced with Database)
const products = [
    { id: 1, name: "Air Max Pulse", category: "Running", price: 159.00, image: "hero-shoe.png", rating: 4.8, description: "Experience the next generation of Air Max. The Pulse features a point-loaded cushioning system—built to deliver a better bounce and more comfort than ever before." },
    { id: 2, name: "ZoomX Invincible", category: "Athletic", price: 180.00, image: "sports-shoe.png", rating: 4.9, description: "Built for maximum comfort and stability, the ZoomX Invincible 3 features a high level of cushioning to help you stay on your feet today, tomorrow and beyond." },
    { id: 3, name: "Desert Haze Low", category: "Lifestyle", price: 110.00, image: "olive-shoe.png", rating: 4.5, description: "Designed for everyday wear, the Desert Haze Low combines classic aesthetic with modern comfort technology." },
    { id: 4, name: "Club Court Classic", category: "Casual", price: 95.00, image: "casual-shoe.png", rating: 4.6, description: "Timeless design meets exceptional durability. Perfect for any casual occasion." }
];

// Routes
app.get('/', (req, res) => {
    res.send('KICK API is running...');
});

// Products API
app.get('/api/products', (req, res) => {
    res.json(products);
});

app.get('/api/products/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).send('Product not found');
    res.json(product);
});

// Auth API (Mock)
app.post('/api/auth/login', (req, res) => {
    const { email, password } = req.body;
    if (email && password) {
        res.json({ success: true, message: "Logged in successfully", user: { name: "John Doe", email } });
    } else {
        res.status(400).json({ success: false, message: "Invalid credentials" });
    }
});

app.post('/api/auth/register', (req, res) => {
    const { email, password, name } = req.body;
    if (email && password && name) {
        res.json({ success: true, message: "Registered successfully", user: { name, email } });
    } else {
        res.status(400).json({ success: false, message: "Missing required fields" });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
