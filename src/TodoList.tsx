import { TodoListItem } from './TodoListItem'

interface Props {
    todos: Todo[]
    toggleTodo: ToggleTodo
}

export const TodoList = ({ todos, toggleTodo }: Props) => {
    return (
        <ul>
            {todos.map(todo => (
                <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} />
            ))}
        </ul>
    )
}