import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authroutes';

const app = express();

// Enable CORS for specific origin
app.use(cors({
    origin: 'http://localhost:5173',
}));

// Middleware to parse JSON
app.use(express.json());

// Use the auth routes
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Server is running!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});