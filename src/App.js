import { Route, Switch } from 'react-router-dom';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Navigation from './components/Navigation/Navigation';
import Search from './pages/Search';


import './App.css';
import Search from './pages/Search';

function App() {
  return (
    <div className="App">
    <Navigation/>
      <Switch>
        {/* <Route exact path='/' component={Home}  />
        <Route exact path='/signup' component={SignUp}  />
        <Route exact path='/signup-promoter' component={SignUpDetails}  />
        <Route exact path='/signup-venue' component={SignUpDetails}  />
        <Route exact path='/login' component={Login}  />
        <Route exact path='/promoter-profile' component={Profile}  />
        <Route exact path='/venue-profile' component={Profile}  />

        <Route exact path='/results' component={Results}  />
        <Route exact path='/venue/:id' component={VenueDetails}  /> */}
        <Route path="/search" component={Search} />
        <Route path="*" component={ErrorPage} />
      </Switch>
    </div>
    
  );
}

export default App;
