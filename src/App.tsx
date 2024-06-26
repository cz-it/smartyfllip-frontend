import React, { useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import { useAppDispatch } from "./app/hooks"
import About from "./components/about/About"
import AdminCabinet from "./components/adminCabinet/AdminCabinet"
import Admin from "./components/cabinet/Admin"
import Cabinet from "./components/cabinet/Cabinet"
import ChangePassword from "./components/cabinet/ChangePassword"
import CreateModulesUser from "./components/cabinet/CreateModulesUser"
import CreatedCards from "./components/cabinet/CreatedCards"
import EditProfile from "./components/cabinet/EditProfile"
import CardProces from "./components/cards/CardProces"
import CardProcesGast from "./components/cards/CardProcesGast"
import Donate from "./components/donate/Donate"
import ErrorPage from "./components/errorPage/ErrorPage"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Login from "./components/login/Login"
import LoginReload from "./components/login/LoginReload"
import Registration from "./components/registration/Registration"
import { authUser } from "./features/user/userSlice"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

const App: React.FC = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(authUser())
  }, [dispatch])

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/module/:moduleId" element={<CardProces />} />
        <Route path="/guest/:moduleId" element={<CardProcesGast />} />
        <Route path="/about" element={<About />} />
        <Route path="/cabinet" element={<Cabinet />} />
        <Route path="/editprofile" element={<EditProfile />} />
        <Route path="/editpwd" element={<ChangePassword />} />
        <Route path="/created-modules" element={<CreateModulesUser />} />
        <Route path="/created-card" element={<CreatedCards />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login-reload" element={<LoginReload />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/add-stack" element={<Admin />} />
        <Route path="/admin-cabinet" element={<AdminCabinet />} />
        <Route
          path="*"
          element={<ErrorPage errorCode={404} errorMessage="Page Not Found" />}
        />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
