import { useState } from 'react'
import { TodoList } from './TodoList'
import { AddTodoForm } from './AddTodoForm'

const initialTodos: Todo[] = [
  {
    text: 'Jalan-jalan sama doi',
    complete: false,
  },
  {
    text: 'Lari keliling komplek',
    complete: true,
  },
]

function App () {
  const localStorageTodos = (): Todo[] => {
    let todos = initialTodos

    const localTodos = localStorage.getItem('todos')
    if (localTodos === null) {
      localStorage.setItem('todos', JSON.stringify(todos))
    } else {
      todos = JSON.parse(localStorage.getItem('todos')!)
    }

    return todos
  }

  const [todos, setTodos] = useState(localStorageTodos)

  const updateTodos = (todos: Todo[]): void => {
    setTodos(todos)
    localStorage.setItem('todos', JSON.stringify(todos))
  }

  const toggleTodo = (selectedTodo: Todo): void => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        }
      }
      return todo
    })
    updateTodos(newTodos)
  }

  const addTodo: AddTodo = (text: string) => {
    const newTodo = { text, complete: false }
    const newTodos = [...todos, newTodo]
    updateTodos(newTodos)
  }

  return (
    <>
      <AddTodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </>
  )
}

export default App