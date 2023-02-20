import Logo from '../../assets/logo.png';
import './HeaderStyles.css'
const Header = (): JSX.Element => {
  return (
    <>
      <div className="header-body">
        <div className="header-wrapper">
          <div className="header-subwrapper">
            <img src={Logo} alt="logo" className="logo" />
          </div>
          <div className="header-subwrapper option-wrapper">
            <p className="nav-option">Buy</p>
            <p className="nav-option">Sell</p>
            <p className="nav-option">Rent</p>
            <p className="nav-option">Mortage</p>
          </div>
          <div className="header-subwrapper">
            <button className="btn">Signup</button>
          </div>
        </div>
      </div>
    </>
  );
};
 
export default Header;