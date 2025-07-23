import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import contactRoutes from './router/contact.routes';

dotenv.config();

const app = express();

// Middleware for parsing JSON
app.use(cors({ origin: 'http://localhost:3000' })); // Adjust origin as needed
app.use(express.json()); // ✅ Important for req.body to work

app.use('/api', contactRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.send('API is running 🚀');
});