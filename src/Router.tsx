import { BrowserRouter, Route } from 'react-router-dom';

import Template from './components/template/Template';

import Home from './pages/Home';
import Auth from './pages/Auth';

function Router() {
  return (
    <BrowserRouter>
      <Template>
        <Route path="/auth" component={Auth} />
        <Route path="/" component={Home} />
      </Template>
    </BrowserRouter>
  );
}

export default Router;
