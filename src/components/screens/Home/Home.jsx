import React, { useState } from 'react'
import TodoItem from './item/TodoItem'
import CreateTodoField from './CreateTodoField/CreateTodoField'
import Navbar from '../../layout/NavBar'

const data =  [
    {
        id: 'fdvnkl22',
        title: 'Test name1',
        isComplited: false,
    },
    {
        id: 'fdvnkl23',
        title: 'Test name2',
        isComplited: false,
    },
    {
        id: 'fdvnkl24',
        title: 'Test name3',
        isComplited: false,
    },
]

const Home = () => {
    const[todos, setTodos] = useState(data)

    const changeTodo = (id) => {
        const copy = [...todos]
        const current = copy.find(t => t.id === id)
        current.isComplited = !current.isComplited
        setTodos(copy)
    }

    const removeTodo = (id) => {
        setTodos([...todos].filter(t => t.id !== id))
    }

    return(
        <div>
            <Navbar />
            <div className=" bg-cyan-500 border-cyan-500 border-8 rounded-2xl w-3/12 mx-auto my-4" >
                <CreateTodoField setTodos={setTodos} />
                {todos.map(todo => (
                    <TodoItem
                    key={todo.id}
                    todo={todo}
                    changeTodo={changeTodo}
                    removeTodo={removeTodo} />
                ))}
            </div>
        </div>
    )
}

export default Home

