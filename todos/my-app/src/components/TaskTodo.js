
export const TaskTodo = (props) => {
    return(
        <div key={props.id} class="wrapper">
            <input type={"checkbox"} onClick={() => props.toggleTask(props.id)} defaultChecked={props.status}></input>
            <p style={props.status ? {textDecoration:"line-through"} : {textDecoration: "none"}}>{props.value}</p>
            <button onClick={() => props.deleteTask(props.id)} >X</button>
        </div>
    )
}