import React from 'react'


const TodoItem = ({ id, task, done, handleClick }) => {
    //if done is true, return div

    if (!done) {
        return (
        <div>
            <span>{id}.{task},{done}</span>
            <input onClick={() => { handleClick(id) }} type="checkbox"></input>
        </div>
        );
    } else {
        return (
        <div>
            <strike className='strikecolor'>{id}.{task},{done}</strike>
            <input onClick={() => { handleClick(id) }} type="checkbox"></input>
        </div>
        );
    }
    //else return strick div

}

export default TodoItem