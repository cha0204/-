import React, {useState} from 'react';

function InputTest(props) {
  const style = {
    width:'300px',
    padding:'10px',
    margin:'10px',
    border:'3px solid #f00'
  }
  const style1 = {
    width:'600px',
    padding:'10px',
    margin:'10px',
    border:'3px solid #00f'
  }
  //상태값을 저장하기 위한 기본값과 변수명
  const[text,setText] = useState(''); //초기값 없음

  const onTextChange = (e) => {
    setText(e.target.value); //이벤트를 받는 타겟의 value값
  }
  //데이터 리셋을 누르면 입력된 값이 초기화됨
  const onDataReset2 = () => {
    setText('');
  }
  //state값 관리하기
   const [inputs,setInputs] = useState({
    username:'',
    userid:''
    });

      //2개의 입력값을 입력받아 내용 출력하기
   const {username, userid} = inputs;


   //값이 변경되는 함수  - 타겟 2개
   const onDataChange = (e) => {
    const {value, name} = e.target
    setInputs({
      ...inputs, //기존 input객체를 복사
      [name] : value
    });
   }
   //값을 초기화하는 함수 
   const onDateReset2 = () => {
    setInputs({
      username:"",
      userid:""
    });
   }

  return (
    <>
    <div style={style}>
      <input type="text" onChange={onTextChange} value={text}/>
      <input type="button" value="데이터리셋" onClick={onDataReset2}/>
      <p>값 : {text}</p>
      </div>

      <hr/>

      <h3>입력폼 '이름','아이디' 입력하면 아래 내용 출력하기</h3>

    <div style={style1}>
      <input type="text" paceholder='이름을 입력하세요' name='username' value={username} onChange={onDataChange}/>
      <input type="text" placeholder='아이디 입력' name='userid' value={userid} onChange={onDataChange}/>
      <input type="button" value="데이터 리셋" onClick={onDateReset2}/>
      <p>값 : {username}({userid})</p>
    </div>
    </>
  );
}

export default InputTest;