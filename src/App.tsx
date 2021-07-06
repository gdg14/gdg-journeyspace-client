import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route path="/" exact component={() => <div>test</div>} />
    </Switch>
  );
}

export default App;
