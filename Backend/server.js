import express from 'express'
import mongoose from 'mongoose'
const app = express()
import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'
app.use(cors())

const questionSchema = new mongoose.Schema({
    question: { type: String, required: true },
    answer: { type: String, required: true }
});

const QuestionModel = mongoose.model('Questions', questionSchema);
app.get('/questions', async (req, res) => {
    try {
        const { page = 1, limit = 10 } = req.query
        const skip = (page - 1) * limit
        const questions = await QuestionModel.find().skip(skip).limit(parseInt(limit))
        res.status(200).json(questions);
    }
    catch (err) {
        console.log(err)
    }
})


const port = process.env.PORT
const backend_url = process.env.MONGODB_URL
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
mongoose.connect(backend_url).then(() => console.log('Db connected')).catch((err) => console.log(err))


