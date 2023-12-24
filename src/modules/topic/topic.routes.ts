import express from 'express'
import { TopicController } from './topic.controller';

const router = express.Router();

router.get('/:id', TopicController.getTopic)
router.patch('/:id', TopicController.updateTopic)
router.get('/', TopicController.getTopics)
router.post('/create-topic', TopicController.insertIntoDB)

export const TopicRoutes = router