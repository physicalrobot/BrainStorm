import React from 'react';

function ThreeEditors() {



    function run() {
        let htmlCode = document.querySelector('.codeeditor #html-code').value;
        let cssCode = "<style>" + document.querySelector('.codeeditor #css-code').value + "</style>";
        let jsCode = document.querySelector('.codeeditor #js-code').value;
        let output = document.querySelector('.codeeditor #output');

        output.contentDocument.body.innerHTML = htmlCode + cssCode;
        output.contentWindow.eval(jsCode);
    }



    return (

        <div class='codeeditor'>

            <textarea id='html-code'></textarea>
            <textarea id='css-code'></textarea>
            <textarea id='js-code'></textarea>
            <iframe id='output'></iframe>

            {
                document.querySelector('.codeeditor #html-code').addEventListener('keyup', run),
                document.querySelector('.codeeditor #css-code').addEventListener('keyup', run),
                document.querySelector('.codeeditor #js-code').addEventListener('keyup', run)
            }
        </div>

    )
}

export default ThreeEditors;