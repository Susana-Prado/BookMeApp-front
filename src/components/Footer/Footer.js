import { ModalFooter } from 'react-bootstrap';
import './Footer.css';
import Logo from '../../resources/img/logo_test03.jpeg.jpg';

const Footer = () => {
  return (
    <footer>
      <div className="footer-section">
        <h5>Contact</h5>
        <p>Telephone</p>
        <p>Email</p>
      </div>
      <div className="footer-section">
        <h5>Why Us</h5>
        <p>BookMeApp for Promoters</p>
        <p>BookMeApp for Venues</p>
      </div>
    </footer>
  );
};

export default Footer;
