import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { addTodoActionCreator } from "../../redux/actions";
import "./TodoForm.css";

const Form: React.FC = () => {
    const dispatch = useDispatch();

    const [text, setText] = useState("");

    const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        if (text) {
            dispatch(addTodoActionCreator(text));
            setText("");
        } else {
            alert("Please write something!")
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input className="todo-submit-input" type="text" value={text} onChange={(evt) => setText(evt.target.value)} />
            <button className="todo-submit-btn" type="submit">Add</button>
        </form>
    )
}

export default Form