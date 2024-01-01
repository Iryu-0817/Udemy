function print(fn) {
  const result = fn(2);
  console.log(result);
}


function fn(number = 3) {
    return number * 2;
  }

  // このコードを書くとここで処理が止まる

  print(fn);
  
  