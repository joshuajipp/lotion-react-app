import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import React, { useState } from "react";

function NoteEditor() {
  const tzoffset = new Date().getTimezoneOffset() * 60000;
  var currDateTime = new Date(Date.now() - tzoffset).toISOString().slice(0, 19);

  const [dateTime, setDateTime] = useState(currDateTime);
  const [value, setValue] = useState("");

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

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };

  function onDateChange(event) {
    setDateTime(event.target.value);
  }

  return (
    <div className="note-editor">
      <div className="title-header">
        <div className="note-editor-header">
          <div className="note-editor-title">
            <h3 className="note-title" contentEditable="true" spellCheck="true">
              Untitled
            </h3>
            <input
              className="datetime-selector"
              type="datetime-local"
              onChange={onDateChange}
              value={dateTime}
            />
          </div>
          <div className="save-button button">Save</div>
          <div className="delete-button button">Delete</div>
        </div>
      </div>
      <div className="text-editor">
        <ReactQuill
          theme="snow"
          value={value}
          onChange={setValue}
          className="editor-input"
          modules={modules}
        />
      </div>
    </div>
  );
}

export default NoteEditor;
