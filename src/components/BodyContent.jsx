import React from "react";
import NotesList from "./NotesList";

function BodyContent(props) {
  return (
    props.isVisable && (
      <div className="body-content">
        <NotesList />
      </div>
    )
  );
}

export default BodyContent;
