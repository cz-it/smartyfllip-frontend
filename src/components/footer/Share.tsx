import facebook from "/assets/facebook.svg"
import instagram from "/assets/insta.svg"
import telegram from "/assets/telegram.svg"
import linkedIn from "/assets/linkedin1.svg"
import whatsapp from "/assets/whatsapp.svg"

import styles from "./Footer.module.css"

const Share = () => {
  const link: string = "https://smartyflip.de"

  const shareToLinkedIn = () => {
    const url = link
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      "_blank",
    )
  }

  const shareToWhatsApp = () => {
    const url = link
    const text = encodeURIComponent("Check this out!")
    window.open(`https://wa.me/?text=${text}%20${url}`, "_blank")
  }

  const shareToTelegram = () => {
    const url = link
    const text = encodeURIComponent("Check this out!")
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, "_blank")
  }

  const shareToInstagram = () => {
    const url = "https://smartyflip.de" // Replace with the URL you want to share
    alert(
      `To share this link on Instagram, copy the URL and paste it into a new post or story: ${url}`,
    )
  }

  return (
    <>
      <a
        data-href="https://smartyflip.de"
        href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fsmartyflip.de%2F&amp;src=sdkpreparse"
        target="_blank"
      >
        <img src={facebook} alt="facebook" className={styles.socialIcon} />
      </a>
      <a onClick={shareToInstagram} target="_blank">
        <img src={instagram} alt="instagram" className={styles.socialIcon} />
      </a>
      <a onClick={shareToTelegram} target="_blank">
        <img src={telegram} alt="telegram" className={styles.socialIcon} />
      </a>
      <a onClick={shareToLinkedIn} target="_blank">
        <img src={linkedIn} alt="linkedin" className={styles.socialIcon} />
      </a>
      <a onClick={shareToWhatsApp} target="_blank">
        <img src={whatsapp} alt="whatsapp" className={styles.socialIcon} />
      </a>
    </>
  )
}

export default Share
