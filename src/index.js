import express from "express"
import client from "./utils/client.js"





const app = express()

//middleware
app.use(express.json())


const PORT = process.env.PORT || 3000

app.get("/", async (req, res) => {
    const value = await client.get("test")
    res.json({ hello: value })
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})


