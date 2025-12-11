import mongoose from 'mongoose';

//import uniqueValidator from 'mongoose-unique-validator';

const CategorySchema = mongoose.Schema({
  _id: Number,
  catnm: {
    type: String,
    required: [true,"Name is required"],
    lowercase: true,
    unique: true,
    trim: true,
  },
  caticonnm: {
    type: String,
    required: [true,"caticon is required"],
    lowercase: true,
    trim: true
  },

});

// Apply the uniqueValidator plugin to UserSchema.
//CategorySchema.plugin(uniqueValidator);

// compile schema to model
const CategorySchemaModel = mongoose.model('category_collection',CategorySchema);

export default CategorySchemaModel;



