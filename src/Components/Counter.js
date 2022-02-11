import React, { useState } from 'react';

function Counter() {



    const [counter, setCounter] = useState(0)
    const [word, setWord] = useState('')

    function handleSubmit(e) {
        e.preventDefault();
        setCounter(word.length)
    }

    function handleChange(input) {
        setWord(input.target.value)
    }



    return (
        <div className='counterdiv'>
            <div className='counter'>

                <h1>{counter}</h1>
                <form onSubmit={handleSubmit}>
                    <input type='text' onChange={handleChange}></input>
                    <button type='submit'>enter</button>
                </form>

            </div>


        </div>
    );
};

export default Counter;