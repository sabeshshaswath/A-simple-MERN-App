import mongoose from "mongoose";
// mongoose.connect('mongodb://127.0.0.1:27017/fsproj').then(()=>console.log("Db connected"))
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  savedRecipes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Recipe" }],
});

export const UserModel = mongoose.model("users", UserSchema);

// const data=new UserModel({username:"bigil",password:"bigileyyyy"})

// data.save();