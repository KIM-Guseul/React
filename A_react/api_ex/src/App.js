
import './App.css';
import {print as 첫번째함수, print2, print3, print4} from "./common/hooks/example"
import { useEffect, useState } from 'react';
import Child from './Child';

function App() {

  const [name, setName] = useState("최재호");
  const [age, setAge] = useState(29);

  return (
    <div className="App">
      <button onClick={
        ()=>{setName("김구슬")}
      }>이름바꾸기</button>
      <button onClick={
        ()=>{setAge(25)}
      }>나이바꾸기</button>
      <Child name={name} age={age}/>
    </div>
  );
}

export default App;
