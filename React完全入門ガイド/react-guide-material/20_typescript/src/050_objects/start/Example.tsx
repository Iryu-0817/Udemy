const Example = () => {
  const arry1: number[] = [1, 2, 3]; // number型の配列
  const arry2: string[] = ["hello", "bye"]; // number型の配列
  const arry3: Array<number> = [1, 2, 3]; // number型の配列
  const arry4: (string | number)[] = [1, "bye"]; // number型の配列
  const arry5: Array<string | number> = [1, "bye"]; // number型の配列

  type Person = { name: string; age?: number };
  const obji1: Person = { name: "Taro" };

  const users: Person[] = [
    { name: "Taro" },
    { name: "Jiro", age: 30 },
    { name: "Saburo", age: 20 },
  ];
};

export default Example;
