import express from 'express'
import dotenv from 'dotenv'
import { notFound, errorHandler } from './middleware/errorMiddlware.js'
import connectDB from './config/db.js'
import colors from 'colors'
import productRouters from './routes/productRoutes.js'
dotenv.config()
connectDB()
const app = express()

app.get('/', (req, res) => {
	res.send('API is running')
})

app.use('/api/products', productRouters)

app.use(notFound)

app.use(errorHandler)

const PORT = process.env.PORT
app.listen(
	PORT,
	console.log(
		`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
	)
)
