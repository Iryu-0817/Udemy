import { useState } from "react";

const Example = () => {
  const personObj = { name: "Tom", age: 18 };
  const [person, setPerson] = useState(personObj);

  const changeName = (e) => {
    setPerson({ ...person, name: e.target.value }); //obj(useStateと同じ構造)で渡す必要がある. ageはそのまま.
  };
  const changeAge = (e) => {
    setPerson({ ...person, age: e.target.value }); //obj(useStateと同じ構造)で渡す必要がある. ageはそのまま.
  };
  const reset = () => {
    setPerson({ name: "", age: "" }); //obj(useStateと同じ構造)で渡す必要がある. ageはそのまま.
  };

  return (
    <>
      <h3>名前: {person.name}</h3>
      <h3>年齢: {person.age}</h3>
      <input type="text" value={person.name} onChange={changeName} />
      <input type="number" value={person.age} onChange={changeAge} />
      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </>
  );
};

export default Example;
