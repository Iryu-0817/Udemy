const Example = () => {
  const clickHandler = () => {
    alert("Clicked!");
  };
  const clickHandler2 = () => {
    console.log("Clicked!");
  };
  return (
    <>
      <button onClick={clickHandler}>Click here!</button>
      <button onClick={clickHandler2}>Click here!</button>
    </>
  );
};

export default Example;
