import { HashRouter, Route } from 'react-router-dom';

import Template from './components/template/Template';

import Home from './pages/Home';
import Auth from './pages/Auth';

function Router() {
  return (
    <HashRouter>
      <Template>
        <Route path="/login" exact component={Auth} />
        <Route path="/" exact component={Home} />
      </Template>
    </HashRouter>
  );
}

export default Router;
