import footerLogo from "../imgs/logo-green-2x.png";

function Footer() {
  return (
    <section className="footer">
      <div className="footer__logo-box">
        <img src={footerLogo} alt="Full logo" className="footer__logo" />
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <div className="footer__navigation">
            <ul className="footer__list">
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Company
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Contact Us
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Carrers
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Privacy Policy
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-1-of-2">
          <p className="footer__copyright">
            Copyright &copy; by{" "}
            <a
              href="https://react-portfolio-mu-flax.vercel.app/"
              className="footer__link"
            >
              Minja Ćućula
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
