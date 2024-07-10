import { useState } from "react";

const Example = () => {
  const numArray = [1, 2, 3, 4, 5];
  const [nums, setNums] = useState(numArray);
  const shuffle = () => {
    const newNums = [...nums]; //新しい配列を作成
    const value = newNums.pop(); //配列の最後の要素を削除
    newNums.unshift(value); //削除した要素を配列の最初に追加

    setNums(newNums); //新しい配列をセット
  };
  return (
    <>
      <h1>{nums}</h1>
      <button onClick={shuffle}>Shuffle</button>
    </>
  );
};

export default Example;
