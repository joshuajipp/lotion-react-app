import React, { useState } from "react";
import Note from "./Note";

function NotesList() {
  return (
    <div className="notes-container">
      <div className="note-header-flex">
        <h3 className="note-header-item">Notes</h3>
        <div className="note-header-item plus-logo button">&#43;</div>
      </div>
      <div className="scroller"></div>
    </div>
  );
}

export default NotesList;
