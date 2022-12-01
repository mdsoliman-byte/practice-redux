const fetch = require('node-fetch');
const delayActionMiddleware = (store) => (next) => (action) => {
    if (action.type === "todo/todoAdded") {
        console.log("im delay function called")

        setTimeout(() => {
            next(action);
        }, 5000);
        return;
    }
    return next(action)
}
const fetchTodoMiddleware = (store) => (next) => async (action) => {
    if (action.type === "todo/fetchTodo") {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data = await response.json();
        store.dispatch({
            type: "todo/todoLoaded",
            payload: data
        });
        console.log(`number of todo in here ${store.getState().todo.length}`)
        return
    }
    return next(action)
}
module.exports = {
    delayActionMiddleware,
    fetchTodoMiddleware
}
