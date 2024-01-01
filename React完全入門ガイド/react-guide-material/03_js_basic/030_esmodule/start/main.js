import { hello, User } from "./module.js"; 

// export default の場合だと{}はつけなくていい
import funcB from "./module.js";
hello();
funcB();

const user = new User ('Tom');
user.hello();