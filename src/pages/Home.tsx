import { Switch, Route, useLocation } from 'react-router-dom';
import MainCard from '../components/template/MainCard';

function Home() {
  const { pathname } = useLocation();

  return (
    <MainCard>
      <Switch>
        <Route path={`${pathname}/`} exact component={() => <div>hihi</div>} />
      </Switch>
    </MainCard>
  );
}

export default Home;
