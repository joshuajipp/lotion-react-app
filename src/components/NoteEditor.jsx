import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import React, { useState } from "react";

function NoteEditor(props) {
  const modules = {
    toolbar: [
      [{ font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
    ],
  };
  function onDateChange(event) {
    props.setDateTime(event.target.value);
  }

  function submitNote(event) {
    const noteObj = {
      title: props.title,
      content: props.textContent,
      dateTime: props.dateTime,
    };

    props.onAdd(noteObj);
  }

  return (
    <div className="note-editor">
      <div className="title-header">
        <div className="note-editor-header">
          <div className="note-editor-title">
            <input
              className="note-title"
              contentEditable="true"
              spellCheck="true"
              onChange={props.onTitleChange}
              value={props.title}
            />
            <input
              className="datetime-selector"
              type="datetime-local"
              onChange={onDateChange}
              value={props.dateTime}
            />
          </div>
          <div className="save-button button" onClick={submitNote}>
            Save
          </div>
          <div className="delete-button button">Delete</div>
        </div>
      </div>
      <div className="text-editor">
        <ReactQuill
          theme="snow"
          value={props.textContent}
          onChange={props.onContentChange}
          className="editor-input"
          modules={modules}
        />
      </div>
    </div>
  );
}

export default NoteEditor;
