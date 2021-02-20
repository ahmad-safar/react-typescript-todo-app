import { useState } from 'react'
import { TodoList } from './components/TodoList'
import { AddTodoForm } from './components/AddTodoForm'
import { v4 as uuid } from 'uuid'

const initialTodos: Todo[] = [
  {
    id: uuid(),
    text: 'Jalan-jalan sama doi',
    complete: false,
  },
  {
    id: uuid(),
    text: 'Lari keliling komplek',
    complete: true,
  },
]

function App () {
  const localStorageTodos = (): Todo[] => {
    let todos = initialTodos

    const localTodos = localStorage.getItem('todos')
    if (localTodos === null || localTodos === '[]') {
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
    const newTodo = {
      id: uuid(),
      text,
      complete: false
    }
    const newTodos = [newTodo, ...todos]
    if (text !== '') updateTodos(newTodos)
  }

  return (
    <>
      <div className="font-sans text-gray-900 antialiased">

        <div className="min-h-screen flex flex-col sm:justify-center items-center py-6 sm:pt-0 bg-gray-100">
          <article className="prose lg:prose-xl mt-4">
            <h2>Simple Todo App</h2>
          </article>

          <div className="w-full sm:max-w-md mt-6 px-6 py-5 bg-white shadow-md overflow-hidden sm:rounded-lg">
            <AddTodoForm addTodo={addTodo} />
            <TodoList todos={todos} toggleTodo={toggleTodo} />
            <button className="inline-flex justify-center mt-4 py-2.5
            px-4 border border-transparent shadow-sm text-sm font-medium
            rounded-md text-white bg-gray-600 hover:bg-gray-700
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              onClick={e => {
                updateTodos([])
              }}>Reset Todo</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App