import React from "react";
import NotesList from "./NotesList";
import NoteEditor from "./NoteEditor";

function BodyContent(props) {
  const [notes, setNotes] = React.useState([]);

  const [title, setTitle] = React.useState("Untitled");

  const [textContent, setTextContent] = React.useState("");

  const tzoffset = new Date().getTimezoneOffset() * 60000;
  const currDateTime = new Date(Date.now() - tzoffset)
    .toISOString()
    .slice(0, 19);

  const [dateTime, setDateTime] = React.useState(currDateTime);

  function onTitleChange(event) {
    const title = event.target.value;
    setTitle(title);
  }

  function onTextChange(event) {
    setTextContent(event);
  }

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function newNote() {
    const newCurrDateTime = new Date(Date.now() - tzoffset)
      .toISOString()
      .slice(0, 19);
    setTextContent("");
    setTitle("Untitled");
    setDateTime(newCurrDateTime);
  }

  return (
    <div className="body-content">
      {props.isVisable && <NotesList notesList={notes} newNote={newNote} />}
      <NoteEditor
        onAdd={addNote}
        onTitleChange={onTitleChange}
        onContentChange={onTextChange}
        title={title}
        textContent={textContent}
        setDateTime={setDateTime}
        dateTime={dateTime}
      />
    </div>
  );
}

export default BodyContent;
