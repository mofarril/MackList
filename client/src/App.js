import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import User from "./pages/user";
import Login from "./pages/logIn"
import Signup from "./pages/signUp"
import Navbar from "./components/Navbar"
import axios from "axios"
import UserPost from "./pages/user-post";
// import Post from "./pages/post";
// import UserPost from "./pages/user-post";
class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser(userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/api/users/').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }

render() {
  return (
<div className="App">
    <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} user={this.state.username}/>
         {/* greet user if logged in: */}
        {/* {this.state.loggedIn &&
          <p>Join the party, {this.state.username}!</p>
        } */}
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/user" component={User} />
          <Route exact path="/login" render={() =>
            <Login
              updateUser={this.updateUser}
            />}/>
          <Route exact path="/user-post" component={UserPost} />
          <Route exact path="/signup" component={Signup} />
          {/* <Route exact path="/user/post" component={UserPost} />
          <Route exact path="/post" component={Post} /> */}
          {/* <Route component={NoMatch} /> */}
        </Switch>
        </div>
        </Router>
      </div>

    );
  }
}

export default App;
