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
    {
        id: 133,
        text: 'WatcafafahSome',
        completed: false,
    },
];

let idCount = 0;

const todos = (state = initialState, action) => {
    switch (action.type){      
        case 'ADD_TODO':
        {
            return [
                ...state,
                {
                    id: idCount++,
                    text: action.payload,
                    completed: false
                }
            ];
            
        }
            

        default:
            return state;
    }
}

export default todos;