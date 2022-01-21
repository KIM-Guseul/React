/* eslint-diable */

import React, {useState} from 'react';
import './App.css';

function App() {

  let navStyle = {
    color : 'white' , 
    fontSize : '30px'
  }

      // state: 변수 대신 쓰는 데이터 저장공간. useState(문자,숫자,array,object 다 저장 가능). 자주 변경되는 중요한 데이터는 state로 만들어서 데이터 바인딩하기!
      // 왜? webApp처럼 작동시키기 위해 -> state 변경사항이 새로고침 없이 재렌더링
  let [title, setTitle] = useState([ 'React', 'Java Script', 'scss' ]);

  const titleChange = () => {
    // [array], {object} 변경할 때
    var newTitle = [...title]; 
        // state를 deep copy해서 새로운 복사본 생성 후 변경
        // ... : spread operator 펼침 연산자. [] {} 제거해주세요
    newTitle =([ 'React_ex', 'Java Script_ex', 'scss_ex' ]);
    setTitle(newTitle);
  }

  let [like, setLike] = useState(0);
  const funLike = () => {
    setLike(like+1);
  }

  let [modal, setModal] = useState(false);
  let funModal = () => {
    setModal(!modal);
  } 

  let [clicked, setClicked] = useState(0);

  let[input, setInput] = useState('');

  let onChange = (e) => {
    setInput(e.target.value);
  }

  let funSave = () => {

    var addTitle = [...title];
    addTitle.unshift(input);
    setTitle(addTitle);
  }
  
  // // for 반복문
  // function funFor(){
  //   var repeat = [];
  //   for (var i=0; i<3; i++){
  //     repeat.push(
  //       <div key={i}>Hello</div>
  //     )
  //   }
  //   return repeat
  // }

  return (
    <div className="App">

      <div className='black-nav'>
        <div style={navStyle}>Programming Blog</div>
      </div>

      {/* {funFor()} */}

      {/* map 함수를 이용한 반복문 */}
      {
        title.map( (el,i) => {
          return(
            <div className="list" key={i}>
              <h3 onClick={ () => {setClicked(i)} }>{el} <span onClick={funLike}>👍</span> {like} </h3>
              <p>2월 17일 발행</p>
              <hr/>
            </div>
          );
        })
      }

      {/* {input}
      <input onChange={ (e)=>{ setInput(e.target.value)} }/> */}
      {/* onChange : input창에 뭔가 입력됐을 때 실행되는 함수 */}

      <Profile/>

      <div className="publish">
        <input onChange={onChange}/>
        <button onClick={funSave}>Save</button>
      </div>

      <button onClick={funModal}>More</button>
      <button onClick={titleChange}>New Title</button>

      {
        modal ? <Modal title = {title} clicked={clicked}/> : null
      }
    
    </div>
  );
}

// component : 
  // 장점_ 반복되는 html , 자주 변경되는(재렌더링되는) ui , 다른 페이지 만들때
  // 단점_ state 쓸 때 복잡해짐(props로 받아줘야해)

// 부모 컴포넌트의 state를 자식 컴포넌트로 전달 :  props문법 이용해 전송. 
  //원하는 데이터에 (작명 = 전송할 state) 전송 -> 자식 컴포넌트에 props 파라미터 입력

function Modal(props){ /* props 도 이름 마음대로 가능. 관습적으로 걍 props 사용*/
  return(
    <div className="modal">
        <h2> { props.title[props.clicked] } </h2>
        <p>날짜</p>
        <p>상세내용</p>
    </div>
  )
}






// class 문법 ======================================================================

  /* class: 변수/함수 보관하는 덩어리
    extends aaa: aaa의 성질을 물려받겠다 
  */
   
class Profile extends React.Component{

  constructor(){ /* constructor: class의 변수/초기값 저장하기 위해 */
    super();
    this.state = { firstName : 'Guseul', lastName : 'KIM' }
  }

  funChangeName = () => {
    this.setState( { firstName : 'GUSEUL'})
  }

  render(){
    return(
      <div>
        <h3> profile </h3>
        <p> I am {this.state.firstName} {this.state.lastName} :) </p>
        {/* 
        <button onClick={this.funChangeName.bind(this)}>Click Me!</button>
        bind(this) 쓰기 싫으면 : 함수를 ()=>{} arrow 함수로 쓰기
         */}

        <button onClick={this.funChangeName}>Click Me!</button>
      </div>
    )
  }

}




export default App;
