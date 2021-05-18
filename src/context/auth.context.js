import React from 'react';
import AuthService from '../services/auth.service';


const { Consumer, Provider } = React.createContext();

class AuthProvider extends React.Component {
  state = {
    isLoggedIn: false,
    isLoading: true,
    user: null,
  };

  authService = new AuthService();

  async componentDidMount() {
    try {
      const result = await this.authService.isLoggedIn();
      if (result) {
        console.log(result);
        this.setState({
          isLoggedIn: true,
          isLoading: false,
          user: result.data,
        });
      }
    } catch (err) {
      this.setState({ isLoggedIn: false, isLoading: false, user: null });
    }
  }


  signup = (data) => {
    this.authService
      .signup(data)
      .then((response) =>
        this.setState({ isLoggedIn: true, user: response.data })
      )
      .catch((err) => this.setState({ isLoggedIn: false, user: null }));
  };

  signupVenue = (data) => {
    this.authService
      .signupVenue(data)
      .then((response) =>
        this.setState({ isLoggedIn: true, user: response.data })
      )
      .catch((err) => this.setState({ isLoggedIn: false, user: null }));
  };

  login = (data) => {
    this.authService
      .login(data)
      .then((response) =>
        this.setState({ isLoggedIn: true, user: response.data })
      )
      .catch(() => this.setState({ isLoggedIn: false, user: null }));
  };

  logout = () => {
    this.authService
      .logout()
      .then(() => this.setState({ isLoggedIn: false, user: null }))
      .catch((error) => console.error(error));
  };

  render() {
    const { isLoggedIn, isLoading, user } = this.state;

    if (isLoading) return <p>Loading...</p>;

    return (
      <Provider
        value={{
          isLoading,
          isLoggedIn,
          user,
          signup: this.signup,
          signupVenue: this.signupVenue,
          login: this.login,
          logout: this.logout,
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

const withAuth = (WrappedComponent) => {
    return function(props){
      return (
        <Consumer>
          {value => {
            const { isLoading, isLoggedIn, user, signup, login, logout, signupVenue } =
              value;
  
            return (
              <WrappedComponent
                isLoggedIn={isLoggedIn}
                isLoading={isLoading}
                user={user}
                signup={signup}
                login={login}
                logout={logout}
                signupVenue={signupVenue}
                {...props}
              />
            );
          }}
        </Consumer>
      );
    };
  };

export {AuthProvider, withAuth};
