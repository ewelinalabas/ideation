const initialState = {
  ideas: [
    {
      id: 16,
      title: 'dsd',
      text: 'dsd',
      category: "A",
      score: 0
    },
    {
      id: 106,
      title: 'ffs',
      text: 'dfsd',
      category: "B",
      score: 0
    },
    {
      id: 774,
      title: 'sdfsd',
      text: 'sdfds',
      category: "C",
      score: 0
    }
  ],
  filters: {
    categories: [],
    score: {
      min: "",
      max: ""
    }
  }
}

const addPoint = (state, id) => {
  const newIdeas = state.ideas.map(el => el.id == id ? {...el, score: el.score + 1} : el)
  return {...state, ideas: newIdeas}
}

const subtractPoint = (state, id) => {
  const newIdeas = state.ideas.map(el => el.id == id ? {...el, score: el.score - 1} : el)
  return {...state, ideas: newIdeas}
}

const filterCategories = (state, filter) => {
  const newFilters = [...state.filters.categories]
  if(state.filters.categories.includes(filter)) {
    return {...state, filters: {...state.filters, categories: newFilters.filter(el => el != filter)}}
  } else {
    return {...state, filters: {...state.filters, categories: newFilters.concat(filter)}}
  }
}

const filterScores = (state, filter) => {
  const {min, max} = filter
  return {...state, filters: {...state.filters, score: {...state.filters.score, min, max}}}
}

export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'IDEA_CREATED':
      return {...state, ideas: [...state.ideas, action.payload] }
    case 'INCREASE_SCORE':
      return addPoint(state, action.payload)
    case 'DECREASE_SCORE':
      return subtractPoint(state, action.payload)
    case 'CATEGORY_FILTERS':
      return filterCategories(state, action.payload)
    case 'SCORE_FILTERS':
      return filterScores(state, action.payload)
    default:
       return state
  }
}