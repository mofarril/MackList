import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import User from "./pages/user";
import Login from "./pages/logIn"
import Signup from "./pages/signUp"
// import Post from "./pages/post";
// import UserPost from "./pages/user-post";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/user" component={User} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          {/* <Route exact path="/user/post" component={UserPost} />
          <Route exact path="/post" component={Post} /> */}
          {/* <Route component={NoMatch} /> */}
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
