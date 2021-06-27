import React from 'react'
import { TodoItems } from "./TodoItems";
export const Todos = (props) => {
    return (
        <div className="container">
            <h3 className=" my-3">Todos list</h3>
            { 
            (props.todos.length===0) ? "No Todos to display": 
            props.todos.map((todo)=>{
                return <TodoItems todo={todo} onDelete={props.onDelete} key={todo.sno}/>
            })
            }
  
        </div>
    )
}
