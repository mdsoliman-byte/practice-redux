const { createStore, applyMiddleware } = require("redux");
const { delayActionMiddleware, fetchTodoMiddleware } = require("./middleware")

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
// store 
const store = createStore(todoReducer, applyMiddleware(delayActionMiddleware, fetchTodoMiddleware));
// Store Subscribe 
store.subscribe(() => {
    console.log(store.getState());
})
// Action Dispatch 
// store.dispatch({
//     type: "todo/todoAdded",
//     payload: "Hello I Want to add your todo item"
// })
store.dispatch({
    type: "todo/fetchTodo",

})