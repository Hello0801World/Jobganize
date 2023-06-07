import express from 'express'

const app = express()
import dotenv from 'dotenv'
dotenv.config()

// middleware
import notFoundMiddleware from './middleware/notFoundMiddleware.js';
import errorHandling from './middleware/errorHandling.js';



app.get('/', (req,res)=>{
  throw new Error('error')
  res.send('Welcome');
})


app.use(notFoundMiddleware)
app.use(errorHandling)

const port = process.env.PORT || 5000

app.listen(port, ()=>{
  console.log(`Server is listening on port ${port}...`);
})
