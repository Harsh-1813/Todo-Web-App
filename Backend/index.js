const express=require("express");
const { createTodo } = require("./types");
const { todo } = require("./db");
const cors=require("cors");
const app=express();

app.use(cors({
    origin: "http://localhost:5173"
}));
app.use(express.json());
//expected input
// body{
//     title: String;
//     description:String;
// }
app.post("/todo", async function(req,res){
    const createPayload=req.body;
    const parsedPayload=createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "Invalid input!!",
        })
        return;
    }
    
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    res.json({
        msg: "Todo Created"
    })

})

app.get("/todos", async function(req,res){
     const todos=await todo.find();
     res.json({
        todos
     })
})

app.put("/completed",async function(req,res){
    const updatePayload=req.body;
    const ParsedPayload=updateTodo.safeParse(updatePayload);
    if(!ParsedPayload.success){
        res.status(411).json({
            msg: "Invalid input!!",
        })
        return;
    }
    await todo.update({
        _id:req.body.id
    },{
        completed: true
    })
    res.json({
        msg: "Todo Updated!!"
    })
})


app.listen(3000)