//　　　　　　　　　　　　　　　　　　 〜配列の代入〜

// const arry = ["配列1", "配列2", "配列3"];
// console.log(arry[0]);
// console.log(arry[2]);

const [a,,c] = ["配列1", "配列2", "配列3"];
console.log(a);
console.log(c);





// 　　　　　　　　　　　　　　　　　　〜プロパティの代入〜

// こっちはプロパティ名に格納されているため、[a,b,c]と違い、順番を逆にしても適用される
// []と{}の違いに注意！！！！！
// const obj = { x: "オブジェクト1", y: "オブジェクト2", z: "オブジェクト3" };
// console.log(obj.x);
// console.log(obj.y);

const {z , x} = { x: "オブジェクト1", y: "オブジェクト2", z: "オブジェクト3" };
console.log(x);
console.log(z);








const arr = ["Japan", "Tokyo", "Shinjuku"];
const objAddress = { country: "Japan", state: "Tokyo", city: "Shinjuku" };

// ”arr”が順番に country, state, city ]に代入されている
const fnArr = ([ country, state, city ]) => {
  console.log("---配列---");
  console.log(`country: ${country}`);
  console.log(`state: ${state}`);
  console.log(`city: ${city}`);
};

const fnObj = ({country, state, city}) => {
  console.log("---オブジェクト---");
  console.log(`country: ${country}`);
  console.log(`state: ${state}`);
  console.log(`city: ${city}`);
};

fnArr(arr);
fnObj(objAddress);
