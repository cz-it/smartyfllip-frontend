import { useState } from "react"
import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import styles from "./Cabinet.module.css"

const CreatedCards = () => {
  const navigate = useNavigate()

  const stackHard = ["Java", "Go", "JS", "C++", "C#", "Cobol"]

  const [question, setQuestion] = useState("")
  const [answer, setAnswer] = useState("")
  const [stackName, setStackName] = useState(0)
  const [tag, setTag] = useState("")
  const [stack, setStack] = useState(stackHard[0])

  const addCard = () => {}

  return (
    <div className={styles.container}>
      <h1 className="text-center mt-3">Created Card</h1>
      <button onClick={() => navigate("/createdmoduls")}>Back</button>
      <div className="row">
        <div className="col-sm-12">
          <div className="infoCreatedmoduls m-5 ">
            <div className="col-sm-12">
              <form onSubmit={addCard} className="m-5" id="form">
                <input
                  type="text"
                  onChange={e => setTag(e.target.value)}
                  placeholder="Tag"
                  className="form-control mt-4"
                  id="tag"
                  name="tag"
                />
                <input
                  type="text"
                  onChange={e => setStack(e.target.value)}
                  placeholder="Stack"
                  className="form-control mt-4"
                  id="stack"
                  name="stack"
                />

                <textarea
                  className="form-control mt-4"
                  rows={5}
                  id="question"
                  placeholder="Enter question"
                  onChange={e => setAnswer(e.target.value)}
                  name="question"
                />

                <textarea
                  className="form-control mt-4"
                  rows={5}
                  id="answer"
                  placeholder="Enter answer"
                  onChange={e => setAnswer(e.target.value)}
                  name="answer"
                />
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
      </div>
    </div>
  )
}

export default CreatedCards
