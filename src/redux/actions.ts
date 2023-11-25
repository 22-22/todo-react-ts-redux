export const addTodoActionType = "ADD-TODO";
export const deleteTodoActionType = "DELETE-TODO";
export const toggleCheckedActionType = "TOGGLE-CHECKED";

export const addTodoActionCreator = (todo: string) => {
    return {
        type: addTodoActionType,
        payload: todo
    }
}

export const deleteTodoActionCreator = (id: string) => {
    return {
        type: deleteTodoActionType,
        payload: id
    }
}

export const toggleCheckedActionCreator = (id: string) => {
    return {
        type: toggleCheckedActionType,
        payload: id
    }
}
