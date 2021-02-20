import { TodoListItem } from './TodoListItem'

interface Props {
    todos: Todo[]
    toggleTodo: ToggleTodo
}

export const TodoList = ({ todos, toggleTodo }: Props) => {
    if (todos.length === 0) return null
    return (
        <div className="block mt-4 prose lg:prose-xl">
            <ul>
                {todos.map(todo => (
                    <TodoListItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
                ))}
            </ul>
        </div>
    )
}