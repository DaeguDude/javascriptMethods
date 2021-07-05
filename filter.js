function filter(array, callbackFn) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    const currentItem = array[i];

    // 콜백함수가 true인지 false인지 가르쳐줄 것이다.
    const isTrue = callbackFn(currentItem, i, array);
  }

  return result;
}

const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];
const callbackFn = (word) => {
  console.log(word.length > 6);
};

filter(words, callbackFn);

// callback Fn은 테스트를 할 코드를 준다.
// 테스트의 결과값은 항상 true | false 이다.
// 결과값이 true라면 반환할 array에 포함
// 아니라면 포함시키지 않는다.

// callback 함수는 true로 될 수 있는 값을
// 반환하여야 한다.
