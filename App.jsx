import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Nav } from "./components";
import { Home, Single, Write, Register, Settings, Login } from "./pages";
function App() {
  const user = false;
  return (
    <Router className="App">
      <Nav />
      <Switch>
        <Route exact path="/">
          {" "}
          <Home />
        </Route>
      </Switch>
      <Route path="/register">{user ? <Home /> : <Register />}</Route>
      <Route path="/login">{user ? <Home /> : <Login />}</Route>
      <Route path="/write">{user ? <Write /> : <Write />}</Route>
      <Route path="/settings">{user ? <Settings /> : <Register />}</Route>
      <Route path="/post/:postId">
        <Single />
      </Route>
      {/* <Single /> */}
      {/* <Write /> */}
      {/* <Register /> */}
      {/* <Login /> */}
      {/* <Settings /> */}
    </Router>
  );
}

export default App;
