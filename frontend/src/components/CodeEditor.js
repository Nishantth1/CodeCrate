// CodeEditor.js
import React, { useState } from 'react';
import MonacoEditor from 'react-monaco-editor';
import ProblemForm from './ProblemForm.js';

const CodeEditor = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    platform: '',
    intuition: '',
    link: '',
  });

  const editorOptions = {
    selectOnLineNumbers: true,
    theme: 'vs-dark',
  };

  const handleEditorChange = (value, event) => {
    console.log(value);
  };

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const handleFormSubmit = (data) => {
    console.log('Form submitted:', data);
    setShowForm(false);
  };

  return (
    <div className="code-editor">
      <MonacoEditor
        height="400"
        language="javascript"
        options={editorOptions}
        onChange={handleEditorChange}
      />

      {showForm && (
        <div className="modal-background">
          <div className="modal-content">
            <ProblemForm
              formData={formData}
              setFormData={setFormData}
              onClose={handleCloseForm}
              onSubmit={handleFormSubmit}
            />
          </div>
        </div>
      )}
        <br></br>
      <button className="add-button" onClick={handleShowForm}>
        Add Problem
      </button>
    </div>
  );
};

export default CodeEditor;
