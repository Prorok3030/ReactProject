import React from 'react'
import { FaCheck } from "react-icons/fa6";
import { TiDeleteOutline } from "react-icons/ti";
import Check from './Check'


const TodoItem = ({todo, changeTodo, removeTodo}) => {
    return(
        <div className='flex items-center justify-between mb-4 rounded-2xl
        bg-gray-200 p-5 w-full'>
            <button
                className='flex items-center'
                onClick={() => changeTodo(todo.id)}
            >
                <Check isComplited={todo.isComplited}/>
                {todo.title}
            </button>
            <button onClick={() => removeTodo(todo.id)}>
                <TiDeleteOutline size={28} className='text-orange-500'/>
            </button>
        </div>
    )
}

export default TodoItem

