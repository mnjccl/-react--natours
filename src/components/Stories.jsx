import nat8 from "../imgs/nat-8.jpg";

function Stories() {
  return (
    <section className="section-stories">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">We make people genuinely happy</h2>
      </div>

      <div className="row">
        <div className="story">
          <figure className="story__shape">
            <img src={nat8} alt="Person on a tour" className="story__img" />
          </figure>
          <div className="story__text">
            <h3 className="heading-tertiary u-margin-bottom-small">
              I had the best week ever with my family
            </h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequatur illo aspernatur ad optio distinctio accusamus
              mollitia, architecto eius omnis temporibus nam! Neque
              reprehenderit qui ipsum minus delectus sunt distinctio ex!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stories;
