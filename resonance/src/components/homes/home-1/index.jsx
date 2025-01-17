import AnimatedText from "@/components/common/AnimatedText";
import About from "@/components/homes/home-1/About";
import Benefits from "@/components/homes/home-1/Benefits";
import Blog from "@/components/homes/home-1/Blog";
import Brands from "@/components/homes/home-1/Brands";
import Contact from "@/components/homes/home-1/Contact";

import Facts from "@/components/homes/home-1/Facts";
import Faq from "@/components/homes/home-1/Faq";
import Features from "@/components/homes/home-1/Features";
import NewsLetter from "@/components/homes/home-1/NewsLetter";
import Portfolio from "@/components/homes/home-1/Portfolio";
import Promo from "@/components/homes/home-1/Promo";
import Service from "@/components/homes/home-1/Service";
import Team from "@/components/homes/home-1/Team";
import Testimonials from "@/components/homes/home-1/Testimonials";
import { Link } from "react-router-dom";
import Testimonials2 from "./Teatimonials2";
import Brands2 from "./Brands2";
import servicelg from "./servicelg.jpg"
import servicesm1 from "./servicesm1.jpg"
import servicesm2 from "./servicesm2.jpg"
import flags from "./flags.jpg"
import stage from './stage.mp4'

import ParallaxContainer from "@/components/common/ParallaxContainer";
export default function Home1({ onePage = false, dark = false }) {
  return (
    <>
      <section
        className={`page-section scrollSpysection bg-dark-1 light-content`}
        id="about"
      >
        <div className="container position-relative">
          <div className="row mb-60 mb-xs-30">
            <div className="col-md-6">
              <h2 className="section-caption mb-xs-10">Our Story</h2>
              <h3 className="section-title mb-0">
                <AnimatedText text="Strategic Influence. Unmatched Results." />
              </h3>
            </div>
            <div className="col-md-5 offset-md-1 relative text-start text-md-end pt-40 pt-sm-20 local-scroll">
              {/* Decorative Dots */}
              <div
                className="decoration-2 d-none d-md-block"
                data-rellax-y=""
                data-rellax-speed="0.7"
                data-rellax-percentage="-0.2"
              >
                <img
                  width="103"
                  height="223"
                  src="/assets/images/decoration-2.svg"
                  alt=""
                />
              </div>
              {/* End Decorative Dots */}

              {onePage ? (
                <a
                  href="#team"
                  className="link-hover-anim underline align-middle"
                  data-link-animate="y"
                >
                  {/* <span className="link-strong link-strong-unhovered">
                    Learn more about us{" "}
                    <i
                      className="mi-arrow-right size-18"
                      aria-hidden="true"
                    ></i>
                  </span> */}
                  {/* <span
                    className="link-strong link-strong-hovered"
                    aria-hidden="true"
                  >
                    Learn more about us{" "}
                    <i
                      className="mi-arrow-right size-18"
                      aria-hidden="true"
                    ></i>
                  </span> */}
                </a>
              ) : (
                <Link
                  to={`/main-pages-about-1${dark ? "-dark" : ""}`}
                  className="link-hover-anim underline align-middle"
                  data-link-animate="y"
                >

                </Link>
              )}
            </div>
          </div>
          <About />
        </div>
      </section>

      <section style={{paddingTop:'0px', marginTop:'100px'}}
        className={`page-section  ${dark ? "bg-dark-1 light-content" : ""}`} id="services"
      >
        <div className="container position-relative">
          <div className="row" style={{display:'flex',gap:'20px',placeContent: 'space-between'}}> 
            {/* Images */}

            {/* End Images */}
            {/* Text */}
            <div className="col-lg-5 d-flex align-items-center">
              <div
                className="wow fadeInUp"
                data-wow-duration="1.2s"
                data-wow-offset={255}
              >
                <h2 className="section-title mb-50 mb-sm-20">Our Services</h2>
                <Faq />
                <div className="local-scroll">
                  {onePage ? (
                    <a
                      href="#contact"
                      className="btn btn-mod btn-large btn-round btn-hover-anim"
                    >
                      <span>Lets Connect</span>
                    </a>
                  ) : (
                    <Link
                      to={`/main-pages-contact-1${dark ? "-dark" : ""}`}
                      className="btn btn-mod btn-large btn-round btn-hover-anim"
                    >
                      <span>Lets Connect</span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-flex align-items-start mb-md-60 mb-xs-30">
              <div className="call-action-2-images">
                <div
                  className="call-action-2-image-1"
                  data-rellax-y=""
                  data-rellax-speed="0.5"
                  data-rellax-percentage="0.7"
                >
                  <img
                    width={386}
                    height={400}
                    src= {servicesm1}
                    alt="Image Description"
                    className="wow scaleOutIn"
                    data-wow-duration="1.2s"
                    data-wow-offset={255}
                  />
                </div>
                <div className="call-action-2-image-2">
                  <img
                    width={810}
                    height={512}
                    src= {servicelg}
                    alt="Image Description"
                    className="wow scaleOutIn"
                    data-wow-duration="1.2s"
                    data-wow-offset={134}
                  />
                </div>
                <div
                  className="call-action-2-image-3"
                  data-rellax-y=""
                  data-rellax-speed="-0.5"
                  data-rellax-percentage="0.5"
                >
                  <img
                    width={386}
                    height={500}
                    src={servicesm2}
                    alt="Image Description"
                    className="wow scaleOutIn"
                    data-wow-duration="1.2s"
                    data-wow-offset={0}
                  />
                </div>
              </div>
            </div>
            {/* End Text */}
          </div>
        </div>
      </section>

      {/* <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-2 light-content" : "bg-gray-light-1 "
        }`}
        id="team"
      >
        <Team />
      </section> */}
      {/* <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        }`}
        id="services"
      >
        {" "}
        <Service />
      </section> */}

      {/* <ParallaxContainer
        className="page-section bg-dark-1 bg-dark-alpha-90 parallax-5 light-content"
        style={{
          backgroundImage:
            "url(/assets/images/full-width-images/section-bg-2.jpg)",
        }}
      >
        <div className="container position-relative">
          <div className="row">
            <div className="col-lg-4 mb-md-60 mb-xs-50">
              <h2 className="section-title mb-20 wow fadeInUp">
                Check recent achievements.
              </h2>
              <p
                className="section-descr mb-40 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                We provide the effective ideas that grow businesses of our
                clients.
              </p>
              <div className="local-scroll wow fadeInUp" data-wow-delay="0.2s">
                {onePage ? (
                  <a
                    href="#contact"
                    className="btn btn-mod btn-w btn-large btn-round btn-hover-anim"
                  >
                    <span>Request Price</span>
                  </a>
                ) : (
                  <Link
                    to={`/main-pages-contact-1${dark ? "-dark" : ""}`}
                    className="btn btn-mod btn-w btn-large btn-round btn-hover-anim"
                  >
                    <span>Request Price</span>
                  </Link>
                )}
              </div>
            </div>{" "}
            <Facts />
          </div>
        </div>
      </ParallaxContainer> */}
   
   {/* our Work - portfolio*/}
      {/* <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        }`}
        id="portfolio"
      >
        <Portfolio />
      </section> */}

      {/* Our Work - porfolio */}
      
      <hr className={`mt-0 mb-0 ${dark ? "white" : ""}`} />
      
      
      {/* <hr className={`mt-0 mb-0 ${dark ? "white" : ""}`} /> */}
      {/* <section
        className={`page-section  ${dark ? "bg-dark-1 light-content" : ""}`}
      >
        <Benefits />{" "}
      </section>
      <section
        className={`page-section pt-0 pb-0  ${dark ? "light-content" : ""}`}
      >
        {" "}
        {dark ? <Testimonials2 /> : <Testimonials />}
      </section> */}
      <section className={`page-section  ${dark ? " light-content" : ""}`}>
        {dark ? <Brands2 /> : <Brands />}
      </section>

      <section
        className="page-section bg-light  light-content"
        // style={{
        //   backgroundImage:
        //     `url(${flags})`,
        // }}
      style={{padding:'0px',marginBottom:'0px'}}>
        
        <video 
        autoPlay 
        loop 
        muted 
        playsInline 
      >
        <source src={stage} type="video/mp4" />
      </video>
        {/* <Features /> */}
      </section>


      {/* <hr className={`mt-0 mb-0 ${dark ? "white" : ""}`} /> */}
      {/* <section
        className={`page-section  ${dark ? "bg-dark-1 light-content" : ""}`}
      >
        <Promo />{" "}
      </section> */}
      <hr className={`mt-0 mb-0 ${dark ? "white" : ""}`} />
   
      {/* <section
        className="page-section bg-dark-1 bg-dark-alpha-90 light-content"
        style={{
          backgroundImage:
            "url(/assets/images/full-width-images/section-bg-2.jpg)",
        }}
      >
        <NewsLetter />
      </section> */}
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        }`}
        id="contact"
      >
        <Contact />{" "}
      </section>
    </>
  );
}
