import { Switch, Route, useLocation } from 'react-router-dom';
import MainCard from '../components/template/MainCard';

import HomeMain from '../components/home/HomeMain';
import Journey from '../components/journey/Journey';
import JourneyDetail from '../components/journeyDetail/JourneyDetail';

function Home() {
  const { pathname } = useLocation();
  return (
    <MainCard>
        <Route path="/home" component={HomeMain} />
        <Route path="/journey" component={Journey} />
        <Route path="/journeyy/:id" component={JourneyDetail} />
        <Route path="/random" exact component={() => <div>둘러보기</div>}  />
        <Route path="/favorites" exact component={() => <div>즐겨찾기</div>}  />
    </MainCard>
  );
}

export default Home;
