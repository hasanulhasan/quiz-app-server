import express from 'express'
import { QuestionController } from './question.controller';

const router = express.Router();

router.get('/:id', QuestionController.getSingleQuestion);
router.get('/', QuestionController.getAllQuestions);
router.post('/create-question', QuestionController.insertIntoDB);


export const QuestionRoutes = router