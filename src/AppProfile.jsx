import "./App.css";
import Avarter from "./components/Avatar";
import Profile from './components/Profile';

// 독립적, 재사용성이 높은 컴포넌트를 만들 수 있다. 
// 데이터를 동적으로 처리해 더 재사용성을 높힌다.


// src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80" 
//       alt="avatar" />
//       <h1>James Kim</h1>
//       <p>프론트엔드 개발자</p>

function AppProfile() {
  const handlerClick = (event) => {
    alert("버튼클릭!");
  }
  return (
    <>
      <button onClick={handlerClick}>button</button>
      <Avarter image={"https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"} isNew={true} />
      <Profile
        image="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
        name="James Kim"
        title="프론트엔드 개발자"
        isNew={true} />
      <Profile image="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
        name="James Kim1111"
        title="프론트엔드 개발자11111" />
      <Profile
        image="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
        name="James Kim2222"
        title="프론트엔드 개발자2222"
        isNew={true} />
    </>
  );
}

export default AppProfile;
