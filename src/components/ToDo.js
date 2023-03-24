import React from 'react'

import {BiEdit} from "react-icons/bi"
import {AiFillDelete} from "react-icons/ai"

const ToDo = ({Text, UpdateMode, deleteToDo}) => {
  return (
    <div className='todo'>
        <div className="text">{Text}</div>
        <div className="icons">
            <BiEdit className='icon' onClick={UpdateMode} />
            <AiFillDelete className='icon' onClick={deleteToDo} />
        </div>
    </div>
  )
}

export default ToDo