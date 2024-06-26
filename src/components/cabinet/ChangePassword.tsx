import React, { useState } from "react"
import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { ChangePwd } from "../../features/user/type"
import { changePwdAsync, selectError } from "../../features/user/userSlice"
import styles from "./Cabinet.module.css"

const ChangePassword = () => {
  const user: any = useAppSelector(state => state.user)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const error = useAppSelector(selectError)
  const [password1, setPassword1] = useState<string>("")
  const [password2, setPassword2] = useState<string>("")
  const [showPwd1, sethowPwd1] = useState<string>("password")
  const [showPwd2, sethowPwd2] = useState<string>("password")

  async function handleChangeProfile(e: React.FormEvent<HTMLHeadElement>) {
    e.preventDefault()
    const regex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!$#%])[A-Za-z\d!$#%]{8,}$/
    if (password1 !== password2) {
      alert("Password mismatch")
    }
    if (!regex.test(password2)) {
      alert(
        "Incorrect password format. Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, only Latin letters, and one of the following symbols: !, $, #, %.",
      )
    }
    if (password1 === password2 && regex.test(password2)) {
      const objDTO: ChangePwd = {
        userId: user.user.id,
        password2: password2,
      }
      const dispatchRes = await dispatch(changePwdAsync(objDTO))
      if (changePwdAsync.fulfilled.match(dispatchRes)) {
        navigate("/cabinet")
      } else {
        alert(error)
        //navigate("/cabinet")
      }
    } else {
      //navigate("/cabinet")
    }
  }

  const pwdToggle1 = () => {
    if (showPwd1 === "text") {
      sethowPwd1("password")
    } else {
      sethowPwd1("text")
    }
  }

  const pwdToggle2 = () => {
    if (showPwd2 === "text") {
      sethowPwd2("password")
    } else {
      sethowPwd2("text")
    }
  }

  return (
    <div id={styles.EditProfBg} className={`bg_greenWh pt-5 pb-5`}>
      <div className={`${styles.container} d-flex justify-content-center`}>
        <div className={`${styles.logincontainer} col-sm-12 col-lg-8 bg_light`}>
          <h2>Edit your password</h2>
          <p>Enter your data that you want to update.</p>

          <form
            onSubmit={e => handleChangeProfile(e)}
            className="mb-5"
            id="form"
          >
            <input
              type={showPwd1}
              value={password1}
              onChange={e => setPassword1(e.target.value)}
              className="form-control mt-4"
              id="pwd1"
              placeholder="Enter new password"
              name="pswd"
            />
            <p>
              <input
                type="checkbox"
                className={`${styles.checkbox} w3-check m-2`}
                onClick={pwdToggle1}
                id="checkbox1"
              />{" "}
              Show password
            </p>

            <input
              type={showPwd2}
              value={password2}
              onChange={e => setPassword2(e.target.value)}
              className="form-control mt-4"
              id="pwd"
              placeholder="Confirm new password"
              name="pswd2"
            />
            <p>
              <input
                type="checkbox"
                className={`${styles.checkbox} w3-check m-2`}
                onClick={pwdToggle2}
                id="checkbox2"
              />{" "}
              Show password
            </p>
            <Button
              variant="success"
              type="submit"
              className="w-100 btnGreen mt-4"
              id="submit"
            >
              Sign in
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ChangePassword
