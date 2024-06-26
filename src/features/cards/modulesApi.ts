import axios from "axios"
import {
  Card,
  ModuleEdditObj,
  ModuleRequestObj,
  Module,
  ModulesData,
} from "./type"

interface ServerGetModulesResponse {
  modules: Module[]
}

export const fechAllModules = async (size: number): Promise<ModulesData> => {
  const res = await axios.get(`/api/v1/modules?size=${size}&page=0`, {
    method: "GET",
  })
  return res.data
}

export async function fetchModuls(modulsId: string): Promise<Module> {
  const res = await axios.get(`/api/v1/modules/${modulsId}`)
  return res.data
}

export const fechModulesByAuthor = async (
  name: string,
): Promise<ModulesData> => {
  const res = await axios.get(`/api/v1/modules/author/${name}`)
  return res.data
}

export const fechModulesByUserId = async (id: string): Promise<ModulesData> => {
  const res = await axios.get(`/api/v1/modules/user/${id}`)
  return res.data
}

export const fechCreatedModule = async (
  obj: ModuleRequestObj,
): Promise<Module> => {
  const data = {
    moduleName: obj.moduleName,
    username: obj.userName,
    stackName: obj.stackName,
  }

  const res = await axios.post(`/api/v1/modules`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  })
  return res.data
}

export const fechEdditModule = async (obj: ModuleEdditObj): Promise<Module> => {
  const res = await axios.put(
    `/api/v1/modules/${obj.moduleId}`,
    {
      moduleName: obj.moduleName,
      username: obj.userName,
      stackName: obj.stackName,
    },
    { headers: { "Content-Type": "application/json" } },
  )
  return res.data
}

export const fechDeleteModulId = async (modilId: string): Promise<Module> => {
  const res = await axios.delete(`/api/v1/modules/${modilId}`)
  return res.data
}
