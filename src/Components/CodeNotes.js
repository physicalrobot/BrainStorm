import React, { useState, useEffect } from "react";
import TaskList from "./TaskList";
import TextEditor from './TextEditor'
import NewTaskList from './NewTaskList'
import { TASKS } from './data'
import { v4 as uuid } from "uuid";



function CodeNotes() {

    const [tasks, setTask] = useState([]);



    useEffect(() => {
        fetch("http://localhost:4000/tasks")
            .then((r) => r.json())
            .then((notes) => setTask(notes));
    }, []);

    function handleAddTask(newtask) {
        return setTask([...tasks, newtask])
        // console.log(tasks)
    }

    function handleDeleteTask(deletedItem) {
        const updatedItems = tasks.filter((task) => task.id !== deletedItem.id);
        setTask(updatedItems);
    }

    // function handleDeleteTask(deletedTaskText) {
    //     setTask(tasks.filter((task) => task.id !== deletedTaskText.id));
    // }




    return (

        <div>
            <TaskList tasks={tasks} deleteTask={handleDeleteTask} />
            <NewTaskList tasks={tasks} text={tasks.text} handleAddTask={handleAddTask} />
        </div>

    )
}



export default CodeNotes;