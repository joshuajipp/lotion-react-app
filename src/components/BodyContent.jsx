import React from "react";
import NotesList from "./NotesList";
import NoteEditor from "./NoteEditor";

function BodyContent(props) {
  return (
    props.isVisable && (
      <div className="body-content">
        <NotesList />
        <NoteEditor />
      </div>
    )
  );
}

export default BodyContent;
