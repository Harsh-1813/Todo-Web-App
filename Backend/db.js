const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://harshgupta1813:harsh%401234@cluster0.jetxjey.mongodb.net/todos")
const todoSchema=mongoose.Schema({
    title: String,
    description : String,
    completed: Boolean
})

const todo=mongoose.model('todos',todoSchema);
module.exports={
    todo
}