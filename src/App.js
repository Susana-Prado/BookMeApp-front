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
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AnonRoute from './components/AnonRoute/AnonRoute';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <AnonRoute exact path="/signup" component={SignUp} />
        <AnonRoute exact path="/signup-promoter" component={SignUpPromoter} />
        <AnonRoute exact path="/signup-venue" component={SignUpVenue} />
        <AnonRoute exact path="/login" component={Login} />
        <PrivateRoute exact path="/venue-profile" component={VenueProfile} />
        <PrivateRoute exact path="/promoter-profile" component={PromoterProfile} />
        <Route exact path="/search" component={Search} />
        <PrivateRoute exact path="/venue/:id" component={VenueDetails} />
        <Route path="*" component={ErrorPage} />
      </Switch>
    </div>
  );
}

export default App;
