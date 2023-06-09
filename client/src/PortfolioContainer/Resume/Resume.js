import React, { useState, useEffect } from 'react';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import './Resume.css';

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ''}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + '-' + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ''}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ''}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: 'Education', logoSrc: 'education.svg' },
    { label: 'Work History', logoSrc: 'work-history.svg' },
    { label: 'Programming Skills', logoSrc: 'programming-skills.svg' },
    { label: 'Projects', logoSrc: 'projects.svg' },
    { label: 'Interests', logoSrc: 'interests.svg' },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: 'JavaScript', ratingPercentage: 85 },
    { skill: 'React JS', ratingPercentage: 85 },
    { skill: 'React Native', ratingPercentage: 85 },
    { skill: 'Express JS', ratingPercentage: 89 },
    { skill: 'Node JS', ratingPercentage: 89 },
    { skill: 'Mongo Db', ratingPercentage: 90 },
    { skill: 'Core Java', ratingPercentage: 60 },
    { skill: 'HTML', ratingPercentage: 80 },
    { skill: 'CSS', ratingPercentage: 80 },
  ];

  const projectsDetails = [
    {
      title: 'Weather Dashboard',
      duration: { fromDate: 'June 2021', toDate: ' Jul 2021' },
      description:
        'Dashboard with a search bar that allows the user to input a city, and pull its weather. When the user inputs a city, a city specific picture will be rendered.',
      subHeading:
        'Technologies Used: HTML & CSS, Javascript, OpenWeatherMap API',
    },
    {
      title: 'GoodMorning App ',
      duration: { fromDate: 'Sep 2021', toDate: 'Oct 2021' },
      description:
        'This App allows users to receive news stories from their favorite sources, and save them in one location.',
      subHeading: "Technologies Used:  HTML & CSS, Javascript, API's, Node",
    },
    {
      title: 'TuneTime App',
      duration: { fromDate: 'Oct 2021', toDate: 'Nov 2021' },
      description:
        'An App that generates playlists based on desired duration to accompany your daily activities.',
      subHeading: 'Technologies Used: MySQL, Express Js, Node JS,',
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={'Georgia Institute of Technology'}
        subHeading={'Full-Stack Web Development Certificate'}
        fromDate={'June 2021'}
        toDate={'December 2021'}
      />

      <ResumeHeading
        heading={'Saint Leo University'}
        subHeading={'Master of Business Administration'}
        fromDate={'January 2017'}
        toDate={'August 2020'}
      />
      <ResumeHeading
        heading={'University of Tampa '}
        subHeading={"Bachelor of Arts: Gov't & World Affiars"}
        fromDate={'January 2006'}
        toDate={'May 2008'}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={'NACM Tampa'}
          subHeading={'Front-end Developer'}
          fromDate={'March 2022'}
          toDate={'Present'}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            - Currently working as a Front-end developer, and a SCRUM Master for
            a national credit management company.
          </span>
          <br />
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - Maintaining existing components and building out new features for
            our customers nationwide.
          </span>
          <br />
          <span className="resume-description-text">
            - I took on the added responsibilities of SCRUM Master after 8
            months. My primary focus during a sprint is to make sure all
            developers have reasonable and understandable acceptance criteria,
            and any tools necessary to be successful.
          </span>
          <br />
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + '%' }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Personal Training & Fitness"
        description="Outside of programming I love to workout, and teach people the fundamentals of fitness! I am building my own fitness app that I think will reshape the fitness industry."
      />
      <ResumeHeading
        heading="Self Improvement"
        description="Everyday I focus on getting better as a web developer. I'm participating in #100DaysOfCoding, and have been using tools like FreeCodeCamp & CodeAcademy. These tool help me stay sharp with what I've learned, or pick up new skills and langages."
      />
      <ResumeHeading
        heading="Reading"
        description='I love reading non-fiction, especially history & basketball books. Two of my favorites are "Lies Across America" by James Loewen, and "Toughness" by Jay Bilas.'
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: 'translateY(' + index * offsetHeight * -1 + 'px)' },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? 'bullet selected-bullet' : 'bullet'
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ''}
    >
      <div className="resume-content">
        <ScreenHeading title={'Resume'} subHeading={'My formal Bio Details'} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
