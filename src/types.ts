export interface TodoItemInterface {
    id: string,
    text: string,
    isChecked: boolean,
}

export interface TodoStateInterface {
    todos: TodoItemInterface[]
}

export interface TodoActionType {
    type: string,
    payload: string
}