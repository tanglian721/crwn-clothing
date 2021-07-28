import React from "react";

import { Switch, Route, Link} from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";

const HatsPage = (props) => (
  <div>
    <h1> Hats Page</h1>
    <Link to={`${props.match.url}/17`}>detail hats 17</Link>
    <Link to={`${props.match.url}/21`}>detail hats 21</Link>
  </div>
);
const DetailPage = props => {
  console.log(props.match.params.hatId);
  return(<div>
    <h1>Detail Hats Page</h1>
    <h2>{props.match.params.hatId}</h2>
  </div>
  )};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/hats" component={HatsPage} />
        <Route path="/hats/:hatId" component={DetailPage} />
      </Switch>
    </div>
  );
}

export default App;
