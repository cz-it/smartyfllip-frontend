import { Card } from "react-bootstrap"
import styles from "./SmallBanner.module.css"

const SmallBanner = () => {
  return (
    <div className="bg_greenWh p-5">
      <div className="container">
        <div className="row mx-auto d-flex justify-content-around">
          <Card className={` ${styles.myStyleCard} col-sm-6 col-lg-2 m-2`}>
            <Card.Body className="d-flex align-items-center justify-content-center">
              <div className="text-center">
                <h3>1000+</h3>
                <p>Question cards</p>
              </div>
            </Card.Body>
          </Card>

          <Card className={`${styles.myStyleCard} col-sm-6 col-lg-2 m-2`}>
            <Card.Body className="d-flex align-items-center justify-content-center">
              <div className="text-center">
                <h3>100+</h3>
                <p>Custom modules</p>
              </div>
            </Card.Body>
          </Card>

          <Card
            className={`${styles.myStyleCard} ${styles.divDelSmall} col-sm-6 col-lg-2 m-2 `}
          >
            <Card.Body className="d-flex align-items-center justify-content-center">
              <div className="text-center">
                <h3>10+</h3>
                <p>Technology stacks</p>
              </div>
            </Card.Body>
          </Card>

          <Card
            className={`${styles.myStyleCard} ${styles.divDelSmall} col-sm-6 col-lg-2 m-2 `}
          >
            <Card.Body className="d-flex align-items-center justify-content-center">
              <div className="text-center">
                <h3>100+</h3>
                <p>Inspired users</p>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default SmallBanner
