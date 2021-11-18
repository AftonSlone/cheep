import React from "react";
import { IndexButton } from "../../Styles/Index/IndexButton.style";
import { IndexContainer } from "../../Styles/Index/IndexContainer.style";
import { IndexLeft } from "../../Styles/Index/IndexLeft.style";
import { IndexRight } from "../../Styles/Index/IndexRight.style";

const Index = () => {
  return (
    <IndexContainer>
      <IndexLeft>
        <img src="https://www.pinclipart.com/picdir/big/539-5394460_twitter-splash-icon-png-image-free-download-searchpng.png" />
      </IndexLeft>
      <IndexRight>
        <h1>Happening now</h1>
        <h2>Join Cheep Today.</h2>
        <IndexButton>Sign up</IndexButton>
        <IndexButton backgroundColor="#14171A">Log In</IndexButton>
      </IndexRight>
    </IndexContainer>
  );
};

export default Index;
