import express from "express"; 

const app = express(); 

app.get("/", (req, res) => {
    res.send("helloBAA")
})

// run with "node index.js"
app.listen(3500, () => {
    console.log("listening on port 3500")
})