import React from "react";
import './App.css';

function Potato(){
    return <h1>I really don't like Potato!!!</h1>
}
function App() {
  return (
      <div className={"container"}>
        <h1>
          Hello, my first React project :)
        </h1>
          <Potato />
      </div>
  );
}

export default App;
