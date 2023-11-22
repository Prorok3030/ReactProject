import React from 'react'
import { FaCheck } from "react-icons/fa6";
import '../../../../todo.css'

const Check = ({isComplited}) => {
    return(
        <div className='border-2 rounded-lg border-pink-400
        w-6 h-6 mr-3 flex items-center justify-center'>
            {isComplited &&
            <FaCheck size={16} className='text-orange-500'/>
            }
        </div>
    )
}

export default Check

