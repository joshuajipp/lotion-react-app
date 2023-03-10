import React from "react";
import Navigation from "./Navigation";
import BodyContent from "./BodyContent";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [isNoteVisable, setVisability] = React.useState(true);

  function hideItem() {
    setVisability(!isNoteVisable);
  }

  return (
    <div className="body">
      <Navigation toggleNotes={hideItem} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BodyContent isVisable={isNoteVisable} />} />
          <Route
            path="/notes"
            element={<BodyContent isVisable={isNoteVisable} />}
          />
          <Route
            path="/notes/:activeNoteParam"
            element={<BodyContent isVisable={isNoteVisable} />}
          />
          <Route
            path="/notes/:activeNoteParam/:editParam"
            element={<BodyContent isVisable={isNoteVisable} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
