import React, { useState } from 'react';

const TasksDisplay = (props) => {
    const [id, setId] = useState(-1);
    const handleClick = (e) => props.onCheck(e.target.value);
    const handleDelete = (e) => props.onDelete(e.target.value);
    
    return (
        <div className = "container">
            { props.task.map((item,index) => 
            <div className="innercontainer" key={index}>
                <label className="tasklabel"htmlFor={index} style={item.completed==true?{textDecoration:"line-through"}: {backgroundColor: "yellow"}}>{item.content}</label>
                <input type="checkbox" className="check"id={index} name={index} value={item.content} onChangeCapture={ (e) => handleClick(e) }/>
                <button type="button" className='dltbtn' onClickCapture={(e) => handleDelete(e) } value={item.content}>Delete</button>
            </div>) }
            
        </div>
        
    )
}
export default TasksDisplay;