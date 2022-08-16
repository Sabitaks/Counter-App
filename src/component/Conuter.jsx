import React,{useState } from 'react';


function Conuter() {
    // const state = useState();
  // console.log(state);

  const [count,setCount] = useState(0);

// let count = 1;
  const IncNum = () => {
    setCount(count +1);
  // console.log("clicked " + count++);
};
  const DecNum = () => {
    setCount(count -1);
  // console.log("clicked " + count++);
};
  const Resetv = () => {
    setCount(0);
  // console.log("clicked " + count++);
};
  return (
    <div>
      <div className='counter'>
        <h1>{count}</h1>
        <button onClick={IncNum}>Increment</button>
        <button onClick={DecNum}>Decrement</button>
        <button onClick={Resetv}>ResetNum</button>
      </div>
    </div>
  )
}

export default Conuter;
