// p4
toDoList = [
    {todo: "clean my room", status: "complete"},
    {todo: "eat dinner", status: "complete"},
    {todo: "complete this lab", status: "started"},
    {todo: "travel the world", status: "started"}
]

completedTodos = []

// p5
for (const todo of toDoList) {
    if (todo.status === "complete") {
        completedTodos.push(todo)
    }
}
