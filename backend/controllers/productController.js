import Product from '../models/productModel.js'
import asyncHandler from 'express-async-handler'

//@desc  Fetch all products
//@route GET /api/produts
//@access Public
const getProducts = asyncHandler(async (req, res) => {
	const products = await Product.find({})
	res.json(products)
})
//@desc  Fetchs single product
//@route GET /api/produts/:id
//@access Public
const getProductById = asyncHandler(async (req, res) => {
	const product = await Product.findById(req.params.id)

	if (product) {
		res.json(product)
	} else {
		res.status(404)
		throw new Error('Product not found')
	}
})

//@desc  Delete a product
//@route Delete /api/produts/:id
//@access Public
const deleteProduct = asyncHandler(async (req, res) => {
	const product = await Product.findById(req.params.id)

	if (product) {
	} else {
		res.status(404)
		throw new Error('Product not found')
	}
})

export { getProductById, getProducts }
