import './HomePage.css';
import React from 'react';
import LogoImage from '../../resources/img/logo_test03.jpeg.jpg';
import Calendar from '../../resources/img/calendar.jpg';
import Rock from '../../resources/img/rock-music-icon-11.jpg.png';
import Folder from '../../resources/img/pngfind.com-music-icon-png-3250821.png';
import Footer from '../../components/Footer/Footer';

export default function HomePage() {
  return (
    <div className="home-page-container">
      <section className="first-section">
        <h1>BookMeApp is your app for Live Music venue's reservation</h1>
        <h2>Built by music professionals for music professionals</h2>
      </section>
      <section className="second-section">
        <p>
          Promoters and venues everywhere can manage all of their events.
          Everything you need is in one place, accessible in a few clicks.
        </p>
        <div className="second-flex">
          <img src={LogoImage} />
          <div className="descriptions">
            <p>Book your venues easily</p>
            <p>Sign up as a promoter or as a venue</p>
            <p>Manage your bookings</p>
          </div>
        </div>
      </section>
      <section className="third-section">
        <div className="logos-cont">
          <img src={Calendar} alt="calendar" />
          <h3>Manage your calendar</h3>
          <p>Manage holds for all of your rooms and shows</p>
        </div>
        <div className="logos-cont">
          <img src={Rock} alt="calendar" />
          <h3>Settle shows</h3>
          <p>Settle your shows as they go</p>
        </div>
        <div className="logos-cont">
          <img src={Folder} alt="calendar" />
          <h3>Edit your bookings</h3>
          <p>See all the information in your dashboard</p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
