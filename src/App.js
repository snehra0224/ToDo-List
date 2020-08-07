import React, {Component} from 'react';
import './App.css';
import Header from './Header'
import Items from './Components/Items';
import AddEntry from './Components/AddEntry';
import {v4 as uuidv4} from "uuid";

class App extends Component {
  state = {
    todos: [
      {
        id: uuidv4(), 
        title: 'Return videos',
        completed: false
      },
      {
        id: uuidv4(), 
        title: 'Read book',
        completed: false
      },
      {
        id: uuidv4(), 
        title: 'Buy milk',
        completed: false
      }
    ]
  }

  toggleComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    })})
  }

  delete = (id) => {
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]});
  }

  addEntry = (title) => {
    const newTodo = {
      id: uuidv4(), 
      title: title,
      completed: false
    }
    this.setState({todos: [...this.state.todos, newTodo]});
  }

  render(){
    return (
      <div className="App">
        <Header />
        <AddEntry addEntry = {this.addEntry}/>
        <Items todos = {this.state.todos} toggleComplete = {this.toggleComplete} delete = {this.delete}/>
      </div>
    );
  }
}

export default App;
