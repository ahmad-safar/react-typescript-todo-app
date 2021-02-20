import { useEffect, useState, useRef } from 'react'

interface Props {
    addTodo: AddTodo
}

export const AddTodoForm = ({ addTodo }: Props) => {
    const [text, setText] = useState('')
    const addTodoInput = useRef<HTMLInputElement>(null)

    useEffect(() => {
        addTodoInput.current!.focus()
    }, [])

    return (
        <form className="flex">
            <input
                ref={addTodoInput}
                className="flex-1 rounded-md shadow-sm border border-gray-300"
                type="text"
                value={text}
                onChange={e => {
                    setText(e.target.value)
                }}
            />
            <button className="inline-flex justify-center ml-4 py-2.5
            px-4 border border-transparent shadow-sm text-sm font-medium
            rounded-md text-white bg-blue-600 hover:bg-blue-700
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                type="submit"
                onClick={e => {
                    e.preventDefault()
                    addTodo(text)
                    setText('')
                    addTodoInput.current!.focus()
                }}>Add Todo</button>
        </form>
    )
}