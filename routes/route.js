import express from 'express';
import { latestData, getDeviation, fetchCryptoData } from '../controllers/service.js';
const router = express.Router();

router.get('/stats', latestData)
router.get('/deviation', getDeviation)
export default router;