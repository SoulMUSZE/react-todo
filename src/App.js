import React, { Component } from 'react'
import './App.css';
import TodoItem from './TodoItem'
import TodoForm from './TodoForm'
// import { listenerCount } from 'events';


let count = 3

class App extends Component {
  state = {
    todos: [
      { id: 1, task: 'Walk the dog', done: false },
      { id: 2, task: 'Water the flower', done: false }
    ]
  }

  updateToDo = newTask => {
    const toDoCopy = [...this.state.todos]
    // let toDoLength = this.state.todos.length

    // generate increasing unique values for task id

    const taskObject = { id: count++, task: newTask, done: false }
    // console.log(count)
    toDoCopy.push(taskObject)
    this.setState({ todos: toDoCopy })
  }

  handleClick = (id) => {
    // console.log(this.state.todos)

    const toDoCopy = JSON.parse(JSON.stringify(this.state.todos))
    const clickedObject = toDoCopy.find(item => item.id === id)
    clickedObject.done = !clickedObject.done

    // const updatedObject = {
    //   ...clickedObject,
    //   done: true
    // }

    // for (let i = 0; i < toDoCopy.length; i++) {
    //   if (clickedObject.id === toDoCopy[i].id) {
    //     toDoCopy.splice(i, 0, clickedObject)
    //   }
    // }
    // this.forceUpdate()
    this.setState({
      todos: toDoCopy
    })


  }

  deleteItem = () => {
    const toDoCopy = [...this.state.todos]
    const filteredToDoCopy = toDoCopy.filter(task => task.done === false);
    this.setState({ todos: filteredToDoCopy })
    console.log(filteredToDoCopy)

    
  }

/*   componentWillUnmount() {
    document.removeEventListener("click", this.handleClick);
  } */

  render() {
    
    console.table(this.state.todos)

    return (
      <>
        <div className='title'> To Do List</div>
        < div className='box' >

          {this.state.todos.map((item, index) =>

            <div key={item.id}>
              <TodoItem 
                index={index}
                id={item.id} 
                task={item.task} 
                done={item.done} 
                handleClick={this.handleClick} 
                />
            </div>

          )}

          < TodoForm updateToDo={this.updateToDo} deleteItem={this.deleteItem} />

        </div >
      </>
    )
  }
}

export default App;
