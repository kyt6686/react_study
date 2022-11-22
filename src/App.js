/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {

  let [title ,change_title] = useState(["중미 본좌", "스트라이커 본좌", "쉐스쓸까"])
  let [ss, set_ss] = useState("쉐스 주요 능력치");
  let [good, add_good] = useState([0,0,0]);
  let [modal, set_modal] = useState(false);
  
  function ifClick(){
    add_good(good + 1)
  }

  return (
    <div className="App">
      <div className="black_nav">
        <h4>에펨하고싶다</h4>
      </div>

      <div className='list'>
      <button onClick={() => {let copy = [...title]; copy.sort(); change_title(copy);}}>정렬</button>
      <button onClick={() => {let copy = [...title]; copy[0]="홈그로운 본좌"; change_title(copy);}}>체인지👁</button>
      {/* <h4>{ title[0] } 
      <span onClick={ifClick}>👍</span> { good } 
      </h4>
        <p>벨링엄</p>
      </div>

      <div className='list'> 
         <h4>{ title[1] }</h4>
        <p>엔드릭</p>
      </div>

      <div className='list'>
        <h4 onClick={() => {if(modal == false){set_modal(true);} else{set_modal(false);}}}>{ title[2] }</h4>
        <p>쿨루셉스키</p> */}
      </div>

    {
      title.map(function(a, i){
        return(
          <div className='list'> 
          <h4 props_title_0={title[0]} onClick={() => {set_modal(!modal)}}>{ title[i] }</h4>
           <span onClick={()=>{let copy = [...good]; copy[i] = copy[i] + 1;
         add_good(copy);}}>👍</span> {good[i]}
          <p>엔드릭</p>
          {/* <button onClick={() => {let copy = [...title]; copy[i] = ss; change_title(copy)}}>글수정</button> */}
          </div>
        )
      })
    }

    {
      modal == true ? <Modal color="orange" ss={ss} title={title} change_title={change_title}/> : null
    }
        
    </div> 
  );
}

function Modal(props){
  return(
  <div className='modal' style={{background : props.color}}>
  <h4>{props.ss}</h4>
  <p>속가 오프더볼</p>
  <p>패스 슈팅</p>
  <button onClick={() => {let copy = props.title; copy[0] = props.ss; props.change_title(copy)}}>글수정</button>
</div>)
}

export default App;
