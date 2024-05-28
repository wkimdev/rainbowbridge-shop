//* navbar 테스트 중
import React, { createContext, useContext, useState } from "react";
import Counter from "./components/Counter";


//* //////////////////////////////////////////////////////

//import { NavbarProvider } from './NavbarContext'; // 경로는 적절하게 수정해주세요.
//import Navbar from './Navbar'; // 경로는 적절하게 수정해주세요.
//import MoreButton from './MoreButton'; // 경로는 적절하게 수정해주세요.


//* Context 생성
const NavbarContext = createContext();

export const useNavbar = () => {
  return useContext(NavbarContext);
};

export const NavbarProvider = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleNavbar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <NavbarContext.Provider value={{ isExpanded, toggleNavbar }}>
      {children}
    </NavbarContext.Provider>
  );
};


//* NavComponent 설정
//* context값에 따라 navbar가 움직인다
const Navbar = () => {
  const { isExpanded } = useNavbar();

  return (
    <div style={{ transform: isExpanded ? 'translateY(해당하는 값)' : 'none' }}>
      {/* Navbar 내용 */}
    </div>
  );
};


//* 더보기 버튼 컴포넌트
const MoreButton = () => {
  const { toggleNavbar } = useNavbar();

  return <button onClick={toggleNavbar}>더보기</button>;
};


export default function AppCounter() {
  return (
    <div>
      {/* <Counter /> */}
      <NavbarProvider>
        <Navbar />
        <MoreButton />
        {/* 나머지 컴포넌트 */}
      </NavbarProvider>
    </div>
  )
}