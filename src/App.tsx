import React from 'react'
import { useSelector } from "react-redux"
import { RootState } from "./redux/store"
import TodoForm from "./components/TodoForm/TodoForm"
import TodoItem from "./components/TodoItem/TodoItem"
import "./App.css";

const App = () => {
  const todos = useSelector((state: RootState) => state.todos);

  return (
    <div className="main-container">
      <h3 className="todo-title">TODO LIST</h3>
      <TodoForm />
      <ul className="todos-container">
        {todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
      </ul>
    </div>
  )
}

export default App