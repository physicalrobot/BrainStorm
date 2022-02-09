import React, { useState } from 'react';


const Counter = () => {

    const [counter, setCounter] = useState(0)
    const [word, setWord] = useState('')

    function handleChange() {
        setWord('biggie')

    }
    console.log(word)



    return (
        <div class='counterdiv'>
            <div class='counter'>

                <h1>{counter}</h1>
                <form>
                    <input type='text' ></input>
                    <button>enter</button>
                </form>

            </div>


        </div>
    );
};

export default Counter;