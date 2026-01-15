import nat1 from "../imgs/nat-1.jpg";
import nat2 from "../imgs/nat-2.jpg";
import nat3 from "../imgs/nat-3.jpg";
import natLarge1 from "../imgs/nat-1-large.jpg";
import natLarge2 from "../imgs/nat-2-large.jpg";
import natLarge3 from "../imgs/nat-3-large.jpg";

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
              srcSet={`${nat1} 300w, ${natLarge1} 1000w`}
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
              src={natLarge1}
              alt="Photo 1"
              className="composition__photo composition__photo--p1"
            />

            <img
              srcSet={`${nat2} 300w, ${natLarge2} 1000w`}
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
              src={natLarge2}
              alt="Photo 2"
              className="composition__photo composition__photo--p2"
            />

            <img
              srcSet={`${nat3} 300w, ${natLarge3} 1000w`}
              sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
              src={natLarge3}
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
