import axios from "axios"

export interface User {
  id: number
  username: string
  firstName: string
  lastName: string
  email: string
  isActivated: boolean
  image: string
  dateRegistered: string
  roles: string[]
  isEmailConfirmed: boolean
}

export const getAllUsers = async (): Promise<Array<User>> => {
  const res = await axios.get(`/api/v1/users?size=250`)
  return res.data.data
}

export const deleteUser = async (id: number): Promise<void> => {
  await axios.delete(`/api/v1/users/${id}`)
}

export interface Modules {
  moduleId: number
  moduleName: string
  dateCreated: string
  username: string
  stackId: number
  stackName: string
  cardsCount: number
}

export interface AddModuleDto {
  moduleName: string
  username: string
  stackName: string
}

export const getAllModules = async (): Promise<Array<Modules>> => {
  const res = await axios.get(`/api/v1/modules`, {
    method: "GET",
  })
  return res.data.data
}

export const addModule = async (module: Modules): Promise<Modules> => {
  const response = await axios.post("/api/v1/modules", module)
  return response.data.data
}

export const deleteModule = async (ModuleId: number): Promise<void> => {
  await axios.delete(`/api/v1/modules/${ModuleId}`)
}

export interface Stacks {
  stackId: number
  stackName: string
  modulesCount: number
}

export const getAllStacks = async (): Promise<Array<Stacks>> => {
  const res = await axios.get(`/api/v1/stacks`)
  return res.data
}

export const addStack = async (stack: Stacks): Promise<Stacks> => {
  const response = await axios.post("/api/v1/stacks", stack)
  return response.data
}

export const deleteStack = async (stackId: number): Promise<void> => {
  await axios.delete(`/api/v1/stacks/${stackId}`)
}

export interface Cards {
  cardId: number
  moduleId: number
  moduleName: string
  question: string
  answer: string
  level: string
}

export const getAllCards = async (): Promise<Array<Cards>> => {
  const res = await axios.get(`/api/v1/cards?size=20`)
  return res.data.data
}

export const deleteCard = async (CardId: number): Promise<void> => {
  await axios.delete(`/api/v1/cards/${CardId}`)
}
