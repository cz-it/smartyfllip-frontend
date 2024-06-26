import axios from "axios"
import { Stacks } from "../../components/adminCabinet/api"

export const fechStacks = async (): Promise<Array<Stacks>> => {
  const res = await axios.get(`/api/v1/stacks`, {
    method: "GET",
  })
  return res.data
}
