import logo from "../imgs/logo-white.png";

function Header() {
  return (
    <header className="header">
      <div className="header__logo-box">
        <img src={logo} alt="Logo of Natours" className="header__logo" />
      </div>
      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">Outdoors</span>
          <span className="heading-primary--sub">is where life happens</span>
        </h1>

        <a href="#section-tours" className="btn btn--white btn--animated">
          Discover our tours
        </a>
      </div>
    </header>
  );
}

export default Header;
