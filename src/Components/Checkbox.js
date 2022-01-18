import React from "react";
import { v4 as uuid } from "uuid";


const Checkbox = ({ checkstatus, handleCheck }) => {



    return (
        <input
            type='checkbox'
            key={uuid()} checked={checkstatus}
            onChange={handleCheck}


        >



        </input>

    );
};

export default Checkbox;