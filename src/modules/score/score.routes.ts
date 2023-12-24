import express from 'express'
import { ScoreController } from './score.controller';

const router = express.Router();

router.get('/:id', ScoreController.getScore)
router.get('/', ScoreController.getScores)
router.post('/create-score', ScoreController.insertIntoDB)

export const ScoreRoutes = router