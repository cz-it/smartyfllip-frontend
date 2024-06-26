import { useEffect } from "react"
import SmallBanner from "../smallBaner/SmallBanner"
import Carosel from "../carosel/Carosel"
import BottomBanner from "../bottomBanner/BottomBanner"
import iconBig from "/assets/iconBig.svg"
import react from "/assets/home/react.svg"
import xamarin from "/assets/home/xamarin.svg"
import java from "/assets/home/java.svg"
import javascript from "/assets/home/javascript.svg"
import csharp from "/assets/home/csharp.svg"
import python from "/assets/home/python.svg"
import postgresql from "/assets/home/postgresql.svg"
import mysql from "/assets/home/mysql.svg"
import html from "/assets/home/html.svg"
import css from "/assets/home/type_css.svg"
import vuejs from "/assets/home/vuejs.svg"

import { useNavigate } from "react-router-dom"
import styles from "./Home.module.css"
import { allModulesGast } from "../../guest/modulesGuest.ts"

const Home = () => {
  const navigate = useNavigate()
  const modules = allModulesGast
  useEffect(() => {}, [])
  return (
    <div>
      <div className="bg_greenWh">
        <div className="bannerAbout container ">
          <div className="col-sm-12 d-flex flex-row justify-content-between ">
            <div className="txtHome col-sm-6 d-flex flex-wrap align-content-center">
              <h1 className="txtW_s mt-3 mb-4">
                Provides a lot of material, questions and discussions that are
                easy to understand!
              </h1>
              <p className="txtW_s pb-2">
                Our platform invites you to improve your skills to an
                unimaginable level with the help of cards. You can try some
                exercises. In order to use more advanced features you need to
                register
              </p>
            </div>
            <img src={iconBig} className="iconBanner" />
          </div>
        </div>
      </div>
      <div className="container ">
        <div className="col-sm-12 col-xl-10 mx-auto mb-5">
          <div className="col-sm-12 col-lg-12 row mx-auto mt-5 d-flex flex-row justify-content-center">
            {modules.data.map(d => (
              <div
                className={`${styles.customCard} shadow d-flex flex-row p-2 col-sm-12 col-lg-5 m-2 cursor`}
                key={d.moduleId}
                onClick={() => navigate(`/guest/${d.moduleId}`)}
              >
                <img src={d.img} className={`${styles.iconCard}`} />
                <div className="infoInCard ps-3">
                  <h5 className="">{d.moduleName}</h5>
                  <p className={`${styles.txtCatd}`}>{d.username}</p>
                  <div className="d-flex flex-row justify-content-between">
                    <p>
                      {d.cards.length} quests: {d.stackName}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`container ${styles.iconBlockCustom}`}>
          <div className="col-sm-12 col-lg-6 mx-auto mt-5 ">
            <h2 className="text-center mt-5 mb-5">Tools and Technologies</h2>
          </div>
          <div className="col-sm-12 col-lg-20 mt-5 mb-5">
            <div className={styles.iconsContainer}>
              <img
                className={styles.icon}
                src={react}
                onClick={() => navigate(`/guest/5`)}
              />
              <img
                className={styles.icon}
                src={xamarin}
                onClick={() => navigate(`/guest/9`)}
              />
              <img
                className={styles.icon}
                src={java}
                onClick={() => navigate(`/guest/0`)}
              />
              <img
                className={styles.icon}
                src={javascript}
                onClick={() => navigate(`/guest/3`)}
              />
              <img
                className={styles.icon}
                src={csharp}
                onClick={() => navigate(`/guest/4`)}
              />
              <img
                className={styles.icon}
                src={python}
                onClick={() => navigate(`/guest/1`)}
              />
              <img
                className={styles.icon}
                src={postgresql}
                onClick={() => navigate(`/guest/2`)}
              />
              <img
                className={styles.icon}
                src={mysql}
                onClick={() => navigate(`/guest/2`)}
              />
              <img
                className={styles.icon}
                src={html}
                onClick={() => navigate(`/guest/7`)}
              />
              <img
                className={styles.icon}
                src={css}
                onClick={() => navigate(`/guest/8`)}
              />
              <img
                className={styles.icon}
                src={vuejs}
                onClick={() => navigate(`/guest/6`)}
              />
            </div>
          </div>
        </div>
      </div>
      <SmallBanner></SmallBanner>
      <Carosel />
      <BottomBanner />
    </div>
  )
}

export default Home
