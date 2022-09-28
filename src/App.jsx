// 그럼 어떻게 하냐?
import { useState } from 'react';//useState는 리액트에서 제공하는 유용한 함수중 하나. 전문용어로 리액트 훅이라고 한다
import './App.css';

function App() {
  let count = 0;

  const [count2, setCount2] = useState(0);//State 만들기
  /*
    useState는 배열을 반환함. 두가지가 들어있는데, 
    하나는 초기값(매개변수)을 담고있는 state 변수, 
    하나는 state 값을 바꿀 수 있게 도와주는 set 함수 2개
    state는 변수와는 다른개념이기 때문에 변수다루듯이 하면 안됨    
  */
  const increase = () => {
    count = count + 1;
    console.log('count : ', count);

    setCount2(count2 + 1);
    console.log('state count2 : ', count2);
    /*
      1. ?? 화면에선 1인데 왜 콘솔에선 0? 값이 한박자씩 늦다

      => state는 UI를 다시 바꿔줌. 이 작업은 비쌈
      모든 UI를 바꿔야하는 함수들(set 함수)을 다 모아서
      함수가 끝나면 처리
      => 비동기적 함수
      => 매우 주의해야한다

      2. count 값은 state 안쓸 땐 콘솔에서는 늘어나는게 잘 찍히더니 왜 계속 1?

      => state 값이 update 될 때마다 function App을 다시 실행시키면서
      (컴포넌트를 다시 실행시키니까) let count = 0; 부터 다시 실행되어
      변수가 다시 초기화되는 것!!(값이 저장이 안되는 것ㅜㅜ)

      => 그래서 변수는 잠깐 저장해놔도 되는 그런 것들만 변수로 쓰고 나머지 값을 잃어버려도 되는, 잠깐 쓸 애들만 변수로 쓸 것이다 나머지는 state로 쓸 것이다ㅏ
    */
  }

  return (
    <main>
      <div>{count}</div>
      <div>state:{count2}</div>
      <button onClick={increase}>증가</button>
    </main>
  );
}

export default App;

// import './App.css';

// export default function App() {
//   let cnt = 0;
//   const increase = () => {
//     cnt = cnt + 1;
//     console.log(cnt);
//   }
//   return (
//     <main>
//       <div>{cnt}</div>
//       <button onClick={increase}>증가</button>
//     </main>
//   )
// }

/*
  State의 개념을 볼 수 있는 코드.
  리액트가 왜 리액트일까?
  항상 HTML을 뿌리고 그 정보를 가져다가 자바스크립트로 업데이트하고..
  이게 너무 귀찮은거지
  변수 바꿨으면 알아서 업데이트해주면안돼?
  getElementById~ 이런 것도 쓰고싶지 않아. 오타도 잘나고.
  React! 무엇에 리액트를 하나? 바로 상태(State)에 반응을 한다!
  자동으로 값이 업데이트되면 UI도 업데이트 시켜주자!
  해서 나온게 리액트.
  근데 문제는 프로그래밍하면서 쓰는 수많은 변수들이 바뀔 때 마다 UI 업데이트를 하면
  컴퓨터가 터진다(그림그리는건 비싼 작업)
  그래서 이건 좀 아닌 것 같고..
  이걸 어떻게 처리하지? 해서나온게 State
  변수가 업데이트됐어? 그건 신경쓰지 않아
  근데 State가 업데이트됐어? 그럼 UI 렌더링을 해주자
  UI 렌더링 할 때 쓰기 좋은 state와 그냥 잠깐 값들고있기 좋은 변수를 분리한 것이다
  그래서 UI 업데이트 되게 하려면 뭘써야한다?
  State!!

  // 그럼 어떻게 하냐? 위 참고.
*/