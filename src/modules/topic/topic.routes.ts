import express from 'express'
import { TopicController } from './topic.controller';

const router = express.Router();

router.get('/', TopicController.getTopics)
router.get('/:id', TopicController.getTopics)
router.post('/create-topic', TopicController.insertIntoDB)

export const TopicRoutes = router