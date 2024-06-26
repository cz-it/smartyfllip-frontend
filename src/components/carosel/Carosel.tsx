import alisher from "/assets/alisher.jpeg"
import linus from "/assets/linus.png"
import edward from "/assets/ed.png"

import { Carousel } from "react-bootstrap"

const Carosel = () => {
  return (
    <div>
      <Carousel className="p-5 " data-bs-theme="dark">
        <Carousel.Item>
          <div className="container">
            <div className="row col-sm-12 col-lg-10 mx-auto">
              <img src={alisher} className="col-sm-4" />
              <div className="col-sm-8 pt-3">
                <h4>
                  {/* You will completely turn your life around with this app! © */}
                  The horizon of the unknown will always be scary, so it is
                  useful to learn what is nearby. You'll get there! ©
                </h4>
                <p>Alisher Khamidov</p>
              </div>
            </div>
          </div>
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="container">
            <div className="row col-sm-12 col-lg-10 mx-auto">
              <img src={linus} className="col-sm-4" />
              <div className="col-sm-8 pt-3">
                <h4>
                  Many people are willing to work long hours in two, three or
                  even four shifts. This doesn't apply to me. Neither Transmeta
                  nor Linux could ever motivate me to get a good night's sleep.
                  To tell you the truth, I'm a big fan of sleep in general. ©
                </h4>
                <p>Linus Torvalds</p>
              </div>
            </div>
          </div>
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="container">
            <div className="row col-sm-12 col-lg-10 mx-auto">
              <img src={edward} className="col-sm-4" />
              <div className="col-sm-8 pt-3">
                <h4>
                  There's no magic. For something to work, someone has to write
                  the code. ©
                </h4>
                <p>Edward Fish</p>
              </div>
            </div>
          </div>
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Carosel
