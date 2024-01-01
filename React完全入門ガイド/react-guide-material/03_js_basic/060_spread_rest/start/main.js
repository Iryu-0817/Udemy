const nums = [3, 1, 4, 1, 5, 10, 2, 6];

// Math.maxは私た引数の中でどれが一番大きいか調べる
const result = Math.max(...nums);
console.log(result);


let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let newArr = [...arr1, ...arr2];
let newArr1 = arr1
newArr.push(4);
console.log(newArr, arr1);

const obj = {
  name: "Tom",
  age: 22,
};




const newObj = { ...obj };
// 新たに定義した'newObj'のnameは変更されるが、もとの'obj'変わらないのが、スプレッド演算子のいいところ！！
newObj.name = 'John';

console.log(newObj,obj);




// restAの（）内の要素が(...argA)という配列に代入され、関数ないで使用できるようになる。
const restA = (...argA) => console.log(argA);
restA(1, 3, 4)

// 特定の引数だけ定義したい場合は下記のように記入する：n = 1, argB = 3,4
const restB = (n, ...argB) => console.log(argB);
restB(1, 3, 4)
