//型エイリアスについて学ぶ
// TypeScriptでは、type文を用いて型に別名をつけることができる。これを型エイリアス(type alias)と呼ぶ

const Example = () => {
  // type文はパスカルケース(大文字で始まる)で記述する
  type User = {
    name: string;
    age: number;
  };

  const user: User = {
    name: "Taro",
    age: 12,
  };

  type UserName = string;
  type UserAge = number;
  type UserGender = "man" | "woman" | "others";

  type UserProfile = {
    name: UserName;
    age: UserAge;
    gender: UserGender;
  };

  const userProfile: UserProfile = {
    name: "Hanako",
    age: 23,
    gender: "woman",
  };
};

export default Example;
