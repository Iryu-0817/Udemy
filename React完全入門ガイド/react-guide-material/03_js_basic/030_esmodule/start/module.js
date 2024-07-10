export const hello = () => {
  console.log("hello!");
};
// hello関数が外部から利用できるようにexportする

const funcB = () => {
  console.log("funcB output");
};

export default funcB;
// funcB関数が外部から利用できるようにexportする　

class User {
  constructor(name) {
    this.name = name;
  }
}

export { User }
// Useクラスが外部から利用できるようにexportする
