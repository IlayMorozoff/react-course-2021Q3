import { FC, useEffect, useRef } from 'react';
import './about.css';

const About: FC = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    aboutRef.current.classList.add('opacity');
  }, []);

  return (
    <section className="about" ref={aboutRef}>
      <div className="text__about">
        This is a news aggregator where you can search for news in any language, but unfortunately
        we can only provide 100 news for free, or 100 API requests, if you want more, connect to the
        tariff plan.
      </div>
    </section>
  );
};

export default About;
