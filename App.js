import React, { useState } from 'react';
import Count from './Count';
import InputTest from './InputTest';
import Exec from './Exec';

function App(props) {
  return (
    <>
      <h2>useState()함수를 통한 데이터 값 관리</h2>
      <p>클래스형 컴호넌트는 state값을 바로 사용가능 했습니다. 하지만 함수형 컴포넌트에서는 state값을 사용할 수 없었는데, 리액트 16.8이상부터는 useState()함수가 추가되어 함수형 컴포넌트에서도 state값을 사용할 수 있게 되었습니다.</p>
      <p>state는 자신 컴포넌트가 유동적으로 변경될 값을 관리 할  때 사용합니다.</p>
      <p>useState()함수 사용시 import React, {useState} 함수를 추가해야한다.</p>

    <pre>
      const [값변수,값변수함수] = useState(기본값);
      const 값변경함수 = ()

      const 스테이트갖고오는 변수 = useState(기본값);
      const 스테이트값 변수 = 스테이트 갖고 오는 변수[0];
      const 변경될 스테이트값 변수 = 스테이트 갖고오는 변수[1];
    </pre>

    <Count/>

    <h2>입력상자를 통한 데이터값 관리하기</h2>
    <p>앞에서 form태그를 사용하여 작업했던 내용 참조</p>
    <p>입력상자(input)에 데이터를 입력하면 다른 요소에 데이터로 바로 보여주는 내용 만들기</p>

    <InputTest/>
    <hr/>
    <Exec/>
    </>
  );
}

export default App;