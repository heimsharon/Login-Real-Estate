import { Router } from 'express';
import jwt from 'jsonwebtoken';

const router = Router();

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key';

router.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Validate credentials
    if (username === '7cities' && password === '7cities') {
        // Generate a JWT
        const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ token });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

export default router;