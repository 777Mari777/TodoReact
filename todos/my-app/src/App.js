import React, { useState } from "react";
import { Header } from "./components/Header";
import { InputTodo } from "./components/InputTodo";
import { TaskTodo } from "./components/TaskTodo";
import './App.css';

function App() {
    const [todo, setTodo] = useState('')
    const [tasks, setTasks] = useState([])
    const [done, setDone] = useState('')

    let copiTasks = tasks

    const addTask = () => {
      const taskTodo = {
        id : Math.random(),
        value: todo,
        status: false,
      }
      let newTask = [taskTodo, ...tasks]
      setTasks(newTask)
      setTodo("")
    }

    const deleteTask = (id) => {
      let del = tasks.filter(e => e.id !== id)
      setTasks(del)
    }

    const toggleTask = (id) => {
      let toggle = tasks.map(e => e.id === id ? {...e, status : !e.status} : {...e})
      setTasks(toggle)
    }

    switch (done) {
      case "All":
        copiTasks = tasks
      break;
      case "Activ":
        copiTasks = tasks.filter(e => e.status === false)
      break;
      case "completes":
        copiTasks = tasks.filter(e => e.status === true)
    default:
      break;
    }


    const taskTodoList = copiTasks.map(e => <TaskTodo id ={e.id}
                                          value={e.value}
                                          status={e.status}
                                          deleteTask={deleteTask}
                                          toggleTask={toggleTask}/>)
  return (
    <div className="App">
      <Header/>
      <InputTodo addTask={addTask} todo={todo} setTodo={setTodo}/>
      {taskTodoList}
      <div className="bottom">
        <button onClick={()=> setDone("All")}>Все задачи</button>
        <button onClick={()=> setDone("Activ")}>Активные</button>
        <button onClick={()=> setDone("completes")}>Выполненые</button>
      </div>
    </div>
  );
}

export default App;
