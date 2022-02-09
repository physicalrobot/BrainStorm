import React, { useState } from "react";
import Task from './Task';
import { v4 as uuid } from "uuid";
import '../App.css';


function TaskList({ tasks, deleteTask }) {




    const taskList = tasks.map((task) => (
        <ul>
            <li>
                < Task
                    key={task.id}
                    text={task.text}
                    deleteTask={deleteTask}
                    task={task}
                />
            </li>
        </ul>
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