import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Basic routes
app.get('/', (req: Request, res: Response) => {
  res.json({ 
    message: 'The Sustainable Island API - Water Fountains',
    version: '1.0.0'
  });
});

// Water fountains routes (to be implemented)
app.get('/api/fountains', (req: Request, res: Response) => {
  res.json({ 
    message: 'Endpoint to get all fountains',
    data: []
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
