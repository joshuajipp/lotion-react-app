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

  const [isEditMode, setIsEditMode] = React.useState(true);

  const [activeNote, setActiveNote] = React.useState(-1);

  function onTitleChange(event) {
    const title = event.target.value;
    setTitle(title);
  }

  function onTextChange(event) {
    setTextContent(event);
  }

  function addNote(newNote) {
    setNotes([
      ...notes.slice(0, activeNote),
      newNote,
      ...notes.slice(activeNote + 1),
    ]);
  }

  function newNote() {
    const newCurrDateTime = new Date(Date.now() - tzoffset)
      .toISOString()
      .slice(0, 19);
    setTextContent("");
    setTitle("Untitled");
    setDateTime(newCurrDateTime);
    setNotes((prevNotes) => {
      return [...prevNotes, { title: "Untitled", content: "", dateTime: "" }];
    });
    setActiveNote(notes.length);
    setIsEditMode(true);
  }

  function onEditToggle() {
    setIsEditMode(!isEditMode);
  }

  function onNoteClick(noteID) {
    setActiveNote(noteID);

    const currNote = notes.at(noteID);
    setTextContent(currNote.content);
    setTitle(currNote.title);
    setDateTime(currNote.dateTime);
  }

  function onDelete() {
    setNotes(notes.filter((_, index) => index !== activeNote));
    if (notes.length === 1) {
      setActiveNote(-1);
    } else {
      setActiveNote(0);
      const currNote = notes.at(0);
      setTextContent(currNote.content);
      setTitle(currNote.title);
      setDateTime(currNote.dateTime);
    }
  }

  return (
    <div className="body-content">
      {props.isVisable && (
        <NotesList
          notesList={notes}
          newNote={newNote}
          activeNote={activeNote}
          setActiveNote={onNoteClick}
        />
      )}
      {activeNote !== -1 && (
        <NoteEditor
          onAdd={addNote}
          onTitleChange={onTitleChange}
          onContentChange={onTextChange}
          title={title}
          textContent={textContent}
          setDateTime={setDateTime}
          dateTime={dateTime}
          isEditMode={isEditMode}
          onEditToggle={onEditToggle}
          activeNote={activeNote}
          onDelete={onDelete}
        />
      )}
    </div>
  );
}

export default BodyContent;
