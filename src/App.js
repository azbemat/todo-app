//import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header";  // rfc
import { Footer } from "./MyComponents/Footer";  // rafc   
import { Todos } from "./MyComponents/Todos";
import { AddTodo } from "./MyComponents/AddTodo";
import { About } from "./MyComponents/About";
import React, { useState, useEffect} from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {

  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo = [];
  }else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  // DELETE
  const onDelete = (todo)=>{
    console.log("I am deleting todo:", todo);

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));

    localStorage.setItem("todos", JSON.stringify(todos));
  }

  // ADD
  const addTodo = (title, desc)=>{
    console.log("I am adding todo:", title, desc)
    let sno;
    if(todos.length === 0){
      sno = 1;
    }else{
      sno = todos[todos.length-1].sno + 1; 
    }
    const myTodo={
      sno: sno,
      title: title,
      desc: desc
    }

    setTodos([...todos, myTodo]);
    console.log(myTodo);

  }

  const [todos, setTodos] = useState(initTodo);

  // whenever my todos change use this effect
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <>
    <Router>
      <Header title="Todos List" searchBar={false} />

      <Switch>
          
          <Route exact path="/" render={()=>{
            return(
              <>
                <AddTodo addTodo={addTodo}/>
                <Todos todos={todos} onDelete={onDelete}/>
              </>
            )
          }}>  
          </Route>

          <Route exact path="/about">
            <About />
          </Route>

      </Switch>

      <Footer/>
    </Router>
    </>
  );
}

export default App;
