import nat1 from "../imgs/nat-1-large.jpg";
import nat2 from "../imgs/nat-2-large.jpg";
import nat3 from "../imgs/nat-3-large.jpg";

function About() {
  return (
    <section className="section-about">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">
          Exciting tours for adventurous people
        </h2>
      </div>

      <div className="row">
        <div className="col-1-of-2">
          <h3 className="heading-tertiary u-margin-bottom-small">
            You&apos;re going to fall in love with nature
          </h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
            voluptates? Incidunt soluta ex harum. Repudiandae nostrum maxime
            exercitationem deserunt temporibus sed eveniet cumque possimus
            mollitia!
          </p>

          <h3 className="heading-tertiary u-margin-bottom-small">
            Live adventures like you never have before
          </h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
            voluptates? Incidunt soluta ex harum.
          </p>

          <a href="#" className="btn-text">
            Learn more &rarr;
          </a>
        </div>

        <div className="col-1-of-2">
          <div className="composition">
            <img
              src={nat1}
              alt="Photo 1"
              className="composition__photo composition__photo--p1"
            />
          </div>
          <div className="composition">
            <img
              src={nat2}
              alt="Photo 2"
              className="composition__photo composition__photo--p2"
            />
          </div>
          <div className="composition">
            <img
              src={nat3}
              alt="Photo 3"
              className="composition__photo composition__photo--p3"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
