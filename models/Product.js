
const { ProductPImageSchema } =require('./ProductPImage');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
Underscoreid:String , 


pImage:  
ProductPImageSchema
 , 


pName:String 



})

module.exports = {
  Product : mongoose.model('product', productSchema),
}

