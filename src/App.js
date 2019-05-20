import React, {Component} from 'react';
import TodoItems from './components/todoItems/todoItems'
import AddItem from './components/addItems/addItem'
import './App.css';
class App extends Component {
  state = {
    items : [
    {id:1, name:'Hamza',age:23},
    {id:2, name:'Elyes',age:29},
    {id:3, name:'Morad',age:43},
    ]
  }
deleteItem = (id) => {
  let items = this.state.items;
  let i = items.findIndex(item => item.id === id)
  items.splice(i,1)
  this.setState({items:items})
}
addItem = (item) => {
  item.id = Math.random();
let items = this.state.items;
items.push(item);
this.setState({items:items})

}
render() {
  return (
    <div className="App container">
     <h1 className="text-center"> TodoList App</h1>
      <TodoItems items={this.state.items} deleteItem={this.deleteItem}/>
      <AddItem addItem={this.addItem}/>
      </div>
  )
}
}
export default App;
