import React from "react";
import "./App.css";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import NewArticle from "./Components/NewArticle/NewArticle";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import SingleArticle from "./Components/SingleArticle/SingleArticle";
import Tags from "./Components/Tags/Tags";
import Settings from "./Components/Settings/Settings";
import Profile from "./Components/Profile/Profile";
import Comments from "./Components/Comments/Comments";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Register" component={Register} />
            <Route path="/Login" component={Login} />
            <Route path="/NewArticle" component={NewArticle} />
            <Route path="/SingleArticle/:slug" component={SingleArticle} />
            <Route path="/Tags/:tag" component={Tags} />
            <Route path="/Settings" component={Settings} />
            <Route path="/Profile/:username" component={Profile} />
            <Route path="/Comments/:slug" component={Comments} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
