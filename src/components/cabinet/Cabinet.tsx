import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { UserState } from "../../features/user/type"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { getModulesAsync } from "../../features/cards/modulesSlice"
import { Button } from "react-bootstrap"
import styles from "./Cabinet.module.css"
import logo from "/assets/smgr.svg"

const Cabinet = () => {
  const navigate = useNavigate()
  const user = useAppSelector(state => state.user)
  const dispatch = useAppDispatch()

  const modules = useAppSelector(state => state.modules.modulesList?.data)

  const [, setUserInfo] = useState<UserState>(user)
  const [pgination, setPagination] = useState<number>(10)

  const [accountSwitch, setAccountSwitch] = useState(true)

  const MAX_STRING_LENGTH = 13
  const MAX_STRING_LENGTH_DESK = 15

  const goToEditProfile = () => {
    navigate("/editprofile")
  }

  const goToEditPassword = () => {
    navigate("/editpwd")
  }

  const moreModules = () => {
    setPagination(pgination + 10)
    dispatch(getModulesAsync(pgination + 10))
  }

  const deleteAccount = () => {
    alert(
      "To delete your account, write a request by email to our administrator admin@smartyflip.de",
    )
  }

  useEffect(() => {
    dispatch(getModulesAsync(pgination))
    setUserInfo(user)
  }, [])

  return (
    <div className="">
      {/*MOBILA*/}
      <div className={`${styles.accountMobi} bg_greenWh`}>
        <div>
          {accountSwitch ? (
            <h2
              className={`${styles.txtcenter}  txtW_s pt-2`}
              onClick={() => setAccountSwitch(false)}
            >
              {user.user?.firstName!} {user.user?.lastName}
            </h2>
          ) : (
            <div onClick={() => setAccountSwitch(true)}>
              <h2 className={`${styles.txtcenter}  txtW_s pt-2`}>
                {user.user?.firstName!} {user.user?.lastName}
              </h2>
              <p className={`${styles.txtcenter}  txtW_s pt-1`}>
                E-mail: {user.user?.email}
              </p>
              <p className={`${styles.txtcenter}  txtW_s pt-1`}>
                You are with us since: {user.user?.dateRegistered}
              </p>
              <div className="d-flex justify-content-center mt-2 mb-3">
                <Button
                  variant="warning"
                  onClick={goToEditProfile}
                  className="w-50"
                  id="goToEditProfileMobi"
                >
                  <p className=" txtHeaderWeis mb-0">Edit profile</p>
                </Button>
              </div>
              <div className="d-flex justify-content-center mt-3 mb-3">
                <Button
                  variant="warning"
                  onClick={goToEditPassword}
                  className="w-50"
                  id="goToEditPasswordMobi"
                >
                  <p className=" txtHeaderWeis mb-0 ">Change password</p>
                </Button>
              </div>
              <div className="d-flex justify-content-center mt-3 mb-3">
                <Button
                  variant="danger"
                  onClick={deleteAccount}
                  className="w-50"
                  id="deleteMobi"
                >
                  <p className=" txtHeaderWeis mb-0">Delete account</p>
                </Button>
              </div>
            </div>
          )}
        </div>
        <div className={styles.cardsMobi}>
          <div className="d-flex justify-content-center mt-5 mb-5">
            <Button
              variant="warning"
              onClick={() => navigate("/created-modules")}
              className="col-lg-4 col-sm-8"
              id="gotoCreateModMobi"
            >
              <p className=" txtHeaderWeis mb-0">Create your own module</p>
            </Button>
          </div>
          {modules?.map(d => (
            <div key={d.moduleId} className="d-flex justify-content-center">
              <div
                className={`${styles.customCard} ${styles.cardA} shadow d-flex flex-row`}
                onClick={() => navigate(`/module/${d.moduleId}`)}
                id={String(d.moduleId)}
              >
                <img src="/assets/smgr.svg" className={`${styles.iconCard}`} />
                <div className="infoInCard ps-3">
                  <h5>
                    {(d.moduleName && d.moduleName.length > MAX_STRING_LENGTH
                      ? `${d.moduleName.substring(0, MAX_STRING_LENGTH + 1)}...`
                      : d.moduleName) || ""}
                  </h5>
                  <p className={`${styles.txtCatd}`}>{d.username}</p>
                  <div className="d-flex flex-row justify-content-between">
                    <p>
                      {d.cardsCount} quests: {d.stackName}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="d-flex justify-content-center mt-5 mb-5">
            <Button
              variant="success"
              onClick={moreModules}
              className="w-50"
              id="moreMobi"
            >
              <p className=" txtHeaderWeis mb-0 ">More</p>
            </Button>
          </div>
        </div>
      </div>

      {/*DESKTOP*/}
      <div className={styles.cardsDesktop}>
        <div className={`${styles.bg} ${styles.account} bg_greenWh`}>
          <div className="pt-5 col-sm-12">
            <div className="d-flex justify-content-center">
              <img src={user.user?.image!} className={styles.imgCabinet} />
            </div>
            <h2 className={`${styles.txtcenter}  txtW_s pt-3`}>
              {user.user?.firstName!} {user.user?.lastName}
            </h2>

            <p className={`${styles.txtcenter}  txtW_s pt-3`}>
              E-mail: {user.user?.email}
            </p>

            <p className={`${styles.txtcenter}  txtW_s pt-3`}>
              You are with us since: {user.user?.dateRegistered}
            </p>

            <div className="m-5 mt-5">
              {/*<p className="txtW_s col-sm-6 ps-5">140 Carts</p>
              <p className="txtW_s col-sm-6 ps-5">40 person carts</p>*/}
            </div>
            <div className="d-flex justify-content-center mt-5 mb-3">
              <Button
                variant="warning"
                onClick={goToEditProfile}
                className="col-lg-6 col-sm-12"
                id="goToEditProfile"
              >
                <p className=" txtHeaderWeis mb-0">Edit profile</p>
              </Button>
            </div>
            <div className="d-flex justify-content-center mt-3 mb-3">
              <Button
                variant="warning"
                onClick={goToEditPassword}
                className="col-lg-6 col-sm-12"
                id="goToEditPassword"
              >
                <p className=" txtHeaderWeis mb-0 ">Change password</p>
              </Button>
            </div>
            <div className="d-flex justify-content-center mt-3 mb-3">
              <Button
                variant="danger"
                onClick={deleteAccount}
                className="col-lg-6 col-sm-12"
                id="deleteaccount"
              >
                <p className=" txtHeaderWeis mb-0">Delete account</p>
              </Button>
            </div>
          </div>
        </div>
        <div className="col-sm-8 pe-5 mx-auto">
          <h1 className={`${styles.txtcenter} mt-3 mb-4`}>
            Hello, {user.user?.firstName}
          </h1>
          <div className="row col-sm-12 mx-auto">
            <div className="d-flex justify-content-center">
              <Button
                variant="warning"
                onClick={() => navigate("/created-modules")}
                className="col-lg-4 col-sm-12"
                id="gotoCreateMod"
              >
                <p className=" txtHeaderWeis mb-0">Create your own module</p>
              </Button>
            </div>
          </div>
          <div className="col-sm-12 col-lg-12 row mx-auto m-5 d-flex flex-row justify-content-center">
            {modules?.map(d => (
              <div key={d.moduleId} className="col-sm-12 col-lg-6 mb-2">
                <div
                  className={`${styles.customCard} shadow d-flex flex-row pt-2 pb-2 cursor`}
                  onClick={() => navigate(`/module/${d.moduleId}`)}
                  id={String(d.moduleId)}
                >
                  <img src={logo} className={`${styles.iconCard}`} />
                  <div className="infoInCard ps-3">
                    <h5>
                      {(d.moduleName &&
                      d.moduleName.length > MAX_STRING_LENGTH_DESK
                        ? `${d.moduleName.substring(0, MAX_STRING_LENGTH_DESK + 1)}...`
                        : d.moduleName) || ""}
                    </h5>
                    <p className={`${styles.txtCatd}`}>{d.username}</p>
                    <div className="d-flex flex-row justify-content-between">
                      <p>
                        {d.cardsCount} quests: {d.stackName}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="d-flex justify-content-center mt-5 mb-3">
              <Button
                variant="success"
                onClick={moreModules}
                className="w-50"
                id="more"
              >
                <p className=" txtHeaderWeis mb-0 ">More</p>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cabinet
