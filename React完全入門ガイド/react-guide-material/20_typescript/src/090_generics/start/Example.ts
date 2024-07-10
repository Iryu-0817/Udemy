// ジェネリックスとは、型引数を受け取る関数を作る機能のことを指す。
const Example = () => {
  const repeatStr = (value: string, times: number): string[] => {
    return new Array(times).fill(value);
  };
  const repeatNum = (value: number, times: number): number[] => {
    return new Array(times).fill(value);
  };

  const repeat = <T>(value: T, times: number): T[] => {
    return new Array(times).fill(value);
  };
  const numArry = repeat<number>(1, 3);
  const numArry2 = repeat(1, 3); // 型推論により省略可能
  const strArry = repeat<string>("hello", 3);
  const boolArry = repeat<boolean>(true, 3);
  const byeArry = repeat<"bye">("bye", 3); // リテラル型も指定可能
};

export default Example;
