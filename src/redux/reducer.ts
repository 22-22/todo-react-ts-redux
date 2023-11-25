import { v4 as uuidv4 } from 'uuid';
import { addTodoActionType, deleteTodoActionType, toggleCheckedActionType } from "./actions";
import { TodoActionType, TodoStateInterface } from "../types";

const initialState = {
    todos: []
}

export const todoReducer = (state: TodoStateInterface = initialState, action: TodoActionType) => {
    switch (action.type) {
        case addTodoActionType: return {
            // ВОПРОС: если бы у меня был массив строк, я могла бы использовать и concat, и spread? что лучше или одинаково? 
            // ...state, todos: state.todos.concat(action.payload)
            // ...state, todos: [...state.todos, action.payload]
            ...state, todos: [...state.todos, {
                id: uuidv4(),
                text: action.payload,
                isChecked: false
            }]
        }
        case deleteTodoActionType: {
            // ВОПРОС: как тут лучше вырезать, через filter или splice, или можно и так, и так?
            // const updatedTodos = [...state.todos];
            // const idxToDelete = updatedTodos.findIndex((elem) => elem.id === action.payload);
            // updatedTodos.splice(idxToDelete, 1);
           
            const updatedTodos = state.todos.filter((elem) => elem.id !== action.payload);
            return {
                ...state,
                todos: updatedTodos
            }
        }
        case toggleCheckedActionType: {
            const updatedTodos = state.todos.map((elem) => {
                if (elem.id === action.payload) {
                    elem.isChecked = !elem.isChecked
                }
                return elem;
            })
            return {
                ...state,
                todos: updatedTodos
            }
        }
        default: return state;
    }
}