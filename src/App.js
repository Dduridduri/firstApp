import { useState } from 'react';
import './App.css';
import Content from './components/Content';
import Nav from './components/Nav';




function App() {

  // let Name = "홍길동";


  return (
    <div className="App">
     <Nav />
      

      {/* <h3 className={Name} style={{color: "orange", backgroundColor: "skyblue"}}>hello React {Name}</h3> */}
      {/* 리액트에선 {변수명} 쓰면됨 클래스에 변수명쓸땐 ''빼고 {}안에 넣으면됨
      style 태그 직접적용할때는 중괄호 2번*/}
      <div className='content'>
        
        <Content arrayNum = "0" />
        <Content arrayNum = "1" />
        <Content arrayNum = "2" />
        <Content arrayNum = "3" />
        
      </div>

      <div className='content'>
        <Content title desc="스페셜 이벤트" />
        <Content title desc="이름을 지어주세요" />
        <Content title desc="판다는 곰이 맞을까?" />
        <Content title desc="에버랜드 AR필터" />
      </div>
      
    </div>
    
  );
}

export default App;
