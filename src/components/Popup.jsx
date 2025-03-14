import nat8 from "../imgs/nat-8.jpg";
import nat9 from "../imgs/nat-9.jpg";

function Popup() {
  return (
    <div className="popup">
      <div className="popup__content">
        <div className="popup__left">
          <img src={nat8} alt="Tour photo" className="popup__img" />
          <img src={nat9} alt="Tour photo" className="popup__img" />
        </div>

        <div className="popup__right">
          <h2 className="heading-secondary u-margin-bottom-small">
            Start booking now
          </h2>
          <h3 className="heading-tertiary u-margin-bottom-small">
            Important &ndash; Please read these terms before booking
          </h3>
          <p className="popup__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            distinctio commodi sed iste impedit fuga accusamus molestiae
            explicabo voluptate asperiores modi voluptatum vero, ad cumque nulla
            quam sint neque laudantium! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Facilis distinctio commodi sed iste impedit fuga
            accusamus molestiae explicabo voluptate asperiores modi voluptatum
            vero, ad cumque nulla quam sint neque laudantium! Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Facilis distinctio commodi
            sed iste impedit fuga accusamus molestiae explicabo voluptate
            asperiores modi voluptatum vero, ad cumque nulla quam sint neque
            laudantium!
          </p>
          <a href="#" className="btn btn--green">
            Book now
          </a>
        </div>
      </div>
    </div>
  );
}

export default Popup;
