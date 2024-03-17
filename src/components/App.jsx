// Libraries
import React from "react";
// Components
import Entry from "./Entry";
// info
import emojipedia from "../emojipedia.js"


function createEntry(entry){
  return <Entry 
    key={entry.id}
    emoji={entry.emoji}
    name={entry.name}
    meaning={entry.meaning}
  />
}

function App(props) {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(createEntry)}
      </dl>
    </div>
  );
}

export default App;
