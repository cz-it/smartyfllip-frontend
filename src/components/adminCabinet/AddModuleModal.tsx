import axios from "axios"
import React, { ChangeEvent, useEffect, useState } from "react"
import styles from "./ModalWindow.module.css"
import { Stacks } from "./api"


interface AddModuleModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (stackName: string) => void;
  moduleName: string;
  stackName: string;
  onModuleNameChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onStackNameChange: (e: ChangeEvent<HTMLInputElement>) => void;
  title: string;
  setStackName: React.Dispatch<React.SetStateAction<string>>
}


const AddModuleModal: React.FC<AddModuleModalProps> = ({

                                                         isOpen,
                                                         onClose,
                                                         onSave,
                                                         moduleName,
                                                         stackName,
                                                         onModuleNameChange,
                                                         title,
                                                         setStackName
                                                       }) => {
  if (!isOpen) return null

  const [allStacks, setAllStacks] = useState<Array<Stacks>>([])

  const getAllStacks = async (): Promise<Array<Stacks>> => {
    const res = await axios.get(`/api/v1/stacks`)
    setAllStacks(res.data)
    return res.data
  }

  const addModule = async () => {
    const myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")

    const raw = JSON.stringify({
      "moduleName": moduleName,
      "username": "Admin",
      "stackName": stackName
    })

    fetch("/api/v1/modules/user", {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    })
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error))
    onSave(stackName)
    onClose()
  }

  useEffect(() => {
    getAllStacks()
  }, [])


  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <span className={styles.close} onClick={onClose}>&times;</span>
        <h2>{title}</h2>
        <input
          type="text"
          value={moduleName}
          onChange={onModuleNameChange}
          placeholder="Enter module name"
          className={styles.modalInput}
        />
        <select
          id="formSelect"
          className="form-select "
          onChange={e => setStackName(e.target.value)}
          value={stackName}
        >
          {allStacks?.map(m => (
            <option key={m.stackId}>{m.stackName}</option>
          ))}
        </select>
        <button onClick={() => addModule()} className={styles.saveModuleBtn}>Save</button>
      </div>
    </div>
  )
}

export default AddModuleModal
