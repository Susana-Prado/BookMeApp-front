import { Route, Switch } from 'react-router-dom';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Navigation from './components/Navigation/Navigation';
import SignUp from './pages/SignUp/SignUp';
import './App.css';
import Search from './pages/SearchPage/Search';
import HomePage from './pages/HomePage/HomePage';
import VenueDetails from './pages/VenueDetails/VenueDetails';
import Login from './pages/Login/Login';
import PromoterProfile from './pages/PromoterProfile/PromoterProfile';
import VenueProfile from './pages/VenueProfile/VenueProfile';
import SignUpPromoter from './pages/SignUpPromoter';
import SignUpVenue from './pages/SignUpVenue';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/signup-promoter" component={SignUpPromoter} />
        <Route exact path="/signup-venue" component={SignUpVenue} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/venue-profile" component={VenueProfile} />
        <Route exact path="/promoter-profile" component={PromoterProfile} />
        <Route path="/search" component={Search} />
        <Route exact path="/venue/:id" component={VenueDetails} />
        <Route path="*" component={ErrorPage} />
      </Switch>
    </div>
  );
}

export default App;
