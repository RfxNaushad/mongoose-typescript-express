import express, { Application, NextFunction, Request, Response } from 'express'
import cors from 'cors';

const app: Application = express()

// Application router
import userRoutes from './app/modules/user/user.route'

// using cors
app.use(cors())

// parse Data
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// app.get('/api/v1/user', userRoutes)

app.use('/api/v1/user', userRoutes)

export default app;