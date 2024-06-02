import {useState} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./Count";
import Team from "./Team";
import Increase from "./Increase";
import Users from "./User";
import Friends from "./Friends";

function App() {
  function handleClick() {
    alert("button click");
  }
  const handleClick2 = () => {
    alert("Button Click 2");
  };
  const addTo = (num) => {
    alert(num + 3);
  };
  return (
    <>
      <Friends></Friends>
      <Users></Users>
      <h3>React Core concenpt</h3>
      <Increase></Increase>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>click2</button>
      <button onClick={() => alert("3r click")}>click-3</button>
      <button onClick={() => addTo(3)}>click</button>
    </>
  );
}

export default App;
