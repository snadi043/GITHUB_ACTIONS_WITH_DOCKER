import { Router } from 'express';

import db from '../data/database.js';

const router = Router();

router.get('/', async (req, res) => {
  const allTests = await db.collection('test').find().toArray();
  res.json({ test: allTests });
});

router.post('/', async (req, res) => {
  const testData = req.body;
  const result = await db.collection('test').insertOne({...testData});
  res.status(201).json({
    message: 'Test created.',
    test: { ...testData, id: result.insertedId },
  });
});

export default router;
