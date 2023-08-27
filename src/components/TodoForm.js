import React, {useState} from 'react'

const TodoForm = (props) => {
    const [value, setValue] = useState('')
    const submitFormHandler = (e) => {
        e.preventDefault();
        props.addTodo(value);
        setValue("");
    }
    return (
        <form className='todo-form' onSubmit={submitFormHandler}>
            <input className='todo-input' value={value} onChange={(e)=>setValue(e.target.value)} type='text' placeholder='Enter What You want to do today?'></input>
            <button className="todo-btn" type='submit'>Add Task</button>
        </form>
    )
}

export default TodoForm