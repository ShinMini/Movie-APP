import React from "react";
import './App.css';

function PropsExample(props){
    return <h1>I really don't like {props.food}!!!</h1>
}
function App() {
  return (
      <div className={"container"}>
        <h1>
          Hello, my first React project :)
        </h1>
          <PropsExample food={"potato"}/>
          <PropsExample food={"tomato"}/>
          <PropsExample food={"everything"}/>
      </div>
  );
}

export default App;
