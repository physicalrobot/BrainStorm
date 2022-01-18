
import React, { useState } from "react";
import Task from './Task';
import { v4 as uuid } from "uuid";



function TaskList({ tasks, deleteTask }) {

    const [checks, setCheck] = useState(false);

    function handleCheck() {
        setCheck(!checks);
    }





    const taskList = tasks.map((task) => (

        <Task
            key={uuid()}
            text={task.text}
            complete={task.complete}
            setCheck={handleCheck}
            value={checks}
            deleteTask={deleteTask}
            tasks={tasks}


        />
    ));

    return (
        <div>

            {taskList}
        </div>
    )
}




export default TaskList;