import React, { useState } from "react";
import TaskList from "./TaskList";
import Editor from './Editor'
import Notepad from './Notepad'
import NewTaskList from './NewTaskList'
import { TASKS } from './data'
import { v4 as uuid } from "uuid";



function CodeNotes() {

    const [tasks, setTask] = useState(TASKS);




    function handleAddTask(newtask) {
        return setTask([...tasks, newtask])
    }



    function handleDeleteTask(deletedTaskText) {
        setTask(tasks.filter((task) => task.text !== deletedTaskText));
    }




    return (

        <div>
            <Notepad />

            <Editor />

            <TaskList tasks={tasks} deleteTask={handleDeleteTask} />
            <NewTaskList text={tasks.text} handleAddTask={handleAddTask} />

        </div>

    )
}



export default CodeNotes;