import mongoose from "mongoose";
const productSchema = new mongoose.Schema(
  {
    title : String,
    description:String,
    category :String,
    price:Number,
    discountPercentage:Number,
    rating:Number,
    stock:Number,
    brand:String,
    warrantyInformation:String,
    shippingInformation:String,
    availabilityStatus:String,
    reviews:[
      {
        rating:Number,
        comment:String,
        date:String,
        reviewerName:String,
        reviewrEmail:String
        
      }
    ],
     returnPolicy:String,
     minimumOrderQuantity:Number ,
     thumbnail: String
  }
)

export const Product=mongoose.model("product",productSchema);