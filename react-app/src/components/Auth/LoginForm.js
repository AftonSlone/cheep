import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../store/session";
import { AuthButton } from "../../Styles/Auth/AuthButton.style";
import { LoginFormContainer } from "../../Styles/Auth/LoginFormContainer.style";

const LoginForm = ({ setLoginModal }) => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const demoLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login("demo@aa.io", "password"));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/home" />;
  }

  return (
    <LoginFormContainer>
      <div>
        <div onClick={() => setLoginModal(false)}>X</div>
      </div>
      <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>

      <input
        name="email"
        type="text"
        placeholder="Email"
        value={email}
        onChange={updateEmail}
      />

      <input
        name="password"
        type="password"
        placeholder="Password"
        value={password}
        onChange={updatePassword}
      />
      <AuthButton onClick={onLogin}>Login</AuthButton>
      <AuthButton onClick={demoLogin}>Demo Login</AuthButton>
    </LoginFormContainer>
  );
};

export default LoginForm;
