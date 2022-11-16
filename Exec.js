import React, {useState} from 'react';

function Exec(props) {
  const style={
    width:'300px',
    padding:'10px',
    margin:'10px',
    border:'3px solid #ff0'
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

      //3개의 입력값을 입력받아 내용 출력하기
   const {usermap, username, userschool} = inputs;


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
      usermap:"",
      userschool:""
    });
   }

  return (
    <>
        <div style={style}>
      <input type="text" paceholder='입력하세요' name='username' value={username} onChange={onDataChange}/>
      <input type="text" placeholder='입력하세요' name='usermap' value={usermap} onChange={onDataChange}/>
      <input type="text" placeholder='입력하세요' name='userschool' value={userschool} onChange={onDataChange}/>
      <input type="button" value="데이터 리셋" onClick={onDateReset2}/>
      </div>
        <p>이름은 "{username}"이고 사는 곳은 "{usermap}"이며 학교는 "{userschool}"입니다.</p>
    </>
  );
}

export default Exec;