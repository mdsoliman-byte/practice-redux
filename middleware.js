// const fetch = require('node-fetch');
// const delayActionMiddleware = (store) => (next) => (action) => {
//     if (action.type === "todo/todoAdded") {
//         console.log("im delay function called")

//         setTimeout(() => {
//             next(action);
//         }, 5000);
//         return;
//     }
//     return next(action)
// }
// const fetchTodoMiddleware = (store) => (next) => async (action) => {
//     if (typeof action === "function") {

//      return  action(store.dispatch, store.getState)
//     }
//     return next(action)
// }
// module.exports = {
//     delayActionMiddleware,
//     fetchTodoMiddleware
// }
