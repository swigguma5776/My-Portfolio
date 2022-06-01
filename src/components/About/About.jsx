import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne ||
                    'First off, I absolutely love what I do! Being a Software Engineer combines so many of my joys in life from solving real-world, complex problems, designing interfaces that seemlessly guide a user through an application, and the ability to constantly up your game and learn new things. My passions for programming don\'t stop at coding. As a nature enthusiast and licensed Interior Designer, I have a commitment to designing and engineering more sustainably to lower my web applications\' carbon footprint.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    'When I\'m not deep diving into a new snippet of code, you can find me on some outdoor adventure. I grew up on a farm in the countryside and, while I love New Orleans living, I crave an amazing outdoor escape of any form whether that be kayaking, hiking, or camping. You name it, I\'m there!'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphThree || 'I\'m always open to any new oppurtunity. Please take a look at my resume and my development projects.'}
                </p>
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      My Resume
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
