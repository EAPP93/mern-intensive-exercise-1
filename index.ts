import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'

// configuramos archivos .env
dotenv.config()

// creamos una aplicacion express
const app: Express = express()
const port: String | Number = process.env.PORT || 8000

// Define the first Route of App
app.get('/', (req: Request, res: Response) => {
  // Send Hello World
  res.send(
    'Welcome to API Restful: Express + TS + Nodemon + Jest + Swagger + Mongoose'
  )
})

app.get('/hello', (req: Request, res: Response) => {
  // Send Hello World
  res.send('Hello world')
})

app.get('/bye', (req: Request, res: Response) => {
  // Send Hello World
  res.send({ data: { message: 'Goodbye, world' } })
})

// Execute APP and listen Requests to PORT
app.listen(port, () => {
  console.log(`Express Server: Running at http://localhost:${port}`)
})
