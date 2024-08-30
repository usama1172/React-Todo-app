import React from 'react'
import tick from '../assets/tick.png'
import not_tick from '../assets/not_tick.png'
import del from '../assets/delete.png'
const TodoItems = ({text, id, iscomplete, deleteTodo, toggle}) => {
  return (
    <div className='flex items-center gap-2 my-3'>
<div onClick={()=>{toggle(id)}} className='flex flex-1 gap-1 items-center cursor-pointer'>
    <img className='w-6' src={iscomplete ? tick : not_tick}/>
    <p className={`text-slate-700 ml-4 text-[17px] decoration-slate-500 ${iscomplete ? "line-through" : ""}`}>{text}</p>
</div>
<img onClick={()=>{deleteTodo(id)}} className='w-4 cursor-pointer' src={del}/>
    </div>
  )
}

export default TodoItems
