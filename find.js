// find(callbackFn, thisArg);

// callbackFn(element, index, array)
// Object to use as this inside callbackFn

Array.prototype.myFind = function (callbackFn, thisArg) {
  // if (thisArg) {
  //   // 왜 bind가 안돼지?
  //   callbackFn = callbackFn.bind(thisArg);
  //   callbackFn();
  // }

  const array = this;
  for (let i = 0; i < array.length; i++) {
    const currentElem = array[i];
    if (callbackFn(currentElem, i, array)) {
      return currentElem;
    }
  }

  return undefined;
};

const arr1 = [5, 12, 8, 130, 44];
const findElemGreaterThan10 = (element) => element > 10;
const result1 = arr1.myFind(findElemGreaterThan10);

const arr2 = ["apple", "cherry", "banana"];
const findApple = (element) => element === "apple";
const result2 = arr2.find(findApple);

const arr3 = ["apple", "cherry", "banana"];
const findPare = (element) => element === "pear";
const result3 = arr3.find(findPare);
console.log(result3);
