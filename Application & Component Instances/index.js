const RootComponent = {
    /* options */
}

const app = Vue.createApp(RootComponent)
const vm = app.mount('#app')

// Root component
// - todoList
//     -- todoItem
//         ---deleteTodoButton
//         ---EditTodoButton
//     -- todoListFooter
//         --- ClearTodoButton
//         --- TodoListStatistics

// vm = View Model