import { HashRouter, Route } from 'react-router-dom';

import Template from './components/template/Template';

import Home from './pages/Home';

function Router() {
  return (
    <HashRouter>
      <Template>
        <Route path="/" exact component={Home} />
      </Template>
    </HashRouter>
  );
}

export default Router;
