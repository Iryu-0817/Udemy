import React from "react";
import { text } from "stream/consumers";

type HelloProps = {
  text: string;
  children?: React.ReactNode;
};
const Hello: React.FC<HelloProps> = (props) => {
  return (
    <div>
      Hello, {props.text}! {props.children}
    </div>
  );
};

type FnProps = {
  fn: (text: string) => void;
};
export const Btn: React.FC<FnProps> = (props) => {
  return <button onClick={() => props.fn("TypeScript")}>Click</button>;
};
export default Hello;
