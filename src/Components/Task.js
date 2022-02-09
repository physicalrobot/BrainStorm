import React, { useState, useEffect } from 'react';
import { v4 as uuid } from "uuid";


function Task({ text, complete, deleteTask, value, task }) {

    const [color, setColor] = useState('white');
    const [dtext, setDtext] = useState('');



    function handleMouseOver() {
        setColor('turquoise')
    }

    function handleClick() {


        fetch(`http://localhost:4000/tasks/${task.id}`, {
            method: 'DELETE'
        })
            .then((r) => r.json(),
                deleteTask(task));
    }



    return (


        <div className='ToDoList' >


            <label
                style={{ color: color }}
                onMouseEnter={handleMouseOver}
                onMouseOut={() => setColor('white')}
                onClick={handleClick}

            >
                {text}
            </label>




        </div>

    )
}


export default Task;