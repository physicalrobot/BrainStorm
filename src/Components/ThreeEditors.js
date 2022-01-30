import React from 'react';
import { Routes, Route, Link } from "react-router-dom";


function ThreeEditors() {

    function run() {
        let htmlCode = document.querySelector('.codeeditor #html-code').value;
        let cssCode = "<style>" + document.querySelector('.codeeditor #css-code').value + "</style>";
        let jsCode = document.querySelector('.codeeditor #js-code').value;
        let output = document.querySelector('.codeeditor #output');

        output.contentDocument.body.innerHTML = htmlCode + cssCode;
        output.contentWindow.eval(jsCode);
    }
    document.querySelector('.codeeditor #html-code').addEventListener('keyup', run);
    document.querySelector('.codeeditor #css-code').addEventListener('keyup', run);
    document.querySelector('.codeeditor #js-code').addEventListener('keyup', run);


    return (
        <div>
            <div class='codeeditortitles'>

                <h1 id='navheaders'>
                    <nav id='nav'>

                        <Link to="/about">About</Link> <span></span>

                        <Link to="/">Home</Link> <span></span>

                        <Link to="contact">Contact</Link>

                    </nav> </h1>

            </div>



        </div>

    )
}

export default ThreeEditors;