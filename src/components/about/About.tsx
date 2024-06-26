import SmallBanner from "../smallBaner/SmallBanner"
import Carosel from "../carosel/Carosel"
import BottomBanner from "../bottomBanner/BottomBanner"
import logoBig from "/assets/iconBig.svg"

const About = () => {
  return (
    <div>
      <div className="bg_greenWh">
        <div className="bannerAbout container ">
          <div className="col-sm-12 d-flex flex-row justify-content-between ">
            <div className="txtAbout col-sm-6 d-flex flex-wrap align-content-center">
              <h1 className="txtW_s mt-3">About Us</h1>
              <p className="txtW_s pb-3">
                Our platform invites you to improve your skills to an
                unimaginable level with the help of cards. You can try some
                exercises. In order to use more advanced features you need to
                register
              </p>
            </div>
            <img src={logoBig} className="iconBanner" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="col-sm-12 col-lg-6 mx-auto mt-5 mb-5">
          <h3 className="txtDark">Our History</h3>
          <p className="txtDark">
            SmartyFlip is a web platform created by a team of developers who are
            graduates of the "AIT-TR" school with the aim of helping IT
            professionals prepare for technical interviews. Our project emerged
            from the desire to simplify and make the preparation process for
            interviews in IT companies more effective. Our Mission We aim to
            provide users with the opportunity to improve their theoretical
            knowledge and practical skills necessary for successful technical
            interviews.
          </p>
          <h3 className="txtDark">Our Mission</h3>
          <p className="txtDark">
            We aim to provide users with the opportunity to improve their
            theoretical knowledge and practical skills necessary for successful
            technical interviews. Our mission is to help candidates become more
            confident and competitive professionals in the job market.
          </p>
          <h3 className="txtDark">Our Values</h3>
          <p className="txtDark">
            <b>Quality:</b> We strive for high quality content and functionality
            on our platform to provide users with the best learning experience.
            <br />
            <b>Innovation:</b> We will gradually develop and improve our
            platform to align with the latest trends in the IT industry.
            <br />
            <b>Accessibility:</b> We aim to make learning accessible to everyone
            by providing a free and convenient tool for interview preparation.
          </p>
          <h3 className="txtDark">Our Functionalities</h3>
          <p className="txtDark">
            <b>Parameter Selection:</b> Users can choose parameters for
            interview preparation, such as interview type, position level,
            technological stack, and others.
            <br />
            <b>Individual Approach:</b> We offer a personalised approach to
            learning, taking into account the preferences and level of
            preparation of each user.
            <br />
            <b>Statistics and Ranking:</b> We provide users with the ability to
            track their progress and compare their results with others.
          </p>
          <h3 className="txtDark">Our Team</h3>
          <p>
            Our team consists of graduates of the "AIT-TR" school who strive to
            create the best product for our users.
          </p>
          <h3 className="txtDark">Join Us!</h3>
          <p className="txtDark">
            Join our SmartyFlip platform today and start your journey to a
            successful career in the IT industry!
          </p>
        </div>
      </div>
      <SmallBanner />
      <Carosel />
      <BottomBanner />
    </div>
  )
}

export default About
