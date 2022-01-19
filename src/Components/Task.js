import React, { useState } from 'react';
import { v4 as uuid } from "uuid";
// import { css, jsx } from '@emotion/react';
import Checkbox from './Checkbox';


function Task({ text, complete, deleteTask, value, tasks }) {




    const [color, setColor] = useState('white');


    function handleMouseOver() {
        setColor('turquoise')
    }

    function handleClick() {
        deleteTask(text);

    }

    const [check, setCheck] = useState(false);




    function handleCheck() {
        setCheck(!check);
    }

    return (


        <div className='ToDoList' >

            {/* <Checkbox
                key={uuid()}
                checkstatus={check} handleCheck={handleCheck} tasks={tasks} /> */}

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