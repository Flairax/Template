export const select = (todo) => {
    alert("Selected todo is: " + todo.id);
    return{
        type: "TODO_SELECT",
        payload: todo,
    }
}