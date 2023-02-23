import React, { useState } from "react";

type values = [string, string];
const Login = () => {
  const [username, setUSername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    let name = e.target.name;
    let value = e.target.value;
    name === "username" ? setUSername(value) : setPassword(value);
  };
  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    alert(`${username}and ${password}`);
  };
  return (
    <form onSubmit={submitHandler}>
      <label>username</label>
      <input
        type="text"
        name="username"
        value={username}
        onChange={changeHandler}
      ></input>
      <label>password</label>
      <input
        type="password"
        name="password"
        value={password}
        onChange={changeHandler}
      ></input>
      <button type="submit">Submit</button>
    </form>
  );
};
export default Login;
