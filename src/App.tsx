import React, { useEffect, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import * as ace from 'ace-builds';
import 'ace-builds/webpack-resolver';
import 'ace-builds/src-noconflict/ext-language_tools';
import 'ace-builds/src-noconflict/mode-html';

function App() {
  const editorRef = useRef(null);

  useEffect(() => {
    if (editorRef.current) {
      const editor = ace.edit('editor');
      editor.getSession().setMode('ace/mode/html');
      editor.setOptions({
        enableBasicAutocompletion: true,
        enableSnippets: true,
        enableLiveAutocompletion: true,
      });
    }
  }, []);

  return (
    <div className="App">
      <div
        id="editor"
        ref={editorRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}></div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
