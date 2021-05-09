// Create components with props


// child component
Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>This is a todo</li> '
})

// parent component
var app = new Vue({
    el: '#app',
    data: {
        groceryList: [
            { id: 0, text: 'Vegetables' },
            { id: 1, text: 'Cheese' },
            { id: 2, text: 'Whatever else humans are supposed to eat' }
        ]
    }
})

// we need to learn how to pass stuff from parent into the child component