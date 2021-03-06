import { Route } from 'react-router-dom';
import MainCard from '../components/template/MainCard';

import HomeMain from '../components/home/HomeMain';
import Journey from '../components/journey/Journey';
import JourneyDetail from '../components/journeyDetail/JourneyDetail';
import WriteJourney from '../components/writeJourney/WriteJourney';
import Random from '../components/random/Random';
import ActivityLog from '../components/activityLog/ActivityLog';
import Recent from '../components/recent/Recent';

function Home() {
  return (
    <MainCard>
      <Route path="/home" component={HomeMain} />
      <Route exact path="/journey" component={Journey} />
      <Route exact path="/journey/:id" component={JourneyDetail} />
      <Route path="/write-journey" component={WriteJourney} />
      <Route path="/log" exact component={ActivityLog} />
      <Route path="/random" exact component={Random} />
      <Route path="/favorites" exact component={() => <div>마이페이지</div>} />
      <Route path="/recent" exact component={Recent} />
    </MainCard>
  );
}

export default Home;
