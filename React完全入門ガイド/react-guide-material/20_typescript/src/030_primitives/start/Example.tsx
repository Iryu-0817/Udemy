const Example = () => {
  const str: string = "Hello, world!"; //文字列しか代入できない
  console.log(str);

  let num: number = 102; //数値しか代入できない
  console.log(num);

  let bignum: bigint = 103n; //bigintしか代入できない
  console.log(bignum);

  let bool: boolean = true; //真偽値しか代入できない
  console.log(bool);

  let nullish: null = null; //nullしか代入できない

  let undefinedValue: undefined = undefined; //undefinedしか代入できない

  //リテラル型
  let trueVal: true = true;
  let num123: 123 = 123;
};

export default Example;
