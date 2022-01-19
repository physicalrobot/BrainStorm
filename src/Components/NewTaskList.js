import React, { useState } from "react";
import '../App.css';

function NewTaskList({ handleAddTask, tasks }) {

    const [text, setText] = useState('');


    function handleSubmit(e) {
        e.preventDefault();

        handleAddTask({ text });
        setText('');

    }


    return (

        < form className="newform" onSubmit={handleSubmit}  >

            <br></br>
            <input

                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <br></br><br></br>
            <input className='todobutton' type="submit" value="Add task" />
        </form>
    );
};

export default NewTaskList;