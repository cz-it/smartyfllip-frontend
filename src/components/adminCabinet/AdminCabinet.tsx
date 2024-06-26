import axios from "axios"
import styles from "./AdminCabinet.module.css"
import { useState, ChangeEvent, useEffect } from "react"
import { getAllUsers, deleteUser, User, AddModuleDto } from "./api"
import { getAllStacks, Stacks, deleteStack, addStack } from "./api"
import { getAllModules, Modules, deleteModule } from "./api"
import { getAllCards, deleteCard, Cards } from "./api"
import AddStackModal from "./AddStackModal"
import DeleteModal from "./DeleteModal"
import AddModuleModal from "./AddModuleModal"
import { useAppSelector } from "../../app/hooks"
import { selectUser } from "../../features/user/userSlice"

const AdminCabinet = () => {
  const [allUsers, setAllUsers] = useState<Array<User>>([])
  const [allModules, setAllModules] = useState<Array<Modules>>([])
  const [allStacks, setAllStacks] = useState<Array<Stacks>>([])
  const [allCards, setAllCards] = useState<Array<Cards>>([])
  const [updateModules, setUpdateModules] = useState(false)

  const [currentPage, setCurrentPage] = useState(1)
  const [view, setView] = useState<"users" | "modules" | "stacks" | "cards">(
    "users",
  )
  const [activeButton, setActiveButton] = useState<
    "users" | "modules" | "stacks" | "cards" | ""
  >("")

  const [isAddStackModalOpen, setAddStackModalOpen] = useState(false)
  const [isAddModuleModalOpen, setAddModuleModalOpen] = useState(false)
  const [isConfirmDeleteModalOpen, setConfirmDeleteStackModalOpen] =
    useState(false)
  const [currentItemName, setCurrentItemName] = useState("")
  const [itemToDelete, setItemToDelete] = useState<Stacks | null>(null)
  const [modalTitle, setModalTitle] = useState("")
  const [stackName, setStackName] = useState("")

  const [isConfirmDeleteModuleModalOpen, setConfirmDeleteModuleModalOpen] =
    useState(false)
  const [moduleToDelete, setModuleToDelete] = useState<Modules | null>(null)

  const [isConfirmDeleteUserModalOpen, setConfirmDeleteUserModalOpen] =
    useState(false)
  const [userToDelete, setUserToDelete] = useState<User | null>(null)

  const [isConfirmDeleteCardModalOpen, setConfirmDeleteCardModalOpen] =
    useState(false)
  const [cardToDelete, setCardToDelete] = useState<Cards | null>(null)

  const itemsPerPage = 11
  const MAX_STRING_LENGTH = 20

  const user = useAppSelector(selectUser)

  const handleUsersClick = async () => {
    const users = await getAllUsers()
    setAllUsers(users)
    setCurrentPage(1)
    setView("users")
    setActiveButton("users")
  }

  const handleModulesClick = async () => {
    const modules = await getAllModules()
    setAllModules(modules)
    setCurrentPage(1)
    setView("modules")
    setActiveButton("modules")
  }

  const handleStacksClick = async () => {
    const stacks = await getAllStacks()
    setAllStacks(stacks)
    setCurrentPage(1)
    setView("stacks")
    setActiveButton("stacks")
  }

  const handleCardsClick = async () => {
    const cards = await getAllCards()
    setAllCards(cards)
    setCurrentPage(1)
    setView("cards")
    setActiveButton("cards")
  }

  // User Actions

  const handleOpenConfirmDeleteUserModal = (item: any) => {
    setUserToDelete(item)
    setConfirmDeleteUserModalOpen(true)
  }

  const handleCloseConfirmDeleteUserModal = () => {
    setUserToDelete(null)
    setConfirmDeleteUserModalOpen(false)
  }

  const handleConfirmDeleteUser = async () => {
    if (userToDelete) {
      await deleteUser(userToDelete.id)
      setAllUsers(allUsers.filter(user => user.id !== userToDelete?.id))
      handleCloseConfirmDeleteUserModal()
    }
  }

  const handleDeleteUser = (id: number) => {
    const userToDelete = allUsers.find(user => user.id === id)
    if (userToDelete) {
      handleOpenConfirmDeleteUserModal(userToDelete)
    }
  }

  // Stack Actions

  const handleOpenAddStackModal = (title: string) => {
    setModalTitle(title)
    setAddStackModalOpen(true)
  }

  const handleCloseAddStackModal = () => {
    setAddStackModalOpen(false)
    setCurrentItemName("")
  }

  const handleOpenConfirmDeleteStackModal = (item: any) => {
    setItemToDelete(item)
    setConfirmDeleteStackModalOpen(true)
  }

  const handleCloseConfirmDeleteStackModal = () => {
    setItemToDelete(null)
    setConfirmDeleteStackModalOpen(false)
  }

  const handleSaveStack = async () => {
    const newItem = { stackName: currentItemName, modulesCount: 0, stackId: 0 }
    const savedStack = await addStack(newItem)
    if (savedStack) {
      setAllStacks([...allStacks, savedStack])
    }
    handleCloseAddStackModal()
  }

  const handleDeleteStack = (stackId: number) => {
    const stackToDelete = allStacks.find(stack => stack.stackId === stackId)
    if (stackToDelete) {
      handleOpenConfirmDeleteStackModal(stackToDelete)
    }
  }

  const handleConfirmDeleteStack = async () => {
    if (itemToDelete) {
      await deleteStack(itemToDelete.stackId)
      setAllStacks(
        allStacks.filter(stack => stack.stackId !== itemToDelete.stackId),
      )
      handleCloseConfirmDeleteStackModal()
    }
  }

  // Modules Actions

  const handleOpenAddModuleModal = (title: string) => {
    setModalTitle(title)
    setAddModuleModalOpen(true)
  }

  const handleCloseAddModuleModal = () => {
    setAddModuleModalOpen(false)
    setCurrentItemName("")
    setStackName("")
  }

  const addModuleToStack = async (module: AddModuleDto) => {
    try {
      console.log("preree")
      const response = await axios.post(`/api/v1/modules/USER`, module)

      return response.data
    } catch (error) {
      console.error("Error adding module", error)
      return null
    }
  }

  const handleSaveModule = async () => {
    const newItem: AddModuleDto = {
      moduleName: currentItemName,
      stackName,
      username: user?.username || "",
    }
    if (true) {
      const savedModule = await addModuleToStack(newItem)
      if (savedModule) {
        setAllModules([...allModules, savedModule])
        setCurrentItemName("")
        setStackName("")
        handleCloseAddModuleModal()
        setUpdateModules(prev => !prev) // Зміна стану для примусового перерендерингу
      }
    } else {
      console.error("Stack does not exist on the backend.")
    }
  }

  const handleOpenConfirmDeleteModuleModal = (item: any) => {
    setModuleToDelete(item)
    setConfirmDeleteModuleModalOpen(true)
  }

  const handleCloseConfirmDeleteModuleModal = () => {
    setModuleToDelete(null)
    setConfirmDeleteModuleModalOpen(false)
  }

  const handleConfirmDeleteModule = async () => {
    if (moduleToDelete) {
      await deleteModule(moduleToDelete.moduleId)
      setAllModules(
        allModules.filter(
          module => module.moduleId !== moduleToDelete?.moduleId,
        ),
      )
      handleCloseConfirmDeleteModuleModal()
    }
  }

  const handleDeleteModule = (moduleId: number) => {
    const moduleToDelete = allModules.find(
      module => module.moduleId === moduleId,
    )
    if (moduleToDelete) {
      handleOpenConfirmDeleteModuleModal(moduleToDelete)
    }
  }

  // Card Actions

  const handleOpenConfirmDeleteCardModal = (item: any) => {
    setCardToDelete(item)
    setConfirmDeleteCardModalOpen(true)
  }

  const handleCloseConfirmDeleteCardModal = () => {
    setCardToDelete(null)
    setConfirmDeleteCardModalOpen(false)
  }

  const handleConfirmDeleteCard = async () => {
    if (cardToDelete) {
      await deleteCard(cardToDelete.cardId)
      setAllCards(allCards.filter(card => card.cardId !== cardToDelete?.cardId))
      handleCloseConfirmDeleteCardModal()
    }
  }

  const handleDeleteCard = (cardId: number) => {
    const cardToDelete = allCards.find(card => card.cardId === cardId)
    if (cardToDelete) {
      handleOpenConfirmDeleteCardModal(cardToDelete)
    }
  }

  useEffect(() => {
    if (updateModules) {
      handleModulesClick()
    }
  }, [updateModules])

  useEffect(() => {
    handleUsersClick()
  }, [])

  const totalPages =
    view === "users"
      ? Math.ceil((allUsers?.length || 0) / itemsPerPage)
      : view === "modules"
        ? Math.ceil((allModules?.length || 0) / itemsPerPage)
        : view === "stacks"
          ? Math.ceil((allStacks?.length || 0) / itemsPerPage)
          : Math.ceil((allCards?.length || 0) / itemsPerPage)

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  useEffect(() => {
    handleUsersClick()
  }, [])

  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage

  const dateFormator = (dateTimeString: string | number | Date) => {
    const date = new Date(dateTimeString)

    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, "0")
    const day = String(date.getDate()).padStart(2, "0")

    const formattedDate = `${year}-${month}-${day}`

    return formattedDate
  }

  // const MAX_STRING_LENGTH = 15

  return (
    <div className={styles.bg}>
      <div className={styles.leftContainer}>
        <a
          onClick={handleUsersClick}
          className={`${styles.leftbtn} mt-1 ${activeButton === "users" ? styles.activeButton : ""}`}
        >
          Users
        </a>
        <a
          onClick={handleStacksClick}
          className={`${styles.leftbtn} my-1 ${activeButton === "stacks" ? styles.activeButton : ""}`}
        >
          Stacks
        </a>
        <a
          onClick={handleModulesClick}
          className={`${styles.leftbtn} my-1 ${activeButton === "modules" ? styles.activeButton : ""}`}
        >
          Modules
        </a>
        <a
          onClick={handleCardsClick}
          className={`${styles.leftbtn} my-1 ${activeButton === "cards" ? styles.activeButton : ""}`}
        >
          Cards
        </a>
      </div>
      <div className={`${styles.rightContainer}`}>
        {view === "users" ? (
          <>
            {/* User section */}

            <div className={` ${styles.insideContainer}`}>
              <input
                type="text"
                className={`${styles.input} my-1`}
                placeholder="Name"
              />
              <input
                type="text"
                className={`${styles.input} my-1`}
                placeholder="Login"
              />
              <button className={`${styles.searchbtn} my-1`}>Search</button>
            </div>

            <div className={styles.bottomContainer}>
              <div className="table-responsive-sm">
                <table
                  id={styles.userTable}
                  className={`${styles.table} table-hover`}
                >
                  <thead>
                    <tr>
                      <th
                        id={styles.topLeft}
                        scope="col"
                        className={styles.tags}
                      >
                        #
                      </th>
                      <th scope="col" className={styles.tags}>
                        Name
                      </th>
                      <th scope="col" className={styles.tags}>
                        Login
                      </th>
                      <th scope="col" className={styles.tags}>
                        Email
                      </th>
                      <th scope="col" className={styles.tags}>
                        Registered
                      </th>
                      <th scope="col" className={styles.tags}>
                        Role
                      </th>
                      <th
                        id={styles.topRight}
                        scope="col"
                        className={styles.tags}
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className={`${styles.divider} table-group-divider `}>
                    {allUsers.slice(startIndex, endIndex).map((user, index) => {
                      const isLastRow =
                        index ===
                        allUsers.slice(startIndex, endIndex).length - 1
                      return (
                        <tr key={user.id}>
                          <th
                            id={
                              isLastRow
                                ? styles.borderBottomLeftRadius
                                : styles.topLeftSmall
                            }
                            scope="row"
                            className={`${styles.listNumber}`}
                            style={
                              isLastRow
                                ? { borderBottomLeftRadius: "15px" }
                                : {}
                            }
                          >
                            {startIndex + index + 1}
                          </th>
                          <td
                            data-title="First name:"
                            className={styles.userData}
                          >
                            {user.firstName}
                          </td>
                          <td
                            data-title="Last name:"
                            className={styles.userData}
                          >
                            {user.lastName}
                          </td>
                          <td data-title="Email:" className={styles.userData}>
                            {user.email}
                          </td>
                          <td
                            data-title="Registered"
                            className={styles.userData}
                          >
                            {user.dateRegistered}
                          </td>
                          <td
                            data-title="Role:"
                            className={`${styles.userData} px-xs-1`}
                          >
                            {user.roles}
                          </td>
                          <td
                            data-title="Action:"
                            className={
                              isLastRow ? styles.borderBottomRightRadius : ""
                            }
                          >
                            <button className={styles.actionbtn1}>Edit</button>
                            <button
                              className={styles.actionbtn2}
                              onClick={() => handleDeleteUser(user.id)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        ) : view === "modules" ? (
          <>
            {/* Module section */}

            <div className={`${styles.insideContainer}`}>
              <input
                type="text"
                className={`${styles.input} my-1`}
                placeholder="Module Name"
              />
              <input
                type="text"
                className={`${styles.input} mb-1`}
                placeholder="Stack Name"
              />
              <button className={`${styles.searchbtn} mb-1`}>Search</button>
              <button
                className={`${styles.addstackbtn} mb-1`}
                onClick={() => handleOpenAddModuleModal("Add New Module")}
              >
                + Add Module
              </button>
            </div>

            <div className={styles.bottomContainer}>
              <div className="table-responsive-sm">
                <table
                  id={styles.modulesTable}
                  className={`${styles.table} table-hover`}
                >
                  <thead>
                    <tr>
                      <th
                        id={styles.topLeft}
                        scope="col"
                        className={styles.tags}
                      >
                        #
                      </th>
                      <th scope="col" className={styles.tags}>
                        Module Name
                      </th>
                      <th scope="col" className={styles.tags}>
                        Created by
                      </th>
                      <th scope="col" className={styles.tags}>
                        Created
                      </th>
                      <th scope="col" className={styles.tags}>
                        Stack Name
                      </th>
                      <th scope="col" className={styles.tags}>
                        Cards Amount
                      </th>
                      <th
                        id={styles.topRight}
                        scope="col"
                        className={styles.tags}
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="table-group-divider">
                    {allModules &&
                      allModules
                        .slice(startIndex, endIndex)
                        .map((module, index) => {
                          const isLastRow =
                            index ===
                            allModules.slice(startIndex, endIndex).length - 1
                          return (
                            <tr key={module.moduleId}>
                              <th
                                id={
                                  isLastRow
                                    ? styles.borderBottomLeftRadius
                                    : styles.topLeftSmall
                                }
                                scope="row"
                                className={`${styles.listNumber}`}
                                style={
                                  isLastRow
                                    ? { borderBottomLeftRadius: "15px" }
                                    : {}
                                }
                              >
                                {startIndex + index + 1}
                              </th>
                              <td
                                data-title="Module name:"
                                className={styles.userData}
                              >
                                {/* {module.moduleName} */}
                                {(module.moduleName &&
                                module.moduleName.length > MAX_STRING_LENGTH
                                  ? `${module.moduleName.substring(0, MAX_STRING_LENGTH + 1)}...`
                                  : module.moduleName) || ""}
                              </td>
                              <td
                                data-title="Created by:"
                                className={styles.userData}
                              >
                                {module.username}
                              </td>
                              <td
                                data-title="Created:"
                                className={styles.userData}
                              >
                                {dateFormator(module.dateCreated)}
                              </td>
                              <td
                                data-title="Stack name:"
                                className={styles.userData}
                              >
                                {module.stackName}
                              </td>
                              <td
                                data-title="Cards amount:"
                                className={styles.userData}
                              >
                                {module.cardsCount}
                              </td>
                              <td
                                data-title="Action:"
                                className={
                                  isLastRow
                                    ? styles.borderBottomRightRadius
                                    : ""
                                }
                              >
                                <button className={styles.actionbtn1}>
                                  Edit
                                </button>
                                <button
                                  className={styles.actionbtn2}
                                  onClick={() =>
                                    handleDeleteModule(module.moduleId)
                                  }
                                >
                                  Delete
                                </button>
                              </td>
                            </tr>
                          )
                        })}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        ) : view === "stacks" ? (
          <>
            {/* Stack section */}

            <div className={`${styles.insideContainer}`}>
              <input
                type="text"
                className={`${styles.input} my-1`}
                placeholder="Stack Name"
              />
              <button className={`${styles.searchstackbtn} my-1`}>
                Search
              </button>
              <button
                className={`${styles.addstackbtn} my-1`}
                onClick={() => handleOpenAddStackModal("Add New Stack")}
              >
                + Add Stack
              </button>
            </div>
            <div className={styles.bottomContainer}>
              <div className="table-responsive-sm">
                <table
                  id={styles.stacksTable}
                  className={`${styles.table} table-hover`}
                >
                  <thead>
                    <tr>
                      <th
                        id={styles.topLeft}
                        scope="col"
                        className={styles.tags}
                      >
                        #
                      </th>
                      <th scope="col" className={styles.tags}>
                        Stack Name
                      </th>
                      <th scope="col" className={styles.tags}>
                        Modules Amount
                      </th>
                      <th
                        id={styles.topRight}
                        scope="col"
                        className={styles.tags}
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="table-group-divider">
                    {allStacks &&
                      allStacks
                        .slice(startIndex, endIndex)
                        .map((stack, index) => {
                          const isLastRow =
                            index ===
                            allStacks.slice(startIndex, endIndex).length - 1
                          return (
                            <tr key={stack.stackId}>
                              <th
                                id={
                                  isLastRow
                                    ? styles.borderBottomLeftRadius
                                    : styles.topLeftSmall
                                }
                                scope="row"
                                className={`${styles.listNumber}`}
                                style={
                                  isLastRow
                                    ? { borderBottomLeftRadius: "15px" }
                                    : {}
                                }
                              >
                                {startIndex + index + 1}
                              </th>
                              <td
                                data-title="Stack name:"
                                className={styles.stackData}
                              >
                                {stack.stackName}
                              </td>
                              <td
                                data-title="Modules amount:"
                                className={styles.stackData}
                              >
                                {stack.modulesCount}
                              </td>
                              <td
                                data-title="Action:"
                                className={
                                  isLastRow
                                    ? styles.borderBottomRightRadius
                                    : ""
                                }
                              >
                                <button className={styles.actionbtn1}>
                                  Edit
                                </button>
                                <button
                                  className={styles.actionbtn2}
                                  onClick={() =>
                                    handleDeleteStack(stack.stackId)
                                  }
                                >
                                  Delete
                                </button>
                              </td>
                            </tr>
                          )
                        })}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Cards section */}

            <div className={`${styles.insideContainer}`}>
              <input
                type="text"
                className={`${styles.input} my-1`}
                placeholder="Card Name"
              />
              <input
                type="text"
                className={`${styles.input} my-1`}
                placeholder="Module Name"
              />
              <button className={`${styles.searchbtn} my-1`}>Search</button>
              <button className={`${styles.addstackbtn} my-1`}>
                {" "}
                + Add Card
              </button>
            </div>
            <div className={styles.bottomContainer}>
              <div className="table-responsive-sm">
                <table
                  id={styles.cardsTable}
                  className={`${styles.table} table-hover`}
                >
                  <thead>
                    <tr>
                      <th
                        id={styles.topLeft}
                        scope="col"
                        className={styles.tags}
                      >
                        #
                      </th>
                      <th scope="col" className={styles.tags}>
                        Question
                      </th>
                      <th scope="col" className={styles.tags}>
                        Answer
                      </th>
                      <th scope="col" className={styles.tags}>
                        Level
                      </th>
                      <th scope="col" className={styles.tags}>
                        Module Name
                      </th>
                      <th
                        id={styles.topRight}
                        scope="col"
                        className={styles.tags}
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="table-group-divider">
                    {allCards &&
                      allCards
                        .slice(startIndex, endIndex)
                        .map((card, index) => {
                          const isLastRow =
                            index ===
                            allCards.slice(startIndex, endIndex).length - 1
                          return (
                            <tr key={card.cardId}>
                              <th
                                id={
                                  isLastRow
                                    ? styles.borderBottomLeftRadius
                                    : styles.topLeftSmall
                                }
                                scope="row"
                                className={`${styles.listNumber}`}
                                style={
                                  isLastRow
                                    ? { borderBottomLeftRadius: "15px" }
                                    : {}
                                }
                              >
                                {startIndex + index + 1}
                              </th>
                              <td
                                data-title="Question:"
                                className={styles.cardData}
                              >
                                <span className={styles.cardData}>
                                  {(card.question &&
                                  card.question.length > MAX_STRING_LENGTH
                                    ? `${card.question.substring(0, MAX_STRING_LENGTH)}...`
                                    : card.question) || ""}
                                </span>
                              </td>
                              <td
                                data-title="Answer:"
                                className={styles.cardData}
                              >
                                <span className={styles.cardData}>
                                  {(card.answer &&
                                  card.answer.length > MAX_STRING_LENGTH
                                    ? `${card.answer.substring(0, MAX_STRING_LENGTH)}...`
                                    : card.answer) || ""}
                                </span>
                              </td>
                              <td
                                data-title="Level:"
                                className={styles.cardData}
                              >
                                {card.level}
                              </td>
                              <td
                                data-title="Module name:"
                                className={styles.cardData}
                              >
                                {card.moduleName}
                              </td>
                              <td
                                data-title="Action:"
                                className={
                                  isLastRow
                                    ? styles.borderBottomRightRadius
                                    : ""
                                }
                              >
                                <button className={styles.actionbtn1}>
                                  Edit
                                </button>
                                <button
                                  className={styles.actionbtn2}
                                  onClick={() => handleDeleteCard(card.cardId)}
                                >
                                  Delete
                                </button>
                              </td>
                            </tr>
                          )
                        })}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}

        <div className={styles.paginationContainer}>
          <button
            className={styles.pagebtn}
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className={styles.pagetext}>
            {" "}
            {currentPage} of {totalPages}
          </span>
          <button
            className={styles.pagebtn}
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>

      <AddStackModal
        isOpen={isAddStackModalOpen}
        onClose={handleCloseAddStackModal}
        onSave={handleSaveStack}
        stackName={currentItemName}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setCurrentItemName(e.target.value)
        }
        title={modalTitle}
      />

      <DeleteModal
        isOpen={isConfirmDeleteUserModalOpen}
        onClose={handleCloseConfirmDeleteUserModal}
        onConfirm={handleConfirmDeleteUser}
        itemName={userToDelete?.username || ""}
      />

      <DeleteModal
        isOpen={isConfirmDeleteModalOpen}
        onClose={handleCloseConfirmDeleteStackModal}
        onConfirm={handleConfirmDeleteStack}
        itemName={itemToDelete?.stackName || ""}
      />

      <DeleteModal
        isOpen={isConfirmDeleteModuleModalOpen}
        onClose={handleCloseConfirmDeleteModuleModal}
        onConfirm={handleConfirmDeleteModule}
        itemName={moduleToDelete?.moduleName || ""}
      />

      <DeleteModal
        isOpen={isConfirmDeleteCardModalOpen}
        onClose={handleCloseConfirmDeleteCardModal}
        onConfirm={handleConfirmDeleteCard}
        itemName={cardToDelete?.cardId || ""}
      />

      <AddModuleModal
        isOpen={isAddModuleModalOpen}
        onClose={handleCloseAddModuleModal}
        onSave={handleSaveModule}
        moduleName={currentItemName}
        stackName={stackName}
        onModuleNameChange={e => setCurrentItemName(e.target.value)}
        onStackNameChange={e => setStackName(e.target.value)}
        title="Add New Module"
        setStackName={setStackName}
      />
    </div>
  )
}

export default AdminCabinet
