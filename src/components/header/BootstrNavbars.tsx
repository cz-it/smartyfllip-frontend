import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import Button from "react-bootstrap/Button"
import style from "./Header.module.css"
import iconBig from "/assets/iconBig.svg"
import { NavLink, useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { useContext } from "react"
import { UserState } from "../../features/user/type"
import { logout } from "../../features/user/userSlice"
import { AuchContext } from "../../features/utils/context"

const BootstrNavbars = () => {
  useContext(AuchContext)
  const user: UserState = useAppSelector(state => state.user)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const handleLogout = () => {
    dispatch(logout())
    navigate("/")
  }

  const toHome = () => {
    navigate("/")
  }

  return (
    <Navbar expand="lg" className="bg_greenDark">
      <Container className="bg_greenDark">
        <img src={iconBig} className={style.iconHeaderBig} onClick={toHome} />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-between"
        >
          <Nav className="me-auto ms-5">
            <NavLink to={"/"} className={style.link}>
              Home
            </NavLink>

            <NavLink to={"/about"} className={style.link}>
              About Us
            </NavLink>

            <NavLink to={"/donate"} className={style.link}>
              Donate
            </NavLink>

            {user.status === "success" && (
              <NavLink to={"/cabinet"} className={`${style.link}`}>
                Cabinet
              </NavLink>
            )}

            {user.status === "success" &&
              user.user?.roles?.includes("ADMINISTRATOR") && (
                <NavLink to={"/admin-cabinet"} className={style.link}>
                  Admin Area
                </NavLink>
              )}
          </Nav>

          <div className={style.user_data}>
            {user.status === "success" ? (
              <>
                <span className={`${style.profilePic}`}>
                  <NavLink
                    to={"/cabinet"}
                    className={style.link}
                    title="Cabinet"
                  >
                    <img
                      src={user.user?.image}
                      alt={user.user?.firstName + " " + user.user?.lastName}
                      draggable="false"
                    />
                  </NavLink>
                </span>

                <Button
                  variant="link"
                  id="sign-out"
                  onClick={handleLogout}
                  className={`${style.btnSignOut}`}
                >
                  Sign out
                </Button>
              </>
            ) : (
              (user.status === "error" || user.status === "idle") && (
                <>
                  <Button
                    variant="link"
                    id="button-sign-in"
                    onClick={() => navigate("/login")}
                    className={`txtHeaderWeis me-2 ${style.btnSignIn}`}
                  >
                    Sign in
                  </Button>
                  <Button
                    id="button-reg"
                    variant="warning"
                    className={`txtHeaderWeis ${style.textInBtn} ${style.regBtn}`}
                    onClick={() => navigate("/registration")}
                  >
                    Registration
                  </Button>
                </>
              )
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default BootstrNavbars
