import { Switch, Route, useLocation } from 'react-router-dom';
import MainCard from '../components/template/MainCard';

import HomeMain from '../components/home/HomeMain';
import Journey from '../components/journey/Journey';

function Home() {
  const { pathname } = useLocation();
  console.log(pathname)
  return (
    <MainCard>
      <Switch>
        {/* <Route path={`${pathname}/`} exact component={HomeMain} /> */}
        <Route path={`${pathname}`} exact component={Journey} />
        {/* <Route path={`${pathname}/random`} exact component={() => <div>둘러보기</div>} />
        <Route path={`${pathname}/favorites`} exact component={() => <div>즐겨찾기</div>} /> */}
      </Switch>
    </MainCard>
  );
}

export default Home;
