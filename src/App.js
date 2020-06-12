import React, { Component } from 'react';
import Todos from './Todos'

class App extends Component {
  state = {
    todos: [
      { id: 1, content: 'buy some milk' },
      { id: 2, content: 'play mario kart' }
    ]
  }
deleteTodo = (id) => {
const todos = this.state.todos.filter(todo => { //if this todo is not = to id on 11, we will return true, if it's false, it will filter out and remove 
  return todo.id !== id  //return true or false here, true to remove, false to keep
}) 
this.setState({
  todos: todos
})
}


  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
      </div>
    )
  };
}

  export default App;
