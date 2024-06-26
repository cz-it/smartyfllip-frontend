import axios from "axios"
import { Card, CardDTO, CardEditDTO } from "./type"

export const fechCardsByModulId = async (modilId: string): Promise<Card[]> => {
  const res = await axios.get(`/api/v1/cards/modules/${modilId}`)
  return res.data
}

export const fechAddCardsByModulId = async (obj: CardDTO): Promise<Card> => {
  const data = {
    question: obj.question,
    answer: obj.answer,
    level: "Easy",
    moduleId: obj.moduleId,
  }
  const res = await axios.post(`/api/v1/cards`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  })
  return res.data
}

export const fechEditCard = async (obj: CardEditDTO): Promise<Card> => {
  const data = {
    question: obj.question,
    answer: obj.answer,
    level: "EASY",
    moduleId: obj.moduleId,
  }
  const res = await axios.put(`/api/v1/cards/${obj.id}`, data, {
    headers: { "Content-Type": "application/json" },
  })
  return res.data
}

export const fechDeleteCardlId = async (id: number): Promise<Card> => {
  const res = await axios.delete(`/api/v1/cards/${id}`)
  return res.data
}
