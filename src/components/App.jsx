import React from "react";
import emojis from "../emoji";
import Card from "./card";

function create(emj){
  return (
  <Card
   emoji={emj.emoji}
   descrption={emj.meaning}
   content={emj.content}
  />
  )
}
function App() {
  return (
    <div className="App">
      <h1 className="em">emojipedia</h1>
      {emojis.map(create)}
    </div>
  );
}

export default App;
