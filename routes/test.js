import { Router } from 'express';

import getDb from '../data/database.js';

const router = Router();

router.get('/', async (req, res) => {
  const allTests = await getDb.collection('test').find().toArray();
  res.json({ test: allTests });
});

router.post('/', async (req, res) => {
  const testData = req.body;
  const result = await getDb.collection('test').insertOne({...testData});
  res.status(201).json({
    message: 'Test created.',
    test: { ...testData, id: result.insertedId },
  });
});

export default router;
