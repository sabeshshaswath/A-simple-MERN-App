import mongoose from "mongoose";

const recipeSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  ingredients: [
    {
      type: String,
    },
  ],
  description: {
    type: String,
    required: true,
  },

  imageUrl: {
    type: String,
    required: true,
  },
  eurl: {
    type: String,
    required: true,
  },
  userOwner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  collegeName:{
    type:String,
    required:true
  },
  date:{
    type:String
  }

});

export const RecipesModel = mongoose.model("Recipes", recipeSchema);
