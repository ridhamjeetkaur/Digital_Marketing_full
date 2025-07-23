// src/routes/contact.routes.ts
import { Router } from 'express';
import { db } from '../db';

const router = Router();

router.post('/contact', async (req, res) => {
  const { name, email,subject, message } = req.body;

  try {
    const [result] = await db.execute(
      'INSERT INTO contact_messages (name, email,subject, message) VALUES (?, ?,?, ?)',
      [name, email, subject,message]
    );
    res.status(201).json({ success: true, message: 'Reply saved!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Error saving reply' });
  }
});

export default router;
