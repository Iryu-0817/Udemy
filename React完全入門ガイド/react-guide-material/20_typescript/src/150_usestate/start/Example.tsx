import { useState } from "react";

type User = {
  name: string;
  age: number;
};

const Example = () => {
  const [text, setText] = useState<string>("Hello, world!");
  useState(0);

  const [animal, setAnimal] = useState<User[]>([{ name: "Taro", age: 30 }]);
};

export default Example;
