import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory , useParams } from "react-router";
import styled from "styled-components";
import './Detail.scss';



let Box = styled.div`
padding : 20px;
`;

let Title = styled.h4`
font-size : 25px;
color : ${ props => props.color }
`;


// Lifecycle Hook :  class 컴포넌트들만 사용 가능 (useEffect( ()=>{} ) 와 같은 역할)
// class Detail2 extends React.Component{

//   /* 컴포넌트가 마운트 되었을 때 실행 */
//   componentDidMount(){}

//   /* 컴포넌트가 언마운트 되기 직전에 실행 */
//   componentWillUnmount(){}

// }



function Detail(props){

    // useEffect :  컴포넌트가 렌더링 되고 나서부터 컴포넌트가 마운트 될 때 / 컴포넌트가 업데이트 될 때 실행

    // 컴포넌트가 마운트 될 때 실행
    let [alert, setAlert] = useState(true);
    let [input, setInput] = useState('');

    useEffect( () => {

      // axios.get() {/* 컴포넌트를 로드했을 때만 ajax 요청 ... [] 빈 대괄호로 로드 시 딱 한번만 실행.*/}

      let timer = setTimeout( () => { setAlert(false) }, 2000);
      return () => { clearTimeout(timer) }
    },[alert]);
    /*
    [useEffect가 실행 될 조건]
    [alert] : alter가 변경 될 때만 실행. 스테이트 여러개 쓸 수도 있어. 
    []: 페이지가 로드 됐을 때 딱 한번 실행.
    */

    // 컴포넌트가 언마운트 때 실행 (다른 페이지로 이동..)
    // useEffect( ()=> {
    //   return ()=>{}
    // })

    let { id } = useParams();
    let history = useHistory();

    let isFound = props.shoes.find(
        function (goods){
            return goods.id == id
        }
    )

    let funOrder = () => {
      // props.setStock([9,10,11]);

      let newStock = [...props.stock]

      console.log( 'newStock' ,newStock)


      console.log(props.stock[id])



      // console.log('new-1:',newStock[id]-1);

    }


    return(
        <div className="container">
          <Box>
            <Title> Detail </Title>
          </Box>

          {input} {/* input값이 업데이트 될 때마다 timer도 계속 실행됨 */}

          <input onChange={(e)=>{setInput(e.target.value)}}/>

          {
            alert === true
            ? (
              <div className="my-alert-y"> 
                <p>재고가 얼마 남지 않았습니다</p> 
              </div>
              )
            : null
          }
        
          <div className="row">
            <div className="col-md-6">
              <img src={"https://codingapple1.github.io/shop/shoes" + (props.shoes[id].id+1) + ".jpg"} width="100%"/>
            </div>
            <div className="col-md-6 mt-4">
              <h4 className="pt-5">{isFound.title}</h4>
              <p>: {isFound.content}</p>
              <p>{isFound.price} 원</p>

              <InfoStock stock={props.stock[id]}/>


              <button className="btn btn-danger" onClick={funOrder}>주문하기</button> 
              <button className="btn btn-danger" onClick={ ()=>{ history.push('/'); } }>뒤로가기</button>

            </div>
          </div>
        </div>       
      )

    // return(

    //   <div className="container">
    //     <div className="row">
    //       <div className="col-md-6">
    //         <img src={"https://codingapple1.github.io/shop/shoes" + (props.shoes[id].id+1) + ".jpg"} width="100%"/>
    //       </div>
    //       <div className="col-md-6 mt-4">
    //         <h4 className="pt-5">{props.shoes[props.shoes[id].id].title}</h4>
    //         <p>: {props.shoes[props.shoes[id].id].content}</p>
    //         <p>{props.shoes[props.shoes[id].id].price} 원</p>
    //         <button className="btn btn-danger">주문하기</button> 

    //         <button className="btn btn-danger" onClick={ ()=>{ history.push('/'); } }>뒤로가기</button>
    //         {/* <button className="btn btn-danger" onClick={ ()=>{ history.goBack(); } }>뒤로가기</button> */}

    //       </div>
    //     </div>
    //   </div>       
    // )


  }

  function InfoStock(props){
    return(
      <p>남은 수량 : {props.stock} 개</p>
    )
  }

  export default Detail;
  