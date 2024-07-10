import { useState } from "react";

const Example = () => {
  let [val, setVal] = useState(); //valはuseStateの値、setValはuseStateの値を変更する関数
  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          // const setFn = valArry[1];
          setVal(e.target.value); // ここでuseStateの値が変更される
        }}
      />
      = {val}
    </>
  );
};

export default Example;
