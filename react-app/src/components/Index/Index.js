import { useState } from "react";
import { IndexButton } from "../../Styles/Index/IndexButton.style";
import { IndexContainer } from "../../Styles/Index/IndexContainer.style";
import { IndexLeft } from "../../Styles/Index/IndexLeft.style";
import { IndexRight } from "../../Styles/Index/IndexRight.style";
import LoginForm from "../Auth/LoginForm";
import SignUpForm from "../Auth/SignUpForm";
import Modal from "../Modal/Modal";

const Index = () => {
  const [loginModal, setLoginModal] = useState(false);
  const [signupModal, setSignupModal] = useState(false);

  const login = () => {
    setLoginModal(true);
  };

  const signup = () => {
    setSignupModal(true);
  };

  return (
    <IndexContainer>
      <IndexLeft>
        <img src="https://www.pinclipart.com/picdir/big/539-5394460_twitter-splash-icon-png-image-free-download-searchpng.png" />
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
        <Modal component={LoginForm} setLoginModal={setLoginModal} />
      )}
      {signupModal && (
        <Modal component={SignUpForm} setSignupModal={setSignupModal} />
      )}
    </IndexContainer>
  );
};

export default Index;
