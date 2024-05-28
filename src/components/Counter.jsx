import React, { useState } from "react";

//UI관련된 변수는 state에 저장해놔야 한다. 
//

// 전달되는 인자값을 pros로 본다.
export default function Counter() {
  //let num = 0;
  //const [number, setNumer] = useState(0);

  // 리액트에선 UI 내부상의 변수는 useState에서 관리해야한다!
  const [count, setCount] = useState(0);
  return (
    <div className="counter">
      <span className="number">{count}</span>
      <button className="button" 
      onClick={() => { 
        //javascript 환경 스냅참,
        //count++;
        //count는 
        //console.log(count);
        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);
        
        //setCount(count + 1);
        //setCount(count + 1);
        //setCount(count + 1);
      }}
      >Add +
      </button>
    </div>
  );
}