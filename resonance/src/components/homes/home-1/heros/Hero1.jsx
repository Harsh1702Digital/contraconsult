import AnimatedText from "@/components/common/AnimatedText";
import { parallaxMouseMovement } from "@/utlis/parallax";

import { useEffect, useState } from "react";
import ModalVideo from "react-modal-video";
import ban1 from "./ban1.webp";
import ban2 from "./ban2.webp";
import ban3 from "./ban3.jpg";


export default function Hero1() {
  useEffect(() => {
    parallaxMouseMovement();
  }, []);
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="container min-height-100vh d-flex align-items-center pt-100 pb-100 pt-sm-120 pb-sm-120">
        {/* Home Section Content */}
        <div className="home-content text-start">
          <div className="row">
            {/* Home Section Text */}
            <div className="col-md-6 d-flex align-items-center mb-sm-60">
              <div>
                <h2
                  className="section-caption mb-30 mb-xs-10 wow fadeInUp"
                  data-wow-duration="1.2s"
                >
                  Contra Consultation
                </h2>
                <h1 className="hs-title-1 mb-30">
                  <AnimatedText
                    text={"Transform Nations. Win with Precision."}
                  />
                </h1>

                <p
                  className="section-descr mb-50 wow fadeInUp"
                  data-wow-delay="0.6s"
                  data-wow-duration="1.2s"
                >
                  At Contraconsult, we empower leaders to shape the future and create lasting impact. Our strategic campaigns drive influence, win elections, and leave a legacy that resonates with the people.
                </p>
                <div
                  className="local-scroll mt-n10 wow fadeInUp wch-unset"
                  data-wow-delay="0.7s"
                  data-wow-duration="1.2s"
                  data-wow-offset={0}
                >
                  <a
                    href="#about"
                    className="btn btn-mod btn-large btn-round btn-hover-anim align-middle me-2 me-sm-5 mt-10"
                  >
                    <span>Partner With Us</span>
                  </a>
                  {/* <a
                    onClick={() => setOpen(true)}
                    className="link-hover-anim align-middle lightbox mfp-iframe mt-10"
                    data-link-animate="y"
                  >
                    <i className="icon-play size-13 me-1" /> How We Secure Victories
                  </a> */}
                </div>
              </div>
            </div>
            {/* End Home Section Text */}
            {/* Stack Images */}
            <div className="col-md-5 offset-md-1 d-flex align-items-center">
              <div className="stack-images">
                <div
                  className="stack-images-1 parallax-mousemove"
                  data-offset={30}
                >
                  <div
                    className="wow clipRightIn"
                    data-wow-delay="1.2s"
                    data-wow-duration="1.75s"
                  >
                    <img
                      src={ban3}
                      alt="Image Description"
                      width={600}
                      height={800}
                    />
                  </div>
                </div>
                <div
                  className="stack-images-2 parallax-mousemove"
                  data-offset={60}
                >
                  <div
                    className="wow clipRightIn"
                    data-wow-delay="1.7s"
                    data-wow-duration="1.75s"
                  >
                    <img
                      width={600}
                      height={800}
                      src={ban2}
                      alt="Image Description"
                    />
                  </div>
                </div>
                <div
                  className="stack-images-3 parallax-mousemove"
                  data-offset={90}
                >
                  <div
                    className="wow clipRightIn"
                    data-wow-delay="2.2s"
                    data-wow-duration="1.75s"
                  >
                    <img
                      width={600}
                      height={800}
                      src={ban1}
                      alt="Image Description"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* End Stack Images */}
          </div>
        </div>
        {/* End Home Section Content */}
        {/* Scroll Down */}
        <div
          className="local-scroll scroll-down-wrap-type-1 wow fadeInUp"
          data-wow-offset={0}
        >
          <div className="container">
            <a href="#about" className="scroll-down-1">
              <div className="scroll-down-1-icon">
                <i className="mi-arrow-down" />
              </div>
              <div className="scroll-down-1-text">Scroll Down</div>
            </a>
          </div>
        </div>
        {/* End Scroll Down */}
      </div>
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId="jTea_8Fk5Ns"
        onClose={() => setOpen(false)}
      />
    </>
  );
}
