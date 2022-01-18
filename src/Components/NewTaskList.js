import React, { useState } from "react";

function NewTaskList({ handleAddTask }) {

    const [text, setText] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        handleAddTask({ text });
        setText('');

    }


    return (
        < form className="new-task-form" onSubmit={handleSubmit}  >
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