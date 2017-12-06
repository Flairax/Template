const todos = (state = null, action) => {
    switch (action.type){
        case 'SELECT_TODO':
            return action.payload;
    
        default:
            return state;
    }
}

export default todos;