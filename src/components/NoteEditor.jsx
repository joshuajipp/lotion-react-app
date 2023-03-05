import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import React, { useState } from "react";

function NoteEditor() {
  const [setDateTime] = useState("");

  const [value, setValue] = useState("");

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
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
  };

  const formatDate = (when) => {
    const formatted = new Date(when).toLocaleString("en-US", options);
    if (formatted === "Invalid Date") {
      return "";
    }
    return formatted;
  };

  const handleDateTimeChange = (event) => {
    const formattedDateTime = formatDate(event.target.value);
    setDateTime(formattedDateTime);
  };

  return (
    <div className="note-editor">
      <div className="title-header">
        <div className="rightside-header">
          <div className="main-title">
            <h1 className="note-title" contentEditable="true" spellCheck="true">
              Untitled
            </h1>
            <input
              className="datetime-picker"
              type="datetime-local"
              onChange={handleDateTimeChange}
            />
          </div>
          <div className="save-button">
            <button className="text-button">Save</button>
          </div>
          <div className="delete-button">
            <button className="text-button">Delete</button>
          </div>
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
