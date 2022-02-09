import React from "react";
import Task from './Task';
import '../App.css';


function TaskList({ tasks, deleteTask }) {


    const taskList = tasks.map((task) => (
        <div id='tasklists'>
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
        </div>
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