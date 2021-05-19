import { ModalFooter } from 'react-bootstrap';
import './Footer.css';
import Logo from '../../resources/img/logo_test03.jpeg.jpg';

const Footer = () => {
  return (
    <footer>
      <div className="footer-section">
        <h5>Contact</h5>
        <p>Telephone: +34 65425895464</p>
        <p>
          <a href="mailto:info@bookmeapp.com">info@bookmeapp.com</a>
        </p>
      </div>
      <div className="footer-section">
        <h5>Why Us</h5>
        <p>
          <a href="#">BookMeApp for Promoters</a>
        </p>
        <p>
          <a href="#">BookMeApp for Venues</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
