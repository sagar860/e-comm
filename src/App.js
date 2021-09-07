import React, { useEffect } from "react";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./Login";
import Navbar from "./Navbar"
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";



function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
    
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
         
          <Route path="/login">
            <Login />
          </Route>
         
          <Route path="/">
            <Header />
            <Navbar/>
            <Home />
          </Route>
         
        </Switch>
      </div>
    </Router>
  );
}

export default App;
