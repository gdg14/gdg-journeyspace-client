import { Route } from 'react-router-dom';
import MainCard from '../components/template/MainCard';

import HomeMain from '../components/home/HomeMain';
import Journey from '../components/journey/Journey';
import Random from '../components/random/Random';

function Home() {
  return (
    <MainCard>
      <Route path="/home" component={HomeMain} />
      <Route path="/journey" component={Journey} />
      <Route path="/random" exact component={Random} />
      <Route path="/favorites" exact component={() => <div>즐겨찾기</div>} />
    </MainCard>
  );
}

export default Home;
