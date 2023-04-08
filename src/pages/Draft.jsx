import React, { useState } from "react";
import { SideNav, TopNav } from "../components";
import "./styles/Draft.css";
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';



const Draft = () => {

  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  );

  return (
    <>
      <main>
        <TopNav />
        <div className="container">
          <SideNav />
          <div className="content">
              <Editor
              editorState={editorState}
              onEditorStateChange={setEditorState}
              wrapperClassName="wrapper-class"
              editorClassName="editor-class"
              toolbarClassName="toolbar-class"
                      />
          
          </div>
        
        </div>
      </main>
    </>
  );
};

export default Draft;
