import Button from "react-bootstrap/Button"
import { Card, ProgressBar } from "react-bootstrap"
import styles from "./Card.module.css"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { allModulesGast } from "../../guest/modulesGuest.ts"
import BtnYelowBorder from '../buttons/BtnYelowBorder'

const CardProcesGast = () => {
  const { moduleId } = useParams()
  const moduleinfo = allModulesGast.data[Number(moduleId)]
  const [index, setIndex] = useState(0)
  const [quest, setQuest] = useState<string>(moduleinfo.cards[index].question)
  const [check, setCheck] = useState(false)
  const [progressB, setProgressB] = useState(Math.trunc(((index + 1) * 100) / moduleinfo.cards.length))

  const flip = () => {
    if (check === false) {
      setQuest(moduleinfo.cards[index].answer);
      setCheck(true);
    } else {
      setQuest(moduleinfo.cards[index].question);
      setCheck(false);
    }
  };

  const next = () => {
    if (index < moduleinfo.cards.length - 1) {
      setIndex(index + 1);
      setQuest(moduleinfo.cards[index + 1].question);
      setProgressB(Math.trunc(((index + 2) * 100) / moduleinfo.cards.length));
      setCheck(false);
    } else {
      setQuest("You repeated all the cards!!!");
    }
  };

  const prev = () => {
    if (index <= 0) {
      setQuest(moduleinfo.cards[0].question);
    } else {
      setIndex(index - 1);
      setQuest(moduleinfo.cards[index - 1].question);
      setProgressB(Math.trunc((index * 100) / moduleinfo.cards.length));
      setCheck(false);
    }
  };

  useEffect(() => {}, []);

  return (
    <div className={`${styles.container}  mb-5`}>
      <div></div>
      <div className="mt-5 col-sm-12 col-lg-6 col-xl-4 mx-auto">
        <h3 className="txtDark me-3">
          <b>Module: </b>{moduleinfo.moduleName}
        </h3>
        <div className="d-flex flex-row">
          <p className="txtDark">
            <b>Stack: </b>
          </p>
          {moduleinfo.stackName}
          <h4 className="ps-3"></h4>
        </div>

        <Card className={`${styles.myCard} mt-3 shadow`}>
          <Card.Body className={`${styles.cardBody} d-flex flex-wrap align-content-center justify-content-center`}>
            <h3>{quest}</h3>
          </Card.Body>
          <Button variant="warning" className="m-5" id="flip" onClick={flip}>
            <p className="txtW_s m-0">Turn over the card</p>
          </Button>
        </Card>
        <div className={`${styles.cardContainer} d-flex justify-content-center mt-3 align-items-center`}>
          <BtnYelowBorder onClickHandler={prev} buttonText="Prev" />
          <div className={`${styles.flipCard} d-flex align-items-center mx-2`}>
            <span className="mx-1 txtDark">{index + 1}</span>
            <span className="mx-1 txtDark">/</span>
            <span className="mx-1 txtDark">{moduleinfo.cards.length}</span>
          </div>
          <BtnYelowBorder onClickHandler={next} buttonText="Next" />
        </div>
        <ProgressBar
          className="mt-3"
          variant="warning"
          now={progressB}
          label={`${progressB}%`}
        />
      </div>
    </div>
  );
};

export default CardProcesGast;
