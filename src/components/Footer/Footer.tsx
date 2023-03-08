import CityView from "../../assets/cityview.png";
import FacebookLogo from '../../assets/fb-logo.png'
import InstagramLogo from '../../assets/instagram-logo.png'
import TwitterLogo from '../../assets/twitter-logo.png'
import Logo from '../../assets/logo.png';
import "./FooterStyles.css";
const Footer = (): JSX.Element => {
  return (
    <>
      <div className="footer-container mt-5">
        <img src={CityView} alt="" className="footer-image" />
        <div className="footer-wrapper">
          <div className="footer-subwrapper">
            <img src={Logo} alt="" className="footer-logo" />
            <p className="footer-heading mt-2">Realestate Radar</p>
          </div>
          <div className="footer-subwrapper">
            <p className="footer-heading">Join Us</p>
            <p className="footer-link">Product</p>
            <p className="footer-link">Get referrals</p>
            <p className="footer-link">See all jobs</p>
          </div>
          <div className="footer-subwrapper">
            <p className="footer-heading">Find Us</p>
            <p className="footer-link">Contact us</p>
            <p className="footer-link">Help Center</p>
          </div>
          <div className="footer-subwrapper">
            <p className="footer-heading">Be Social</p>
            <div className="social-container">
              <img src={FacebookLogo} alt="" className="social-logo" />
              <p className="footer-link">Facebook</p>
            </div>
            <div className="social-container">
              <img src={InstagramLogo} alt="" className="social-logo" />
              <p className="footer-link">Instagram</p>
            </div>
            <div className="social-container">
              <img src={TwitterLogo} alt="" className="social-logo" />
              <p className="footer-link">Twitter</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
