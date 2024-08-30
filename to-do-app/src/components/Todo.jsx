import React, { useEffect, useRef, useState } from 'react'
import todo_icon from '../assets/todo_icon.png'
import TodoItems from './TodoItems'

const Todo = () => {

  const inputRef = useRef();
  const [todoList, setTodoList] = useState(localStorage.getItem("store") ? JSON.parse(localStorage.getItem("store")) : [])

  const add=()=>{
    const inputText = inputRef.current.value.trim()
    if (inputText === ""){
      return null
    }
    else{
    const newTodo = {
      id: Date.now(),
      text: inputText,
      iscomplete: false
    }
    setTodoList((prev)=>{
      return [...prev, newTodo]
      
    })
  }
  inputRef.current.value = ""
}

const deleteTodo =(id)=>{
      setTodoList((prev)=>{
       return prev.filter((todo)=> todo.id !== id)
      })
}

const toggle=(id)=>{
      setTodoList((prev)=>{
        return prev.map((item)=>{
          if(item.id === id){
            return{...item, iscomplete : !item.iscomplete}
          }
          return item
        })
      })
}
useEffect(()=>{
  localStorage.setItem("store", JSON.stringify(todoList))
},[todoList])




  return (
    <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>
    {/* -----------Title--------- */}
    <div className='flex mt-4 items-center gap-2'>
        <img className='w-8' src={todo_icon}/>
        <h1 className='text-xl font-semibold'>ToDo List</h1>
    </div>
    {/* -----------Input--------- */}
    <div className='flex bg-gray-200 rounded-full my-7 items-center'>
        <input
        ref={inputRef}
        className='bg-transparent border-0 outline-none placeholder-slate-600 pl-6 pr-2 flex-1 h-14'
        type='text'
        placeholder='Add Your Task'
        />
        <button onClick={add} className='border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer'>Add +</button>
    </div>
    {/* -----------Todo items--------- */}

    <div>
      {todoList.map((item, index)=>{
        return <TodoItems text={item.text} key={index} id={item.id} iscomplete={item.iscomplete} deleteTodo = {deleteTodo} toggle = {toggle}/>
      })}
    </div>

    </div>
  )
}

export default Todo
