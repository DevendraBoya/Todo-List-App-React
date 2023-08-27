import React, {useState} from 'react'

const EditTodoForm = (props) => {
    const {updateTodo, task} = props;
    const [value, setValue] = useState(task.task)
    const submitFormHandler = (e) => {
        e.preventDefault();
        updateTodo(value, task.id);
        setValue("");
    }
    return (
        <form className='todo-form' onSubmit={submitFormHandler}>
            <input className='todo-input' value={value} onChange={(e)=>setValue(e.target.value)} type='text' placeholder='Upadte Task'></input>
            <button className="todo-btn" type='submit'>Update Task</button>
        </form>
    )
}

export default EditTodoForm