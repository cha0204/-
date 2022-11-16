import React, {useState} from 'react';

function Count(props) {

  const [num, setNum] = useState(0);  //기본값 0
  const price = 7300;
  const total_price = price * num;
  
  //1씩 증가 함수
  const onIncrease = () => {
    setNum(num+1);
  }
  //1씩 감소함수
  const onDecrease = () => {
    if(num===0){
    setNum(num-1);
    }else{
      setNum(num-1)
    }
  }

  const style={
    width:'100px',
    padding:'10px',
    margin:'10px',
    border:'3px solid #f00'
  }
  return (
    <>
      <div style={style}>
        <h2>값변화 : {num}</h2>
        <input type='button' value='+' onClick={onIncrease}/>
        <input type='button' value='-' onClick={onDecrease}/>
        <p>상품 가격 : 7,300,원</p>
        <p>{total_price}원</p>
      </div>
    </>
  );
}

export default Count;