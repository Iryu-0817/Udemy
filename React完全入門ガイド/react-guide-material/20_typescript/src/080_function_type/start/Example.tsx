const Example = () => {
  // TypeScriptでは、関数の引数に必ず型を指定する。でないとエラーになる
  function sum1(x: number, y: number = 1): void {
    // voidは戻り値がない場合に使うs
    console.log(y);
    // return x + y;
  }

  // TypeScriptでは、因数は必ず定義した数だけ渡す必要がある。でないとエラーになる
  // もし、特定の引数だけ渡したい場合はデフォルト値を設定するか、：の前に?をつける。
  const result1 = sum1(1);
  console.log(result1);

  const sum2 = (x: number, y: number): number => {
    return x + y;
  };
  const result2 = sum2(10, 20);
  console.log(result2);

  //typeエイリアスを使って関数の型を定義する
  type Sum = (x: number, y: number) => number;
  const sum3: Sum = (x, y) => x + y;
  const result3 = sum3(100, 200);
  console.log(result3);
};

export default Example;
