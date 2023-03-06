import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img loading="lazy" src={`${PUBLIC_URL}/images/MyImage.png`} alt="" />
      </Link>
      <header>
        <h2>Baraa Alsher</h2>
        <p><a href="mailto:alsher.info@gmail.com<">alsher.info@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
<p>
  Hello, I'm Baraa, a front-end developer with a passion for creating beautiful, user-friendly websites.

</p>

      {/* <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul> */}
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Baraa &apos;Alsher </p>
    </section>
  </section>
);

export default SideBar;
