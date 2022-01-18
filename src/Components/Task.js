import React, { useState, useRef } from 'react';
import { v4 as uuid } from "uuid";
import { css, jsx } from '@emotion/react';
import Checkbox from './Checkbox';


function Task({ text, complete, deleteTask, setCheck, value }) {



    const boxRef = React.useRef(null);

    const [color, setColor] = useState('black');


    function handleMouseOver() {
        setColor('red')
    }

    function handleClick() {
        deleteTask(text);
    }



    return (

        <div>

            <Checkbox
                key={uuid()}
                value={value} setCheck={setCheck} />


            <label style={{ color: color }}
                onMouseEnter={handleMouseOver}
                onMouseOut={() => setColor('black')}
                onClick={handleClick}

            >
                {text}
            </label>

        </div>
    )
}


export default Task;