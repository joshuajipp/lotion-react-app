import React from "react";
import NotesList from "./NotesList";

function BodyContent() {
  const [isNoteVisable, setVisability] = React.useState(true);

  function hideItem() {
    setVisability(!isNoteVisable);
  }

  return (
    <div className="body-content">
      <NotesList isVisable={hideItem} />
    </div>
  );
}

export default BodyContent;
