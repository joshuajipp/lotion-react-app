import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import React, { useState } from "react";

function NoteEditor() {
  const tzoffset = new Date().getTimezoneOffset() * 60000;
  const currDateTime = new Date(Date.now() - tzoffset)
    .toISOString()
    .slice(0, 19);

  const [dateTime, setDateTime] = useState(currDateTime);

  const [title, setTitle] = useState("Untitled");

  const [textContent, setTextContent] = useState("");

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
    setDateTime(event.target.value);
  }

  function onTitleChange(event) {
    const title = event.target.value;
    setTitle(title);
  }

  function onTextChange(event) {
    const pElem = event;
    const elemLen = pElem.length;
    const text = pElem.substring(3, elemLen - 4);
    console.log(text);
    setTextContent(text);
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
              onChange={onTitleChange}
              value={title}
            />
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
          value={textContent}
          onChange={onTextChange}
          className="editor-input"
          modules={modules}
        />
      </div>
    </div>
  );
}

export default NoteEditor;
