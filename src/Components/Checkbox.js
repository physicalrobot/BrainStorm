import React from "react";
import { v4 as uuid } from "uuid";


const Checkbox = ({ value, setCheck }) => {
    return (
        <input
            key={uuid()}
            type='checkbox'
            key={uuid()} checked={value}
            onChange={setCheck}

        ></input>
    );
};

export default Checkbox;