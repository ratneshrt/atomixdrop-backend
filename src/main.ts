import express from 'express'

const app = express()
app.get("/", (req, res) => {
    res.send({
        msg: "Hello"
    })
})

app.listen(3000, () => {
    console.log("server listening 3000")
})