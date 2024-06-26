import { createAppSlice } from "../../app/createAppSlice"
import { fechAddCardsByModulId, fechCardsByModulId, fechDeleteCardlId, fechEditCard } from "./cardsApi"
import {  CardsState, Card, CardDTO, CardEditDTO } from "./type"

const initialState: CardsState = {
  cardssList: [] as Card[],
  selectedCard: undefined,
  errorMessage: "",
}


export const cardsSlice = createAppSlice({
  name: "cards",
  initialState,
  reducers: create => ({
    getCardsByModule: create.asyncThunk(
      async (id: string) => {
        const response = await fechCardsByModulId(id)
        return response
      },
      {
        pending: () => {},
        fulfilled: (state, action) => {
          state.cardssList = action.payload
        },
        rejected: (state) => {
          state.errorMessage = "Error"
        },
      },
    ),
    addCardForModule: create.asyncThunk(
      async (obj: CardDTO) => {
        const response = await fechAddCardsByModulId(obj)
        return response
      },
      {
        pending: () => {},
        fulfilled: (state, action) => {
          state.cardssList?.push(action.payload)
        },
        rejected: (state) => {
          state.errorMessage = "Error"
        },
      },
    ),
    editCard: create.asyncThunk(
      async (obj: CardEditDTO) => {
        const response = await fechEditCard(obj)
        return response
      },
      {
        pending: () => {},
        fulfilled: (state, action) => {
          state.cardssList?.splice(0, state.cardssList.length, ...state.cardssList.filter(c => c.cardId !== action.payload.cardId))
          state.cardssList?.push(action.payload)
        },
        rejected: state => {
          state.errorMessage = "Error"
        },
      },
    ),
    deleteCard: create.asyncThunk(
      async (id: number) => {
        const response = await fechDeleteCardlId(id)
        return response
      },
      {
        pending: () => {},
        fulfilled: (state, action) => {
          state.cardssList?.splice(0, state.cardssList.length, ...state.cardssList.filter(c => c.cardId !== action.payload.cardId))
        },
        rejected: (state) => {
          state.errorMessage = "Error"
        },
      },
    ),
  }),
  selectors: {
    selectCards: cardsState => cardsState.cardssList,
    selectCard: cardState => cardState.selectedCard,
  },
})

export const { getCardsByModule, addCardForModule, deleteCard, editCard } = cardsSlice.actions

export const { selectCards, selectCard } = cardsSlice.selectors
