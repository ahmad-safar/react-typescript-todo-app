interface Props {
    todo: Todo
    toggleTodo: ToggleTodo
}

export const TodoListItem = ({ todo, toggleTodo }: Props) => {
    return (
        <label className="flex items-center"
            style={{ textDecoration: todo.complete ? 'line-through' : undefined }}
        >
            <input id="remember_me"
                type="checkbox"
                className="h-4 w-4 border-gray-300 rounded"
                defaultChecked={todo.complete}
                onClick={() => toggleTodo(todo)}
            />
            <span className="ml-2 text-gray-600">{todo.text}</span>
        </label>
    )
}   