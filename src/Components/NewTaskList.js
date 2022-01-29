import React, { useState, useEffect } from "react";
import '../App.css';

function NewTaskList({ handleAddTask, tasks }) {

    const [text, setText] = useState(tasks);



    // function handleSubmit(e) {
    //     e.preventDefault();

    //     handleAddTask({ text });
    //     setText('');

    // }



    function handleSubmit(e) {
        e.preventDefault();
        const taskData = {
            text: text
        };


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
        // .then((newItem) => setText(newItem))
        // .then((newItem) => handleAddTask({ text }))
        // .then((newItem) => setText(''))



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