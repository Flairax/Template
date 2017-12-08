export const select = (todo) => {
    return{
        type: "SELECT_TODO",
        payload: todo,
    }
}

export const addTodo = (text) => {
    return{
        type: "ADD_TODO",
        payload: text,
    }
}