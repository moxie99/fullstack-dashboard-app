import mongoose from "mongoose"

const ProductSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    description: String,
    category: String,
    rating: String,
    supply: Number,
  },
  {
    timestamp: true,
  }
)

const Product = mongoose.model("Product", ProductSchema)
export default Product
