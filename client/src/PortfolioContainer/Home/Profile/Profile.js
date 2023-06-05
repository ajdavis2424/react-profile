import React from 'react';
import Typical from 'react-typical';
import ScrollService from '../../../utilities/ScrollService';
import './Profile.css';

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.linkedin.com/in/alexander-davis-3674716a/">
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a href="https://github.com/ajdavis2424">
                <i className="fa fa-github"></i>
              </a>
              <a href="https://www.youtube.com/channel/UCKNL0ZMFc0ELUTxp5mxHkVg">
                <i className="fa fa-youtube-square"></i>
              </a>
              <a href="https://twitter.com/AJDavis63561360">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {' '}
              Hello, I'm{' '}
              <span className="highlighted-text">Alexander J. Davis</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {' '}
              <h1>
                {' '}
                <Typical
                  loop={Infinity}
                  // array of items-- items to be displayed
                  steps={[
                    'Full-Stack Web Developer 🖥 ',
                    1000,
                    'M.B.A. 📜 ',
                    1000,
                    'MERN Stack Developer 🖱',
                    1000,
                    'SQL Developer 🔴',
                    1000,
                    'NoSQL Developer 📱',
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Building applications with full stack skills.
              </span>
            </span>
          </div>

          <div className="profile-options">
            <button
              className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              {' '}
              Hire Me{' '}
            </button>
            <a
              href="Full-Stack Resume 2021.pdf"
              download="Alexander J Davis.pdf"
            >
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>

        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
