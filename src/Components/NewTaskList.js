import React, { useState } from "react";
import '../App.css';

function NewTaskList({ handleAddTask, tasks }) {

    const [text, setText] = useState();


    function handleSubmit(e) {
        e.preventDefault();
        const taskData = {
            text: text
        };

        // fetches data and sets it to
        fetch("http://localhost:4000/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(taskData),
        })
            .then((r) => r.json())
            .then(taskData => {
                handleAddTask(taskData)
                setText('')
            })
    }


    return (

        < form className="newform" onSubmit={handleSubmit}  >
            <br></br>
            <input
                className='taskinput'
                type="text"
                onChange={(e) => setText(e.target.value)}
                value={text}
            />
            <br></br><br></br>
            <input className='todobutton' type="submit" value="Add task" />
        </form>
    );
};

export default NewTaskList;