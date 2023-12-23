import express, { Application } from 'express'
import cors from 'cors'
import { UserRoutes } from './modules/user/user.routes';
import { TopicRoutes } from './modules/topic/topic.routes';
import { QuestionRoutes } from './modules/question/question.routes';

const app:Application = express();
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended: true}))

app.use('/v1/user', UserRoutes)
app.use('/v1/topic', TopicRoutes)
app.use('/v1/question', QuestionRoutes)

export default app;