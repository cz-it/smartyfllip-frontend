import { useState } from "react"
import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import styles from "./Login.module.css"

const LoginReload = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState<string>("")
  const [email, setEmail] = useState<string>("")

  async function handle() {
    alert("Check your email, please")
    navigate("/")
  }

  return (
    <div className={`${styles.bg} bg_greenWh`}>
      <div className={`${styles.container} d-flex justify-content-center`}>
        <div
          className={`${styles.loginPanel} ${styles.logincontainer} col-sm-12 col-lg-8 bg_light`}
        >
          <h2>Don't worry!</h2>
          <p>Now we will solve this problem.</p>
          <form onSubmit={handle} className="mb-5" id="form">
            <input
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              placeholder="Enter login"
              className="form-control mt-4"
              id="login"
              name="login"
            />
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="form-control mt-4"
              id="email"
              placeholder="Enter email"
              name="email"
            />
            <Button
              variant="success"
              type="submit"
              className="w-100 btnGreen mt-4"
              id="send"
            >
              Send
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginReload
