import { useState } from "react";
function Counter() {
  const [counter, setCounter] = useState(0);
//   const [counter2, setCounter] = useState(0);
  const [text, setText] = useState("");

  const changeText = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <h1>this is functional counter component</h1>
      <p>num of count is: {counter}</p>
      {/* <input onChange={(e)=>{setText(e.target.value)}}></input> */}
      <input onChange={changeText} />
      <h2>{text}</h2>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        increase
      </button>
    </div>
  );
}

export default Counter;
