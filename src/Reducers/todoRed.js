const initialState =[
    {
        id: 123,
        text: 'WatcfafafaffahSome',
        completed: false,
    },
    {
        id: 321,
        text: 'WatcfafashSome',
        completed: false,
    },
    {
        id: 143,
        text: 'WatcafafahSome',
        completed: false,
    },
];

const todos = (state = initialState, action) => {
    switch (action.type){
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false,
                }
            ];
        case 'TOGGLE_TODO':
            return state.map(todo => {
                if(todo.id !== action.id){
                    return todo;
                }
                return{
                    ...todo,
                    completed: !todo.completed
                };
            });
        default:
            return state;
    }
}

export default todos;