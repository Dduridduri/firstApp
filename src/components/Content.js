import React, { useState } from 'react'

function Content(props) {
  // let Title = ["쌍둥이 아기판다", "쌍둥이 아기판다","주토피아 동물 아카데미","귀엽게 찰칵!"]
  // let Desc = ["스페셜 이벤트", "이름을 지어주세요", "판다는 곰이 맞을까?","에버랜드 AR필터"]
  // useState값은 직접 변경하면 안됨 함수로 접근
  let [good, setGood] = useState(0);

let [title, setTitle] = useState(["쌍둥이 아기판다","쌍둥이 아기판다","주토피아 동물 아카데미","귀엽게 찰칵!"]);
  
let [desc, setDesc] = useState(["스페셜 이벤트","이름을 지어주세요","판다는 곰이 맞을까?","에버랜드 AR필터"])


  function goodFun(){
    setGood(good+1)
  }
  function Change(){
    let copy = [...title]
    let copy2 = [...desc]
    //배열을 벗겨내고 데려오는문법 ...
    copy2[0] = "스페셜"
    copy[0] = "쌍둥이 아기 팝니다";
    copy[1] = "쌍둥이 아기 판다";
    copy[2] = "주토피 아동 물 아카데미";
    copy[3] = "귀 찰칵!";


    setTitle(copy);
    setDesc(copy2)
  } 

  let [modalChk, setModalChk] = useState(false);

  function Modal(){
    
    // if(modalChk === (false)){

    //   setModalChk(true)
    // }else{
    //   setModalChk(false)
    // }

    
      // modalChk === false ? setModalChk(true) : setModalChk(false)
      
      setModalChk(!modalChk)


  }



  return (
    <>
    <div className='content-item' onClick={Modal}>
    <img src="https://via.placeholder.com/320" alt='테스트' />
     {/*단독태그는 뒤에 띄우고/하면됨  */}
    <h3>{title[props.arrayNum]}</h3>
    <p>{desc[props.arrayNum]}</p>    
    <p onClick={goodFun}>👍 {good}</p>
    <button onClick={Change}>수정</button>
  </div>
    {
      (modalChk === true ? <div className='window' onClick={Modal}></div> : null)
    }

  
    
    </>

  )
}

export default Content