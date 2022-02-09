import React from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import '/node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import '../App.css';
import 'draft-js/dist/Draft.css';

function TextEditor() {

    const [editorState, setEditorState] = React.useState(
        () => EditorState.createEmpty(),
    );

    return <Editor editorState={editorState} onEditorStateChange={setEditorState} />;
}


export default TextEditor

