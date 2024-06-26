import { useNavigate } from "react-router-dom"
import styles from "./Stack.module.css"
import rectangle from "/assets/icons_module/Rectangle 177.svg"

const Stack = (props: any) => {
  const navigate = useNavigate()
  return (
    <div
      className={styles.bg_stack}
      onClick={() => navigate("/cardprocesgast")}
    >
      <div className={styles.container}>
        <img className={styles.icon} src={rectangle} alt="Icon" />
        <div className={styles.text}>
          <p className={styles.StackName}>{}</p>
          <p className={styles.CreationDate}>{props.stackName}</p>
          <p className={styles.Questions}>{props.cards}</p>
        </div>
      </div>
    </div>
  )
}

export default Stack
