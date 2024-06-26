import coffee from "/assets/donate/coffee.svg"
import maestro from "/assets/donate/maestro.svg"
import mastercard from "/assets/donate/mastercard.svg"
import paypal from "/assets/donate/paypal.svg"
import bitcoin from "/assets/donate/bitcoin.svg"
import React from "react"
import styles from "./Donate.module.css"

const Donate: React.FC = () => {
  return (
    <div className={`${styles.centerContainer} bg_greenWh`}>
      <div className={styles.container}>
        <h1 className={styles.header}>Buy us a cup of coffee</h1>
        <img className={`${styles.coffee} col-12 mb-5`} src={coffee} />

        <div className={`${styles.donateContainer} `}>
          <img className={styles.icon} src={maestro} alt="Icon" />
          <div className={`${styles.text} col-8`}>
            IBAN: 7777 8888 7777 9999
          </div>
        </div>
        <div className={styles.donateContainer}>
          <img className={styles.icon} src={mastercard} alt="Icon" />
          <div className={`${styles.text} col-8`}>7777 8888 7777 9999</div>
        </div>
        <div className={styles.donateContainer}>
          <img className={styles.icon} src={paypal} alt="Icon" />
          <div className={`${styles.text} col-8`}>smarty.flip@gmail.com</div>
        </div>
        <div className={styles.donateContainer}>
          <img className={styles.icon} src={bitcoin} alt="Icon" />
          <div className={`${styles.text} col-8`}>smarty.flip@gmail.com</div>
        </div>

        <h1 className={`text-info-emphasis fst-italic ${styles.header}`}>
          Your support means a lot!
        </h1>
      </div>
    </div>
  )
}

export default Donate
