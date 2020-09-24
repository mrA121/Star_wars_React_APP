import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { signIn } from "../../Store/action/action";

function SignIn() {
  const [userName, setUserName] = useState("");
  const [pass, setPass] = useState("");
  const [login, setLogin] = useState(false);
  const [err, setErr] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    async function fetchData() {
      const request = await axios
        .get(`https://swapi.dev/api/people/?search=${userName}`)
        .then((res) => {
          const person = res.data.results.find(
            (person) => person.name === userName
          );
          if (person.birth_year === pass) {
            setLogin(true);
            dispatch(signIn(userName));
          } else {
            setErr("Your galaxy password was incorrect");
            console.log("ERRROR PASSCODE INCORRECT");
          }
        })
        .catch((err) => {
          console.log(err);
        });
      return request;
    }
    fetchData();
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-2">Sign In</h5>
        <div className="input-field username_input">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPass(e.target.value)}
          />
        </div>
        <div className="input-field">
          <button className="btn blue lighten-2 z-depth-1">Sign In</button>
        </div>
        <div className="red-text">{err && <h4>{err}</h4>}</div>
        {login && <Redirect to="/search" />}
      </form>
    </div>
  );
}

export default SignIn;