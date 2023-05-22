import express from "express"; 
import prisma from "./prisma";
import userRoutes from "./routes/users";
import bodyParser from "body-parser";


const app = express(); 

app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

app.get("/", (req, res) => {
    res.send("helloBAA")
})

// routes 
app.use('/api/users', userRoutes)


app.listen(3500, () => {
    console.log("listening on port 3500")
})