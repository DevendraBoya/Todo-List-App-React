import React, {useState} from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import {v4 as uuidv4} from 'uuid';
import EditTodoForm from './EditTodoForm';
uuidv4();

const TodoWrapper = (prop) => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, {
      id: uuidv4(),
      task: todo,
      completed: false,
      isEditing: false
    }])
    console.log(todos);
  }
  const toggleComplete = (id) => {
    setTodos(todos.map( todo => {
        if (todo.id === id) {
          return ({ ...todo, completed: !todo.completed })
        } else {
          return todo;
        }
    })
    )
  }
  const deleteTodo = (id) => {
    setTodos(
      todos.filter((todo)=>{return todo.id !== id})
    )
  }
  const editTodo = (id) => {
    setTodos(todos.map( todo => {
      if (todo.id === id) {
        return ({ ...todo, isEditing: true })
        } else {
          return todo;
        }
      })
    )
  }
  const updateTodo = (updatedTask, id) => {
    setTodos(todos.map( todo => {
      if (todo.id === id) {
        return ({ ...todo, isEditing: false, task: updatedTask  })
        } else {
          return todo;
        }
      })
    )
  }
  return (
    <div className='todo-wrapper'>
      <h1>Things need to do!</h1>
      <TodoForm addTodo={addTodo}/>
      {
       todos.length > 0 && todos.map((todo, index) => {
          if(todo.isEditing) {
            return (<EditTodoForm task={todo} updateTodo={updateTodo}/>
            )
          } else {
            return (<TodoList 
              task={todo} 
              key={index} 
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
              editTodo= {editTodo}/>)
          }
        })
      }
      
    </div>
    
  )
}

export default TodoWrapper