// p4
toDoList = [
    {todo: "clean my room", status: "complete"},
    {todo: "eat dinner", status: "complete"},
    {todo: "complete this lab", status: "started"},
    {todo: "travel the world", status: "started"}
]

completedTodos = []

// p5
for (const item of toDoList) {
    if (item.status === "complete") {
        completedTodos.push(item)
    }
}

// p6
for (const item of completedTodos) {
    const {todo, status} = item
    console.log(todo)
}