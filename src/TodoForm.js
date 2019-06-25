import React, { Component } from 'react'

class TodoForm extends Component {

    state = {
        text: ''
    }

    handleSubmit = event => {
        event.preventDefault()
        // alert(`Your new task has been submitted:${this.state.text}  `)
        this.props.updateToDo(this.state.text)
    }

    handleInput = event => {
        this.setState({ text: event.target.value })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleInput}
                        value={this.state.text} />
                    <input type="submit" />
                </form>
                <div><button onClick={() => this.props.deleteItem()}>Delete</button> </div>
                {/* why do we need (e) in onClick?  */}
            </div>
        )
    }
}

export default TodoForm;
