class User {
  public name: string; //publicはアクセス権
  private age: number; //privateはクラス内でのみアクセス可能

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const Example = () => {
  const user = { name: "Ryuya", age: 21 };
  const user2 = new User("Ryuya", 21);

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
    </div>
  );
};
export default Example;
