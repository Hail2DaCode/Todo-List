import React, { useState } from 'react';

const TasksForm = (props) => {
    const [task, setTask] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onNewTask(task);
        setTask({content:"", completed: false});
    };

    return (
        <form onSubmit= { handleSubmit }>
            <input className="addinput"type="text" name="newtask" placeholder='Please write a new task' onChange={ (e) => setTask({content: e.target.value, completed: false})} value= {task.content}></input>
            <button className = "addbtn" type="submit">Add</button>

        </form>
    )
}
export default TasksForm;