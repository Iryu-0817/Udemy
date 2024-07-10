function fn(number) {
  return number * 2;
}

console.log(fn(2)); // 4

const fnArrow = (number) => {
 return number * 2;
}

console.log(fnArrow(2)); // 4


const fnArrowObj = number => ({ result: number * 2 });

console.log(fnArrowObj(2)); // { result: 4 }