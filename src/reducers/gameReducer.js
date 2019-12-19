const initialState = {
  ideas: [
    {
      id: 16,
      title: 'dsd',
      text: 'dsd',
      score: 0
    },
    {
      id: 106,
      title: 'ffs',
      text: 'dfsd',
      score: 0
    },
    {
      id: 774,
      title: 'sdfsd',
      text: 'sdfds',
      score: 0
    }
  ]
}

const addPoint = (state, id) => {
  const newIdeas = state.ideas.map(el => el.id == id ? {...el, score: el.score + 1} : el)
  return {...state, ideas: newIdeas}
}

const subtractPoint = (state, id) => {
  const newIdeas = state.ideas.map(el => el.id == id ? {...el, score: el.score - 1} : el)
  return {...state, ideas: newIdeas}
}

export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'IDEA_CREATED':
      return {...state, ideas: [...state.ideas, action.payload] }
    case 'INCREASE_SCORE':
      return addPoint(state, action.payload)
    case 'DECREASE_SCORE':
      return subtractPoint(state, action.payload)
    default:
       return state
  }
}