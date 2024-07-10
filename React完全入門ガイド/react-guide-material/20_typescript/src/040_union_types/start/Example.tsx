const Example = () => {
  let strOruNum: string | number = "Hello, world!"; //文字列か数値のどちらかを代入できる
  strOruNum = 102;
  console.log(strOruNum);

  let strOrNumOrBool: string | number | boolean = "Hello, world!"; //文字列か数値か真偽値のどれかを代入できる
  strOrNumOrBool = true;
  console.log(strOrNumOrBool);

  let helloOrNumOrBool: "Hello" | number | boolean = false;
  console.log(helloOrNumOrBool);

  type HelloOrNum = "Hello" | number;
  const hello: HelloOrNum = "Hello";
  console.log(hello);

  type DayOfWeek =
    | "Sunday"
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday";

  const day: DayOfWeek = "Monday";
  console.log(day);
};

export default Example;
