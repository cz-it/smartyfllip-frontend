export interface Module {
  moduleId: number
  moduleName: string
  authorName: string
  username: string
  lastUpdate: string
  tags: string[]
  stackName: string
  cardsCount: number
  cards: []
}

export interface ModulesData {
  data: Module[]
  current_page: number
  total_elements: number
  total_pages: number
}

export interface ModulesState {
  modulesList?: ModulesData
  selectedModul?: Module | undefined
  errorMessage?: string
}

export interface Card {
  cardId: number
  question: string
  answer: string
  level: string
  moduleId: number
  moduleName: string
  dateCreated: string
}

export interface CardsState {
  cardssList?: Card[]
  selectedCard?: Card | undefined
  errorMessage?: string
}

export interface ModuleRequestObj {
  moduleName: string
  userName: string
  stackName: string
}

export interface ModuleEdditObj {
  moduleId: string
  moduleName: string
  userName: string
  stackName: string
}

export interface CardDTO {
  question: string
  answer: string
  level: string
  moduleId: number
}

export interface CardEditDTO extends CardDTO {
  id: number
}
