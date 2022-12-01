const fetch = require('node-fetch')
const fetchTodo = async (dispatch, getState) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    dispatch({
        type: "todo/todoLoaded",
        payload: data
    });
    console.log(`number of todo in here ${getState().todo.length}`)
}

module.exports = {
    fetchTodo
}