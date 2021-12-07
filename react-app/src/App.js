import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import Index from "./components/Index/Index";
import ProtectedRoute from "./components/Auth/ProtectedRoute";
import { authenticate } from "./store/session";
import Home from "./components/Home/Home";
import ReplyHome from "./components/reply/ReplyHome";
import ProfileHome from "./components/Profile/ProfileHome";
import Footer from "./components/Index/Footer";
import MentionHome from "./components/Mention/MentionHome";
import { HomeContainer } from "./Styles/Home/HomeContainer.style";
import Nav from "./components/Nav/Nav";
import NavRight from "./components/Nav/NavRight";
import { HomeCenter } from "./Styles/Home/HomeCenter.style";

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  const HomePage = ({ match }) => {
    return (
      <>
        <HomeContainer>
          <Nav />
          <HomeCenter>
            <Switch>
              <ProtectedRoute path={`${match.url}/cheep/:id`} exact={true}>
                <ReplyHome />
              </ProtectedRoute>
              <ProtectedRoute path={`${match.url}/home`} exact={true}>
                <Home />
              </ProtectedRoute>
              <ProtectedRoute path={`${match.url}/user/:id`} exact={true}>
                <ProfileHome />
              </ProtectedRoute>
              <ProtectedRoute
                path={`${match.url}/user/:id/mentions`}
                exact={true}
              >
                <MentionHome />
              </ProtectedRoute>
            </Switch>
          </HomeCenter>
          <NavRight />
        </HomeContainer>
        <Footer />
      </>
    );
  };

  return (
    <BrowserRouter>
      <Switch>
        <ProtectedRoute path="/home" component={HomePage} />
        <Route path="/">
          <Index />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
