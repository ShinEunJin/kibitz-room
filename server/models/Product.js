import mongoose from "mongoose"

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      maxLength: 70,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    region1: {
      type: String,
      required: true,
    },
    region2: {
      type: String,
      required: true,
    },
    coord: Object,
    location: {
      type: String,
      required: true,
    },
    description: String,
    images: {
      type: Array,
      required: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    likes: {
      type: Number,
      default: 0,
    },
    writer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  { timestamps: true }
)

const Product = mongoose.model("Product", ProductSchema)

export default Product
