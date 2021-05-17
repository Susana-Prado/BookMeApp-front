import { Route, Switch } from 'react-router-dom';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Navigation from './components/Navigation/Navigation';
import SignUp from './pages/SignUp';
import SignUpDetails from './pages/SignUpDetails';
import './App.css';
import Search from './pages/SearchPage/Search';
import HomePage from './pages/HomePage/HomePage';
import VenueDetails from './pages/VenueDetails/VenueDetails';

function App() {
  return (
    <div className="App">
    <Navigation/>
      <Switch>
        {/*   
        <Route exact path='/login' component={Login}  />
        <Route exact path='/promoter-profile' component={Profile}  />
        <Route exact path='/venue-profile' component={Profile}  />
        */}
        <Route exact path='/' component={HomePage}  />
        <Route exact path='/signup-promoter' component={SignUpDetails}  />
        <Route exact path='/signup-venue' component={SignUpDetails}  />
        <Route exact path='/signup' component={SignUp}  />
        <Route path="/search" component={Search} />
        <Route exact path='/venue/:id' component={VenueDetails}  /> 
        <Route path="*" component={ErrorPage} />
      </Switch>
    </div>
    
  );
}

export default App;
