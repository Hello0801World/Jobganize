import express from 'express' 
const app = express()
import 'express-async-errors'
import dotenv from 'dotenv'
dotenv.config()

// db and authentication
import connectionDB from './db/connect.js';

// router 
import authRouter from './routes/authRoute.js'
import jobsRouter from './routes/jobsRoute.js'

// middleware
import notFoundMiddleware from './middleware/notFoundMiddleware.js';
import errorHandling from './middleware/errorHandling.js';


app.use(express.json())

app.get('/', (req,res)=>{
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
