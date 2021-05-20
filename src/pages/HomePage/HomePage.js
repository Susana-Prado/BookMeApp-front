import './HomePage.css';
import React from 'react';
import LogoImage from '../../resources/img/logo_test03.jpeg.jpg';
import Calendar from '../../resources/img/calendar1.png';
import Rock from '../../resources/img/rock-music-icon-11.jpg.png';
import Folder from '../../resources/img/pngfind.com-music-icon-png-3250821.png';
import Footer from '../../components/Footer/Footer';
import Video from '../../resources/video/Pexels Videos 2022396.mp4';

export default function HomePage() {
  return (
    <div className="home-page-container">
      <section className="first-section">
        <video
          src={Video}
          autoPlay="autoplay"
          loop="loop"
          preload="auto"
          type="video/mp4"
        ></video>
        <div className="titles">
          <h1>BookMeApp</h1>
          <h2>Your app for Live Music venue's reservation.</h2>
          <h3>Built by music professionals for music professionals</h3>
        </div>
      </section>
      <section className="second-section">
        <hr />
        <h2>Why us?</h2>
        <hr />
        <p>
          Our mission is to help you to settle gigs as quickly and easily as
          possible. BookMeApp offers promoters an easy way to book venues by
          simplifying the process and helps venues to manage their
          availabilities. Everything you need is in one place, accessible in a
          few clicks.
        </p>
        <hr />
      </section>
      <section className="fourth-section">
        <div className="logos-cont">
          <div className="image">
            <img src={Calendar} alt="calendar" />
          </div>
          <h3>Manage your calendar</h3>
          <p>Manage holds for all of your rooms and shows</p>
        </div>
        <div className="logos-cont">
          <div className="image">
            <img src={Rock} alt="calendar" />
          </div>
          <h3>Settle shows</h3>
          <p>Book your venues and settle your shows as they go</p>
        </div>
        <div className="logos-cont">
          <div className="image">
            <img src={Folder} alt="calendar" />
          </div>
          <h3>Edit your bookings</h3>
          <p>See all the information in your dashboard</p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
