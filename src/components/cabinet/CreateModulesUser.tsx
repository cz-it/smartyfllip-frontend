import React, { useEffect, useState } from "react"
import { Button } from "react-bootstrap"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { selectUser } from "../../features/user/userSlice"
import {
  addModule,
  deleteModule,
  edditModule,
  getModuleById,
  getModulesByUserId,
} from "../../features/cards/modulesSlice"
import {
  ModuleEdditObj,
  ModuleRequestObj,
  Module,
  Card,
  CardDTO,
  CardEditDTO,
} from "../../features/cards/type"
import {
  addCardForModule,
  deleteCard,
  editCard,
  getCardsByModule,
} from "../../features/cards/cardsSlice"
import styles from "./CreatedModules.module.css"
import { Stacks } from "../adminCabinet/api"
import { fechStacks } from "../../features/cards/stackApi"

const CreateModulesUser = () => {
  const stackHard = ["Java", "Go", "JS", "C++", "C#", "Cobol"]
  const [stacks, setStack] = useState<Array<Stacks>>([])
  const dispatch = useAppDispatch()

  /*for module*/
  const modules = useAppSelector(state => state.modules.modulesList?.data)
  const [currentModule, setCurrentModule] = useState<Module>({} as Module)
  const [nameModule, setNameModule] = useState("")
  const [moduleEdditId, setNameMmoduleEdditId] = useState("")
  const [questionsQuestions, setQuestionsQuestions] = useState(0)

  /*for card*/
  const [question, setQuestion] = useState("")
  const [answer, setAnswer] = useState("")
  const [cardIdCurrent, setCardIdCurrent] = useState(0)
  const [stackName, setStackName] = useState(stackHard[0])
  const cards = useAppSelector(state => state.cards)

  const user = useAppSelector(selectUser)

  const MAX_STRING_LENGTH = 30
  const MAX_STRING_LENGTH_2 = 20

  const getStack = async () => {
    const stacks = await fechStacks()
    setStack(stacks)
  }

  const getAllModulesForUser = () => {
    dispatch(getModulesByUserId(String(user?.id)))
  }

  const getCardsByModuleCurrent = (card: Card) => {
    setCardIdCurrent(card.cardId)
    setQuestion(card.question)
    setAnswer(card.answer)
  }

  const createModul = (e: React.FormEvent<HTMLHeadElement>) => {
    e.preventDefault()
    const moduleRequestObj: ModuleRequestObj = {
      moduleName: nameModule,
      userName: String(user?.username),
      stackName: stackName,
    }
    dispatch(addModule(moduleRequestObj)).then((data: any) => {
      dispatch(getCardsByModule(String(data.payload?.moduleId)))
    })
    setNameModule("")
    setQuestionsQuestions(0)
    setQuestion("")
    setAnswer("")
  }

  const edditModuleHer = (id: string, e: React.FormEvent<HTMLHeadElement>) => {
    e.preventDefault()
    const moduleRequestObj: ModuleEdditObj = {
      moduleId: id,
      moduleName: nameModule,
      userName: String(user?.username),
      stackName: stackName,
    }
    dispatch(edditModule(moduleRequestObj))
  }

  const deleteModuleHer = (id: string, e: React.FormEvent<HTMLHeadElement>) => {
    e.preventDefault()
    dispatch(deleteModule(String(id)))
    setNameModule("")
  }

  const getModuleInForm = (module: Module) => {
    setQuestion("")
    setAnswer("")
    setCurrentModule(module)
    setNameModule(module.moduleName)
    setNameMmoduleEdditId(String(module.moduleId))
    setQuestionsQuestions(module.cardsCount)
    dispatch(getModuleById(String(module.moduleId)))
    dispatch(getCardsByModule(String(module.moduleId)))
  }

  const addCard = (e: React.FormEvent<HTMLHeadElement>) => {
    e.preventDefault()
    if (question == "" || answer == "") {
      alert("Fill in the fields for the question and answer")
    } else {
      const obj: CardDTO = {
        question: question,
        answer: answer,
        level: "",
        moduleId: Number(currentModule.moduleId),
      }
      dispatch(addCardForModule(obj))
      setQuestionsQuestions(questionsQuestions + 1)
      setQuestion("")
      setAnswer("")
    }
  }

  const editCardCurrent = (e: React.FormEvent<HTMLHeadElement>) => {
    e.preventDefault()
    if (question == "" || answer == "") {
      alert("Fill in the fields for the question and answer")
    } else {
      const obj: CardEditDTO = {
        id: cardIdCurrent,
        question: question,
        answer: answer,
        level: "",
        moduleId: Number(currentModule.moduleId),
      }
      dispatch(editCard(obj))
      setQuestion("")
      setAnswer("")
    }
  }

  const deleteCardCurrent = (e: React.FormEvent<HTMLHeadElement>) => {
    e.preventDefault()
    if (question == "" || answer == "") {
      alert("Select a card to delete")
    } else {
      dispatch(deleteCard(cardIdCurrent))
      setQuestion("")
      setAnswer("")
      setQuestionsQuestions(questionsQuestions - 1)
    }
  }

  useEffect(() => {
    getStack()
    getAllModulesForUser()
  }, [])

  return (
    <div className={styles.container}>
      <h1 className="text-center mt-5">Creating modules and cards</h1>
      <div className={`${styles.title} row`}>
        <div className="col-sm-6 mt-3">
          <div className={`${styles.infoCreateModules} `}>
            <h4 className="text-center mt-4">Creating module:</h4>

            <form className={styles.formAreaModules} id="form">
              <select
                id="formSelect"
                className="form-select "
                onChange={e => setStackName(e.target.value)}
                value={stackName}
              >
                {stacks.map(m => (
                  <option key={m.stackId} id={String(m.stackId)}>
                    {m.stackName}
                  </option>
                ))}
              </select>
              <input
                type="text"
                onChange={e => setNameModule(e.target.value)}
                placeholder="Module name"
                className="form-control mt-4"
                id="name"
                name="name"
                value={nameModule}
              />
            </form>
            <div
              className={`${styles.btnBlock} row d-flex justify-content-between`}
            >
              <Button
                variant="success"
                type="submit"
                className="col-lg-3 btnGreen mb-2"
                id="createM"
                onClick={e => createModul(e)}
              >
                Create
              </Button>
              <Button
                variant="warning"
                type="submit"
                className="col-lg-3 btnGreen mb-2"
                id="editM"
                onClick={e => edditModuleHer(moduleEdditId, e)}
              >
                <p className="txtW_s mb-0">Edit / Save</p>
              </Button>
              <Button
                variant="danger"
                type="submit"
                className="col-lg-3 btnGreen mb-2"
                id="deleteM"
                onClick={e => deleteModuleHer(moduleEdditId, e)}
              >
                Delete
              </Button>
            </div>
          </div>
          <div className={styles.infoModules}>
            <h3 className="text-center mt-3">Your modules:</h3>
            <div className="container row mx-auto ">
              <div className="col-sm-12 col-xl-10 mx-auto">
                <div className=" col-sm-10  row mx-auto mt-5 mb-5 d-flex justify-content-around">
                  {modules?.map(m => (
                    <div
                      key={m.moduleId}
                      onClick={() => getModuleInForm(m)}
                      className={`${styles.moduleDiv} ${styles.mymodule} text-center mb-2 `}
                    >
                      {(m.moduleName && m.moduleName.length > MAX_STRING_LENGTH
                        ? `${m.moduleName.substring(0, MAX_STRING_LENGTH)}...`
                        : m.moduleName) || ""}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* card*/}

        <div className="col-sm-6 mt-3">
          <div className={`${styles.infoCreateCards} `}>
            <form className={styles.formAreaCards} id="form">
              <textarea
                className={styles.formControl}
                rows={2}
                id="question"
                placeholder="Create Card: write your question here"
                onChange={e => setQuestion(e.target.value)}
                name="question"
                value={question}
              />

              <textarea
                className={styles.formControl}
                rows={3}
                id="answer"
                placeholder="Create Card: write your answer here"
                onChange={e => setAnswer(e.target.value)}
                name="answer"
                value={answer}
              />
            </form>
            <div
              className={`${styles.btnBlock} row d-flex justify-content-between`}
            >
              <Button
                variant="success"
                type="submit"
                className=" col-lg-3 btnGreen mb-2"
                id="addCard"
                onClick={e => addCard(e)}
              >
                Add
              </Button>
              <Button
                variant="warning"
                type="submit"
                className="col-lg-3 btnGreen mb-2"
                id="editCard"
                onClick={e => editCardCurrent(e)}
              >
                <p className="txtW_s mb-0">Edit / Save</p>
              </Button>
              <Button
                variant="danger"
                type="submit"
                className="col-lg-3  btnGreen mb-2"
                id="deleteCard"
                onClick={e => deleteCardCurrent(e)}
              >
                Delete
              </Button>
            </div>
          </div>

          <div className={`${styles.container} row`}>
            <h3 className="ms-2 my-3">
              Module name:{" "}
              {(nameModule && nameModule.length > MAX_STRING_LENGTH_2
                ? `${nameModule.concat("_").substring(0, MAX_STRING_LENGTH_2)}...`
                : nameModule) || ""}
            </h3>
            <div className="d-flex flex-row justify-content-around flex-wrap">
              {cards.cardssList?.map((c, i) => (
                <div
                  key={i}
                  onClick={() => getCardsByModuleCurrent(c)}
                  className={`${styles.cardDiv} ${styles.mymodule} text-center p-2 m-2 `}
                >
                  {i + 1}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateModulesUser
