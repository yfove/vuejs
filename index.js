// text interpolation
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})

// bind element attributes
var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
})

app.message = 'I have changed the data'