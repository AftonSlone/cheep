import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import Index from "./components/Index/Index";
import ProtectedRoute from "./components/Auth/ProtectedRoute";
import { authenticate } from "./store/session";
import Home from "./components/Home/Home";
import ReplyHome from "./components/reply/ReplyHome";

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

  return (
    <BrowserRouter>
      <Index />
      <Switch>
        <ProtectedRoute path="/cheep/:id">
          <ReplyHome />
        </ProtectedRoute>
        <ProtectedRoute path="/home" exact={true}>
          <Home />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
