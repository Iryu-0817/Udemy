

export const hello = () => {
  console.log("hello!");
};

const funcB = () => {
  console.log("funcB output");
};

// この方法でexportするのは一つのファイルで一つだけ
export default funcB;

class User {
  constructor(name) {
    this.name = name;
  }

  hello() {
    console.log(this.name);
  }
}

export { User }
