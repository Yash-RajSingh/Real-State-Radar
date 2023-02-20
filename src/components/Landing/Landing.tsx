import Home from '../../assets/house.png';
import './Landing.css'
const Landing = (): JSX.Element => {
  return (
    <>
      <div className="landing-container mt-3">
        <div className="landing-wrapper flex">
          <div className="landing-subwrapper wd-40">
            <p className="motto mt-5">
              We're helping you <br />
              Find your dream <span className="cream">house</span>
            </p>
            <p className="text mt-5">
              Finding your dream house can be difficult but we can you help make
              your dream come true.
              <br /> Come find your dream house.
            </p>
            <button className="btn mt-10">Get Started</button>
          </div>
          <div className="landing-subwrapper">
            <img src={Home} alt="House image" className="landing-image mt-2" />
          </div>
        </div>
      </div>
    </>
  );
};
 
export default Landing;