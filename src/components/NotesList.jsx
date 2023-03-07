import React, { useState } from "react";
import Note from "./Note";

function NotesList(props) {
  return (
    <div className="notes-container">
      <div className="note-header-flex">
        <h3 className="note-header-item">Notes</h3>
        <div
          className="note-header-item plus-logo button"
          onClick={props.newNote}
        >
          &#43;
        </div>
      </div>
      <div className="scroller">
        {props.notesList.map((noteItem, index) => {
          return (
            <Note
              key={index}
              title={noteItem.title}
              dateTime={noteItem.dateTime}
              content={noteItem.content}
            />
          );
        })}
      </div>
    </div>
  );
}

export default NotesList;
