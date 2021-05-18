import { Navbar, Nav, Container } from 'react-bootstrap';
import { withAuth } from '../../context/auth.context';

const Navigation = (props) => {
  return (
    <Navbar collapseOnSelect fixed="top" expand="sm" bg="dark" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {props.isLoggedIn ? (
            <Nav>
              <Nav.Link href="/">Home</Nav.Link>
              {props.user.capacity ? (
                <Nav.Link href="/venue-profile">Hi, {props.user.name}</Nav.Link>
              ) : (
                <Nav.Link href="/promoter-profile">Hi, {props.user.name}</Nav.Link>
              )}

              <Nav.Link onClick={() => props.logout()}>Logout</Nav.Link>
            </Nav>
          ) : (
            <Nav>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/signup">Signup</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default withAuth(Navigation);
