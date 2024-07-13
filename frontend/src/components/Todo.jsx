import { useState } from "react"

export function Todo({todos}){
    // const [todoList, setTodoList] = useState(todos);
    return(
        <div>
            {todos.map(function(todo){
                return <div>
                    <h1>{todo.title}</h1>
                    <h2>{todo.description}</h2>
                    <button onClick={()=>
                        fetch("http://localhost:3000/completed",{
                            method:"PUT",
                            body: JSON.stringify({
                                id: todo._id,
                            }),
                            headers:{
                                "content-type":"application/json"
                            }
                        })
                        .then(async function(res){
                            const json=await res.json();
                            alert("Todo updated!");
                        })
                    }>{todo.completed == true ? "completed" : "Mark as Done"}</button>
                </div>
            })}
        </div>
    )
}