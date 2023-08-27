import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPenToSquare, faTrash} from '@fortawesome/free-solid-svg-icons'
const TodoList = (props) => {
    const {task, toggleComplete, deleteTodo, editTodo} = props;
  return (
    <div className='todo-list'>
        <p className={`${task.completed ? 'completed' : ''}`} onClick={()=> toggleComplete(task.id)}>{task.task}</p>
        <div>
            <FontAwesomeIcon icon={faPenToSquare} onClick={()=> editTodo(task.id)}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faTrash} onClick={()=> deleteTodo(task.id)}></FontAwesomeIcon>
        </div>
    </div>
  )
}

export default TodoList