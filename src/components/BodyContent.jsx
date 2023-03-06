import React from "react";
import NotesList from "./NotesList";
import NoteEditor from "./NoteEditor";

function BodyContent(props) {
  return (
    <div className="body-content">
      {props.isVisable && <NotesList />}
      <NoteEditor />
    </div>
  );
}

export default BodyContent;
