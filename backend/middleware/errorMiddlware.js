const notFound = (req, res, next) => {
	const error = new Error(`Not found - ${req.originalUrl}`)
	res.status(404)
	next(error)
}

const errorHandler = (err, req, res, next) => {
	const statusCode = res.statusCode === 200 ? 500 : res.statusCode
	res.status(statusCode)
	res.json({
		meesage: err.message,
		stack: process.env.NODE_ENV === 'productoin' ? null : err.stack,
	})
}
export { notFound, errorHandler }