import { useEffect, useState } from "react"
import { Stacks } from "../adminCabinet/api"
import { Button } from "react-bootstrap"
import styles from "./Cabinet.module.css"

const Admin = () => {
  const [stack, setStack] = useState<Stacks[]>([])
  const [stackName, setStackName] = useState("")

  const getStack = () => {
    fetch("/api/v1/stacks", {
      method: "GET",
      redirect: "follow",
    })
      .then(response => response.json())
      //.then(result => console.log(result))
      .then(result => setStack(result))
      .catch(error => console.error(error))
  }

  const addStack = () => {
    const myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")

    const raw = JSON.stringify({
      stackName: stackName,
    })

    fetch("/api/v1/stacks", {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    })
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.error(error))
  }

  useEffect(() => {
    getStack()
  }, [])

  return (
    <div className={styles.content}>
      <div className="d-flex justify-content-start flex-wrap m-5">
        {stack?.map(n => <h3 key={n.stackId}>{n.stackName},_ </h3>)}
      </div>
      <form className="m-5" id="form">
        <input
          type="text"
          onChange={e => setStackName(e.target.value)}
          placeholder="Name module"
          className="form-control mt-4"
          id="name"
          name="name"
          value={stackName}
        />
      </form>
      <div className="d-flex justify-content-center m-5">
        <Button variant="warning" onClick={addStack}>
          <p className="txtHeaderWeis mb-0 ">Create</p>
        </Button>
      </div>
    </div>
  )
}

export default Admin
