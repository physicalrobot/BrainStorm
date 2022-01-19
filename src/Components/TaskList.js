import React, { useState } from "react";
import Task from './Task';
import { v4 as uuid } from "uuid";
import '../App.css';


function TaskList({ tasks, deleteTask }) {



    const taskList = tasks.map((task) => (


        <Task
            key={uuid()}
            text={task.text}
            complete={task.complete}
            deleteTask={deleteTask}
            tasks={tasks}
        />
    ));

    return (
        <div>
            <h2 id='tasklisttitle'>Task List</h2>
            <br></br>
            {taskList}
        </div>
    )
}








export default TaskList;