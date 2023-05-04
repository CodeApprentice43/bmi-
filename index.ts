import express from 'express'
import {calculateBmi} from './bmi'

const app = express()
 
//used import thus the types of the req and res objects are known 
app.get('/hello', (_req, res) => {
    res.send('Hello Full Stack');
  });
app.get('/bmi',(req,res)=>{
    const height = Number(req.query.height)
    const weight = Number(req.query.weight)
    if(isNaN(height) || isNaN(weight))
    {
        res.status(400).send('Invalid params!')
    }
    res.send(calculateBmi(height,weight))
})
const PORT = 3003

app.listen(PORT,()=>{
    console.log(`Server running on PORT: ${PORT}`)
})