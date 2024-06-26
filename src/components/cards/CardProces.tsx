import  { useEffect, useState } from "react"
import { Button, Card, ProgressBar } from "react-bootstrap"
import styles from "./Card.module.css"

import { useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import {  getModuleById, selectModule } from "../../features/cards/modulesSlice"
import { getCardsByModule, selectCards } from "../../features/cards/cardsSlice"
// import { Module } from "../../features/cards/type"
import BtnYelowBorder from '../buttons/BtnYelowBorder'

const CardProces = () => {
  const { moduleId } = useParams()
  const dispatch = useAppDispatch()
  const moduleinfo = useAppSelector(selectModule)
  const cards = useAppSelector(selectCards)
  const [index, setIndex] = useState(0)
  const [quest, setQuest] = useState<string>('start')
  const [check, setCheck] = useState(false)
  const [progresB, setProgresB] = useState(5)

  const getCardsByModulId = () => {
    dispatch(getCardsByModule(String(moduleId)))
    setProgresB(moduleinfo?.cardsCount!)
    dispatch(getCardsByModule(String(moduleId))).then((data: any) => setQuest(data.payload[0].question))
    dispatch(getCardsByModule(String(moduleId))).then((data: any) => setProgresB(Math.trunc((index + 1) * 100) / data.payload.length))
  }

  const flip = () => {
    if (cards !== undefined) {
      if (check === false) {
        setQuest(cards[index].answer);
        setCheck(true);
      } else {
        setQuest(cards[index].question);
        setCheck(false);
      }
    }
  }

  const next = () => {
    if (cards !== undefined) {
      if (index < cards.length - 1) {
        setIndex(index + 1)
        setCheck(false)
        setQuest(cards[index + 1].question)
        setProgresB(Math.trunc(((index + 2) * 100) / cards.length!))
      } else {
        setQuest("You repeated all the cards!!!");
      }
    }
  }

  const prev = () => {
    if (cards !== undefined) {
      if (index <= 0) {
        setQuest(cards[0].question);
      } else {
        setIndex(index - 1)
        setCheck(false)
        setQuest(cards[index - 1].question)
        setProgresB(Math.trunc(((index ) * 100) / cards.length))
      }
    }
  }

  useEffect(() => {
    dispatch(getModuleById(String(moduleId)))
    getCardsByModulId()
  }, [])

  return (
    <div className={`${styles.container}  mb-5`}>
      <div></div>
      <div className="mt-5 col-sm-12 col-lg-6 mx-auto">
        <h3 className="txtDark me-3">
          <b>Module</b> {moduleinfo?.moduleName}
        </h3>
        <div className=" d-flex flex-row">
          <p className="txtDark ">
            <b>Stack: {moduleinfo?.stackName}</b>
          </p>
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
        <div className="d-flex justify-content-center mt-3">
          <BtnYelowBorder onClickHandler={prev} buttonText="Prev" />
          <span className="ms-2 me-2 mt-2 txtDark">{index + 1}</span>
          <span className="txtDark mt-2">/</span>
          <span className="ms-2 me-2 mt-2 txtDark">{cards?.length}</span>
          <BtnYelowBorder onClickHandler={next} buttonText="Next" />
        </div>
        <ProgressBar
          className="mt-3"
          variant="warning"
          now={progresB}
          label={`${progresB}%`}
        />
      </div>
    </div>
  )
}

export default CardProces;
