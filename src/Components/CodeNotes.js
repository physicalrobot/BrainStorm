import React, { useState } from "react";
import TaskList from "./TaskList";
import TextEditor from './TextEditor'
import Notepad from './Notepad'
import NewTaskList from './NewTaskList'
import { TASKS } from './data'
import { v4 as uuid } from "uuid";



function CodeNotes() {

    const [tasks, setTask] = useState(TASKS);




    function handleAddTask(newtask) {
        return setTask([...tasks, newtask])
        // console.log(tasks)
    }



    function handleDeleteTask(deletedTaskText) {
        setTask(tasks.filter((task) => task.text !== deletedTaskText));
    }




    return (

        <div>

            <TaskList tasks={tasks} deleteTask={handleDeleteTask} />
            <NewTaskList tasks={tasks} text={tasks.text} handleAddTask={handleAddTask} />

        </div>

    )
}



export default CodeNotes;