/* eslint-disable */

import { mapToStyles } from '@popperjs/core/lib/modifiers/computeStyles';
import React, {useEffect, useState} from 'react';
import { Navbar, Container, Nav} from 'react-bootstrap';
import './App.css';
import Data from './data.js'
import { Link, Route, Switch } from 'react-router-dom';
import Detail from './Detail';
import axios from 'axios';


/* 이미지 저장 위치
src : 파일명 변경 + 압축
public : 파일 보존. 절대경로/파일명.jpg 로 호출
*/
function App() {

  let [shoes, setSheos] = useState(Data);
  let [stock, setStock] = useState([10, 11, 12]);

  let [load, setLoad] = useState(false);

  let funMore = () => {

    setLoad(true)
   
    axios.get('https://codingapple1.github.io/shop/data2.json')

    .then((result)=>{
      setSheos( [...shoes, ...result.data] );
      console.log(result.data);
      setLoad(false);
    })
    .catch(()=>{
      console.log('실패')
    })

  }

  return (
    <div className="App">

      <Navbar bg="light" variant="light">
        <Container>
        <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to='/'> Home </Nav.Link>
          <Nav.Link as={Link} to='/detail'> Detail </Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      
      <Switch> {/* 여러개의 매칭 중 하나만 보여줄 때 */}

        <Route exact path="/"> {/* exact={true} : 주소가 정확하게 일치할 경우에만 실행 */}
          <div className='jumbotron background'>
            <h1>20% Season Off</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for calling
              extra attention to featured content or information.
            </p>
            <p>
              <button variant="primary">Learn more</button>
            </p>
          </div>

          <div className="container"> {/* bootstrap 문법 */}
            <div className="row">
              {shoes.map( (el, i) => {
                return(
                  <ShoesCard shoes={shoes[i]} i={i} key={i}/>
                )
              })}

              {
                load === true
                ? console.log('로드중')
                : console.log('로드끝')
              }

            </div>

            {/*
              jQuery - $.ajax()
              axios - axios.get()
              js - fetch()
            */}

            {/*
              axios.post('서버URL', {전달할 정보}) 
            */}
            {/* axios.post('서버URL' {id: 'bead', pw: 1234}); */}
          
            {/* 
              axios.get(데이터 요청할 URL).then(get 요청을 성공했을 때 실행하는 코드).catch(ajax 요청을 실패했을 때 실행하는 코드);
            */}

            {/* fetch('https://codingapple1.github.io/shop/data2.json').then() */}

            { /* 
              axios : object 자료형에 "" 쳐서 "json 자료형"으로 변경해서 전달. 출력하면 json을 다시 object 자료형으로 보여줌. (object 자료형은 주고받을 수 없어)
              fetch : json 자료형 그대로 전달. 직접 바꿔줘야해(호환성 별로...). 
            */ }
            
            <button className="btn btn-primary" onClick={funMore}>더보기</button>

          </div>
        </Route>
        
        <Route path="/detail/:id">
          <Detail shoes={shoes} stock={stock} setStock={setStock}/>
        </Route>


        {/* <Route path='/:작명(파라미터)'>
          <div> 아무거나 아무거나</div>
        </Route> */}
      {/* <Route path="주소" component={컴포넌트_이름}></Route> */}

      </Switch>

    </div>

  );
}


function ShoesCard(props){
  return (
    <div className="col-md-4">
      <img src={'https://codingapple1.github.io/shop/shoes' + (props.i+1) + '.jpg'} width="100%" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}<br/>{props.shoes.price}</p>
    </div>
  )
}





export default App;
