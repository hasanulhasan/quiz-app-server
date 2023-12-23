import express, { Application } from 'express'
import cors from 'cors'
import { UserRoutes } from './modules/user/user.routes';

const app:Application = express();
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended: true}))

app.use('/v1/user', UserRoutes)

export default app;