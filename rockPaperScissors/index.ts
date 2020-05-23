let imgCoords: RSP[keyof RSP] = '0';

interface Example {
  [key: string]: number; // 어떤것이 들어올지 모를때
}

interface RSP {
  readonly ROCK: string,
  readonly SCISSORS: string,
  readonly PAPER: string,
}

const rsp: RSP = {
  ROCK: '0',
  SCISSORS: `-142px`,
  PAPER: `-284px`,
}

const score = {
  ROCK: 0,
  SCISSORS: 1,
  PAPER: -1,
} as const;

// 'ROCK' | 'SCISSORS' | 'PAPER' // union
function computerChoice(imgCoords: RSP[keyof RSP]): keyof RSP {
  return (Object.keys(rsp) as ['ROCK', 'SCISSORS', 'PAPER']).find((k) => rsp[k] === imgCoords)!
  // 튜플
  // ! 이것은 무조건 값이 있어! (undefined를 없애줄려면)
  // 안쓰는 방법도 있음
} 

document.querySelectorAll('.btn').forEach((btn) => {
  btn.addEventListener('click', function(this: HTMLButtonElement, e: Event){
    const myChoise = this.textContent as keyof RSP; // as를 사용해 타입을 강제, 정확하게 맞춰준다. 변환해 준다.
    const myScore = score[myChoise];
    const computerScore = score[computerChoice(imgCoords)];
    const diff = myScore - computerScore;

    if(diff === 0 ){
      console.log('비겼습니다');
    }else if([-1, 2].indexOf(diff)){
      console.log('이겼습니다');
    }else {
      console.log('졌습니다');
    }

  });
});