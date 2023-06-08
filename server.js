import express from 'express'
import connectionDB from './db/connect.js';

const app = express()
import dotenv from 'dotenv'
dotenv.config()

// db and authentication

// router 
import authRouter from './routes/authRoute.js'
import jobsRouter from './routes/jobsRoute.js'

// middleware
import notFoundMiddleware from './middleware/notFoundMiddleware.js';
import errorHandling from './middleware/errorHandling.js';


app.use(express.json())

app.get('/', (req,res)=>{
  throw new Error('error')
  res.send('Welcome');
})

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/jobs', jobsRouter)

app.use(notFoundMiddleware)
app.use(errorHandling)
const port = process.env.PORT || 5000


const start = async () => {
  try {
    await connectionDB(process.env.MONGO_URL)
    app.listen(port, ()=>{
      console.log(`Server is listening on port ${port}`);
    })
  } catch (error) {
    console.log(error)
  }
}


start()
