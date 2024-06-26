import { createAppSlice } from "../../app/createAppSlice"
import {
  fechAllModules,
  fechCreatedModule,
  fechDeleteModulId,
  fechEdditModule,
  fechModulesByAuthor,
  fechModulesByUserId,
  fetchModuls
} from "./modulesApi"
import { ModuleEdditObj, ModuleRequestObj, ModulesData, ModulesState } from "./type"

const initialState: ModulesState = {
  modulesList: {} as ModulesData,
  selectedModul: undefined,
  errorMessage: "",
}

export const modulsSlice = createAppSlice({
  name: "modules",
  initialState,
  reducers: create => ({
    getModulesAsync: create.asyncThunk(
      async (size:number) => {
        const response = await fechAllModules(size)
        return response
      },
      {
        pending: () => {},
        fulfilled: (state, action) => {
          state.modulesList = action.payload
        },
        rejected: (state) => {
          state.errorMessage = "Error"
        },
      },
    ),
    getModulesByAuthor: create.asyncThunk(
      async (name: string) => {
        const response = await fechModulesByAuthor(name)
        return response
      },
      {
        pending: () => {},
        fulfilled: (state, action) => {
          state.modulesList = action.payload
        },
        rejected: (state) => {
          state.errorMessage = "Error"
        },
      },
    ),
    getModulesByUserId: create.asyncThunk(
      async (id: string) => {
        const response = await fechModulesByUserId(id)
        return response
      },
      {
        pending: () => {},
        fulfilled: (state, action) => {
          state.modulesList = action.payload
        },
        rejected: (state) => {
          state.errorMessage = "Error"
        },
      },
    ),
    getModuleById: create.asyncThunk(
      async (id: string) => {
        const response = await fetchModuls(id)
        return response
      },
      {
        pending: () => {},
        fulfilled: (state, action) => {
          state.selectedModul = action.payload
        },
        rejected: state => {
          state.errorMessage = "Error"
        },
      },
    ),
    addModule: create.asyncThunk(
      async (obj: ModuleRequestObj) => {
        const response = await fechCreatedModule(obj)
        return response
      },
      {
        pending: () => {},
        fulfilled: (state, action) => {
          state.modulesList?.data.push(action.payload)
          //state.selectedModul = action.payload
        },
        rejected: state => {
          state.errorMessage = "Error"
        },
      },
    ),
    edditModule: create.asyncThunk(
      async (obj: ModuleEdditObj) => {
        const response = await fechEdditModule(obj)
        return response
      },
      {
        pending: () => {},
        fulfilled: (state, action) => {
          state.modulesList?.data.splice(0, state.modulesList?.data.length, ...state.modulesList?.data.filter(n => n.moduleId !== action.payload.moduleId))
          state.modulesList?.data.push(action.payload)
        },
        rejected: state => {
          state.errorMessage = "Error"
        },
      },
    ),
    deleteModule: create.asyncThunk(
      async (id: string) => {
        const response = await fechDeleteModulId(id)
        return response
      },
      {
        pending: () => {},
        fulfilled: (state, action) => {
          state.modulesList?.data.splice(0, state.modulesList?.data.length, ...state.modulesList?.data.filter(n => n.moduleId !== action.payload.moduleId))
        },
        rejected: state => {
          state.errorMessage = "Error"
        },
      },
    ),
  }),
  selectors: {
    selectModules: modulesState => modulesState.modulesList,
    selectModule: moduleState => moduleState.selectedModul,
  },
})

export const {
  getModulesAsync,
  getModuleById,
  getModulesByAuthor,
  getModulesByUserId,
  addModule,
  edditModule,
  deleteModule,
} = modulsSlice.actions

export const { selectModules, selectModule } = modulsSlice.selectors
