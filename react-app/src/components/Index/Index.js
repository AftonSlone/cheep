import { useState } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { IndexButton } from "../../Styles/Index/IndexButton.style";
import { IndexContainer } from "../../Styles/Index/IndexContainer.style";
import { IndexLeft } from "../../Styles/Index/IndexLeft.style";
import { IndexRight } from "../../Styles/Index/IndexRight.style";
import LoginForm from "../Auth/LoginForm";
import SignUpForm from "../Auth/SignUpForm";
import { Modal } from "../Modal/Modal";

const Index = () => {
  const [loginModal, setLoginModal] = useState(false);
  const [signupModal, setSignupModal] = useState(false);
  const user = useSelector((state) => state.session.user);

  if (user) {
    return <Redirect to="/home/home" />;
  }

  const login = () => {
    setLoginModal(true);
  };

  const signup = () => {
    setSignupModal(true);
  };

  return (
    <IndexContainer>
      <IndexLeft>
        <img
          src="https://www.pinclipart.com/picdir/big/539-5394460_twitter-splash-icon-png-image-free-download-searchpng.png"
          alt=""
        />
      </IndexLeft>
      <IndexRight>
        <h1>Happening now</h1>
        <h2>Join Cheep Today.</h2>
        <IndexButton onClick={signup}>Sign up</IndexButton>
        <IndexButton backgroundColor="#14171A" onClick={login}>
          Log In
        </IndexButton>
      </IndexRight>
      {loginModal && (
        <Modal type="edit">
          <LoginForm component={LoginForm} setLoginModal={setLoginModal} />
        </Modal>
      )}
      {signupModal && (
        <Modal type="edit">
          <SignUpForm setSignupModal={setSignupModal} />
        </Modal>
      )}
    </IndexContainer>
  );
};

export default Index;
