import React,{useState} from 'react'

const TodoForm = (props)=>{
    const[input,setInput] = useState("")

    const handleChange = (e)=>{
        setInput(e.target.value)
    }
    const handleSubmit = (e)=>{
        e.preventDefault();

        props.onSubmit({
            id:Math.floor(Math.random() * 10000),
            text:input ,
            complete:false
        })
        setInput("");    
    }
    return(
        <div className='container text-center'>
            <h2 className='text-center'>Todo List</h2>
        <form onSubmit={handleSubmit}>
            <input className='mx-3 mt-5 mb-3'
            placeholder='Add Task For Today 😃'
            value={input}
            onChange={handleChange}
            name='text'/>
            <button className='btn btn-success mb-2' onClick={handleSubmit}>Add todo</button>
        </form>
        </div>
    )
}

export default TodoForm;