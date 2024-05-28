import { React, useState } from "react";
export default function Counter() {
  let num = 0;
  //이 data는 변경가능한 데이터고, 이걸 변경해 달라!라고 useState를 react에서 사용해야 한다.
  //setCount -> 내부 상태값을 변경한다
  const [count, setCount] = useState(0);


  const handlerClick = () => {
    setCount(count + 1);
    setCount((prev) => prev + 1)
    console.log(count);
  }
  return (
    <div className="counter">
      {/* 가상돔이 여기만 수정한다 */}
      <span>num: {count}</span>
      <button className="" onClick={handlerClick}>Add +</button>
    </div>
  )
}
