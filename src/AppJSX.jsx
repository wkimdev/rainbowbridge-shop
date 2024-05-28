import './App.css';

//리액트 컴포넌트 생성시 아래 3개의 규칙을 유의해야한다

//반환값 -> JSX 문법 (UI)
//함수 첫글자는 대문자로 함수를 만든다

//1) 컴포넌트는 꼭 "하나"의 태그로 감싸서 리턴해야 한다
// - 다수태그 리턴은 부모 태그로 감사야 한다

//2) className을 사용한다

//3) App.js에서 javascript 코드를 사용할때 중괄호로 묶어줘야 한다. 
function AppJSX() {
  const name = '김솜';
  const list = ['dog', 'cat', '도마뱀', '거미', 'asdfjl'];
  return (
    <>
      <h1>hello world</h1>
      <h1>{`hello world ${name}`}</h1>
      <ul>
        {list.map((item) => {
          return <li>{item}</li>
        })}
      </ul>
    </>
  );
}

export default AppJSX;
