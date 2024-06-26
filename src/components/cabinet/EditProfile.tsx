import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { Field, Form, Formik } from "formik"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { edditUserAsync } from "../../features/user/userSlice"
import { UserEddit, UserState } from "../../features/user/type"
import styles from "./Cabinet.module.css"

const EditProfile = () => {
  const navigate = useNavigate()
  const user: UserState = useAppSelector(state => state.user)
  const dispatch = useAppDispatch()

  function handleEdditProfile(firstname: string, lastname: string) {
    const usUp: UserEddit = {
      id: user.user?.id!,
      firstName: firstname,
      lastName: lastname,
    }
    dispatch(edditUserAsync(usUp))
    navigate("/cabinet")
  }

  function validateFirstname(value: string) {
    let error
    if (value === "admin") {
      error = "Nice try!"
    } else if (!/^[a-zA-Z]+$/i.test(value)) {
      error = "Name must contain only letters"
    }
    return error
  }

  function validateLastname(value: string) {
    let error
    if (value === "admin") {
      error = "Nice try!"
    } else if (!/^[a-zA-Z]+$/i.test(value)) {
      error = "Name must contain only letters"
    }
    return error
  }

  return (
    <div id={styles.EditProfBg} className={`bg_greenWh pt-5 pb-5`}>
      <div className={`${styles.container} d-flex justify-content-center`}>
        <div className={`${styles.logincontainer} col-sm-12 col-lg-8 bg_light`}>
          <h2>Edit your profile</h2>
          <p>Enter the data that you want to update.</p>

          <Formik
            id="form"
            initialValues={{
              firstname: "",
              lastname: "",
            }}
            onSubmit={values => {
              // same shape as initial values
              handleEdditProfile(values.firstname, values.lastname)
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <Field
                  name="firstname"
                  validate={validateFirstname}
                  className="form-control mt-4"
                  placeholder="First name"
                  id="firstname"
                />
                {errors.firstname && touched.firstname && (
                  <p className="mt-4 txtRed">{errors.firstname}</p>
                )}
                <Field
                  name="lastname"
                  validate={validateLastname}
                  className="form-control mt-4"
                  placeholder="Last name"
                  id="lastname"
                />
                {errors.lastname && touched.lastname && (
                  <p className="mt-4 txtRed">{errors.lastname}</p>
                )}
                <Button
                  variant="success"
                  type="submit"
                  className="w-100 btnGreen mt-4"
                  id="submit"
                >
                  Edit
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default EditProfile
