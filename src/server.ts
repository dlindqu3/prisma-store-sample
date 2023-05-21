import 'dotenv/config'; 
import express from 'express'; 

const app = express(); 

// middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

// routes 
app.post('/users/create', async (req, res, next) => {

})
app.get('/users/', async (req, res, next) => {

})
app.get('/users/:userId', async (req, res, next) => {

})
app.patch('/users/:userId', async (req, res, next) => {

})
app.delete('/users/:userId', async (req, res, next) => {

})

app.listen(3000, () => {
    console.log("app listening on port ")
})