import React, { useState } from 'react'

const CreateTodoField = ({setTodos}) => {
    const [title, setTitle] = useState('')

    
    const addTodo = title =>{
        setTodos(prev => [
            ...prev,
            {
                id: new Date(),
                title,
                isComplited: false,
            },
        ])
        setTitle('')
    }

    return (
        <div className='flex items-center justify-between mb-4 mt-4  rounded-2xl
        bg-gray-200 border-2 px-5 py-3 w-full mb-5'>
            <input type='text' onChange={e => setTitle(e.target.value)
            } value={title}
            onKeyPress={e => e.key === 'Enter' && addTodo(title)}
            className='bg-transparent w-full border-none outline-none'
            placeholder='Название задачи'
            />
        </div>
    )
}

export default CreateTodoField