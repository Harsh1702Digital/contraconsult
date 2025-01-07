import about from './about.png'
import sec2vid from './sec2vid.mp4'

export default function About() {
  return (
    <div className="row wow fadeInUp" data-wow-delay="0.5s">
      
      <div className="col-lg-6 mb-md-60">
        <div className="position-relative">
          {/* Image */}
          <div className="position-relative overflow-hidden">
            {/* <img
              width={960}
              height={539}
              src={about}
              className="image-fullwidth relative"
              alt="Image Description"
            /> */}
             <video width="640" height="1000" autoPlay loop muted>
        <source src={sec2vid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
          </div>
          {/* End Image */}
          {/* Decorative Waves */}
          <div
            className="decoration-1 d-none d-sm-block"
            data-rellax-y=""
            data-rellax-speed={1}
            data-rellax-percentage="0.1"
          >
            <img
              width="159"
              height="74"
              src="/assets/images/decoration-1.svg"
              className="svg-shape"
              alt=""
            />
          </div>
          {/* End Decorative Waves */}
        </div>
      </div>
      <div className="col-lg-6 col-xl-5 offset-xl-1">
        <h4 className="h5">Our Mission</h4>
        <p className="text-gray">
        We are dedicated to empowering influential leaders to shape public perception, win elections, and drive transformative change. Our goal is to craft campaigns that not only reflect our clients’ values but also create lasting impact in governance and public life.</p>
        <h4 className="h5">Our Vision</h4>
        <p className="text-gray">
        Contraconsult envisions a world where strategic communication bridges the gap between leadership and the people. We aim to revolutionize political advisory and PR by fostering collaboration between visionary professionals and forward-thinking leaders, elevating key issues to the forefront of public discourse.
        </p>
      </div>
    </div>
  );
}
