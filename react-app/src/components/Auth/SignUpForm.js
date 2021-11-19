import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../../store/session";
import { SignupFormContainer } from "../../Styles/Auth/SignupFormContainer.style";

const SignUpForm = ({ setSignupModal }) => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        setErrors(data);
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <SignupFormContainer onSubmit={onSignUp}>
      <div onClick={() => setSignupModal(false)}>X</div>
      <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>

      <input
        type="text"
        name="username"
        onChange={updateUsername}
        value={username}
      />

      <input type="text" name="email" onChange={updateEmail} value={email} />

      <input
        type="password"
        name="password"
        onChange={updatePassword}
        value={password}
      />

      <input
        type="password"
        name="repeat_password"
        onChange={updateRepeatPassword}
        value={repeatPassword}
        required={true}
      />

      <button type="submit">Sign Up</button>
    </SignupFormContainer>
  );
};

export default SignUpForm;
