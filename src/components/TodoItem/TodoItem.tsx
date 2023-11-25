import React from 'react'
import { useDispatch } from "react-redux"
import { deleteTodoActionCreator, toggleCheckedActionCreator } from "../../redux/actions";
import { TodoItemInterface } from "../../types";
import "./TodoItem.css"

interface TodoItemProps {
  todo: TodoItemInterface
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const dispatch = useDispatch();

  const handleTodoDelete = () => {
    dispatch(deleteTodoActionCreator(todo.id))
  }

  const toggleChecked = () => {
    dispatch(toggleCheckedActionCreator(todo.id))
  }

  return (
    <li className={`todo-item ${todo.isChecked && "todo-item--checked"}`} onClick={toggleChecked}>
      <p className={`todo-text ${todo.isChecked && "todo-text--checked"}`}>{todo.text}</p>
      <button className="todo-delete-btn" onClick={handleTodoDelete}>X</button>
    </li>
  )
}

export default TodoItem