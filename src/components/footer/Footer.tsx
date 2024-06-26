import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAppSelector } from "../../app/hooks"
import { UserState } from "../../features/user/type"
import styles from "./Footer.module.css"
import Share from "./Share.tsx"
import iconBig from "/assets/iconBig.svg"

const Footer = () => {
  const user: UserState = useAppSelector(state => state.user)
  const navigate = useNavigate()
  let [userState, setUserState] = useState(false)
  const [, setUserinfo] = useState<string>("Registration")

  useEffect(() => {
    if (JSON.stringify(user.user) === "{}") {
      setUserinfo("Registration")
    } else {
      setUserState(true)
      setUserinfo(user.user?.firstName!)
    }
  }, [user])

  const handleNavigate = (path: string) => {
    if (path === "/cabinet" && !userState) {
      alert("Registration or Login")
    } else {
      navigate(path)
      window.scrollTo(0, 0)
    }
  }

  return (
    <footer className="w-100 bg_greenDark h-25">
      <div className="container d-flex flex-column justify-content-center align-items-center">
        <div className="d-flex justify-content-center align-items-center mt-4">
          {/* Elements on the left side of the icon */}
          <div className={`d-flex align-items-center ${styles.footerNav}`}>
            <span
              onClick={() => handleNavigate("/")}
              className={styles.footerNavLink}
            >
              Home
            </span>
            <span
              onClick={() => handleNavigate("/cabinet")}
              className={styles.footerNavLink}
            >
              Cabinet
            </span>
          </div>

          {/* Icon */}
          <img
            src={iconBig}
            className={styles.iconBigFooter}
            alt="Logo"
            onClick={() => handleNavigate("/")}
          />

          {/* Elements on the right side of the icon */}
          <div className={`d-flex align-items-center ${styles.footerNav}`}>
            <span
              onClick={() => handleNavigate("/about")}
              className={styles.footerNavLink}
            >
              About Us
            </span>
            <span
              onClick={() => handleNavigate("/donate")}
              className={styles.footerNavLink}
            >
              Donate
            </span>
          </div>
        </div>

        {/* White line */}
        <hr className={styles.breakLine} />

        {/* Adding five active social media icon elements */}
        <div
          className={`d-flex justify-content-center align-items-center ${styles.socialIconsContainer}`}
        >
          <Share />
        </div>
        <p className={styles.authorsCopyright}>
          <a href="mailto:info@smartyflip.de">info@smartyflip.de</a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
