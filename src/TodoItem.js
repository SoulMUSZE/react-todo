import React from 'react'


const TodoItem = ({ index, id, task, done, handleClick }) => {
    
    //if task is not done, return div
    if (!done) {
        return (
        <div>
            <span>{index+1}.{task},{done}</span>
            <input value={done} onClick={() => { handleClick(id) }} type="checkbox"></input>
        </div>
        );
    } else {
        // return strikethrough when task is done
        return (
        <div>
            <strike className='strikecolor'>{index+1}.{task},{done}</strike>
            <input value={done} onClick={() => { handleClick(id) }} type="checkbox"></input>
        </div>
        );
    }
}

export default TodoItem