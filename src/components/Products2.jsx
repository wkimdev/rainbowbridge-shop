import React, { useEffect, useState } from 'react';

//* useState값이 변경될때마다 컴포넌트 렌더링을 다시 하기 때문에. 
//* fetch를 여기서 호출하면 network 비용이 많이 발생된다
//* 컴포넌트가 최초로 호출될때만 네트워크를 발생시킨다. 
export default function Products() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);
  const handlerChange = () => setChecked(prev => !prev)


  //네트워크 호출을!! 컴포넌트 호출 최초 1번 때만 사용하도록, 
  //useEffect를 사용한다. 
  useEffect(() => {
    fetch(`data/${checked ? 'sale_' : ''}products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log('hot data');
        setProducts(data);
      })
      .catch(err => {
        console.error(err);
      });
    return () => {
      console.log('useEffect에서 무언가 호출되고 있음!!!!');
    }
  }, [checked]); //dependency 명시

  return (
    <>
      <input id='checkbox' type='checkbox' value={checked} onChange={handlerChange} />
      <label htmlFor="checkbox">show only sale</label>
      <ul>
        {/* //배열에서 고유한 key id를 맵핑해야한다 */}
        {products.map((item) => (
          <li key={item.id}>
            <article>
              <h3>{item.name}</h3>
              <p>{item.price}</p>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
}