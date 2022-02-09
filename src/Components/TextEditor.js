import React, { Component } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import '/node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import draftToHtml from 'draftjs-to-html';
import '../App.css';
import ReactDOM from 'react-dom';
import 'draft-js/dist/Draft.css';

function TextEditor() {

    const [editorState, setEditorState] = React.useState(
        () => EditorState.createEmpty(),
    );

    return <Editor editorState={editorState} onEditorStateChange={setEditorState} />;
}


export default TextEditor


// class TextEditor extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             editorState: EditorState.createEmpty(),
//         };
//     }

//     onEditorStateChange: Function = (editorState) => {
//         this.setState({
//             editorState,
//         });
//     };

//     render() {
//         const { editorState } = this.state;
//         return (
//             <div>
//                 <Editor
//                     editorState={editorState}
//                     onEditorStateChange={this.onEditorStateChange}
//                     wrapperClassName="wrapper-class"
//                     editorClassName="editor-class"
//                     toolbarClassName="toolbar-class"

//                 />
//                 <br></br>
//                 <textarea id='htmltxtarea' onChange={
//                     draftToHtml(convertToRaw(editorState.getCurrentContent()))
//                 }></textarea>

//             </div>
//         )
//     }
// }
// export default TextEditor;
