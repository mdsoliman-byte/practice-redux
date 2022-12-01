// Initial State 
const initialState = {
    todo: []
}


// Reducer 
const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case "todo/todoAdded":
            return {
                ...state,
                todo: [
                    ...state.todo,
                    {
                        title: action.payload
                    }
                ]
            }
        case "todo/todoLoaded":
            return {
                ...state,
                todo: [
                    ...state.todo,
                    ...action.payload
                ]
            }


        default:
            break;
    }
}