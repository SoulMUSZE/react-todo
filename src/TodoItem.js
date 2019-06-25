import React from 'react'


const TodoItem = ({ id, task, done, handleClick }) => {
    
    //if task is not done, return div
    if (!done) {
        return (
        <div>
            <span>{id}.{task},{done}</span>
            <input onClick={() => { handleClick(id) }} type="checkbox"></input>
        </div>
        );
    } else {
        // return strikethrough when task is done
        return (
        <div>
            <strike className='strikecolor'>{id}.{task},{done}</strike>
            <input onClick={() => { handleClick(id) }} type="checkbox"></input>
        </div>
        );
    }
}

export default TodoItem