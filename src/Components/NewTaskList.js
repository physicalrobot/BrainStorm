import React, { useState } from "react";

function NewTaskList({ handleAddTask, tasks }) {

    const [text, setText] = useState('');


    function handleSubmit(e) {
        e.preventDefault();

        handleAddTask({ text });
        setText('');

    }


    return (
        < form className="newform" onSubmit={handleSubmit}  >


            <input

                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            <input type="submit" value="Add task" />
        </form>
    );
};

export default NewTaskList;