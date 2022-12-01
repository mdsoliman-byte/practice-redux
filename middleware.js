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

module.exports = {
    delayActionMiddleware
}
