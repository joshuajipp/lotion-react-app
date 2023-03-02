import React from "react";
import Navigation from "./Navigation";
import BodyContent from "./BodyContent";

function App() {
  const [isNoteVisable, setVisability] = React.useState(true);

  function hideItem() {
    setVisability(!isNoteVisable);
  }

  return (
    <div class="body">
      <Navigation toggleNotes={hideItem} />
      <BodyContent isVisable={isNoteVisable} />
    </div>
  );
}

export default App;
