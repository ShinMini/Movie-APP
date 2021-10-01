import React from "react";
import './App.css';

function LikeFoods({name}){
    return <h1>I really don't like {name}. </h1>;
}

const foodHate = [
    {
        name: 'kimchi',
        grade: 3
    },
    {
        name: 'patato',
        grade: 2
    },
    {
        name: 'tomato',
        grade: 1
    }
];


function App() {
  return (
      <div className={"container"}>
        <h1>
          Hello, my first React project :)
        </h1>
          {
              foodHate.map ( hates => <LikeFoods name={hates.name}/> )
          }
      </div>
  );
}

export default App;
