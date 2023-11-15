

export const InputTodo = (props) =>  {
    return(
        <div className="">
        <input value={props.todo} 
        onChange={(e)=> props.setTodo(e.target.value)}/>
        <button onClick={()=> props.addTask()} >Добавить</button>
        </div>
    )
}