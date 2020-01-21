export const addIdea = (ideaParams) => dispatch => {
  // Tutaj normalnie jest call do api a potem jest dipatch akcji ponizej, my oprostu dispatchujemy bo nie mamy backendu  
  dispatch(ideaCreated(ideaParams))
}

const ideaCreated = (idea) => ({
  type: 'IDEA_CREATED',
  payload: idea
})

export const increaseScore = (id) => ({
  type: 'INCREASE_SCORE',
  payload: id
})

export const decreaseScore = (id) => ({
  type: 'DECREASE_SCORE',
  payload: id
})

export const categoryFilters = (category) => ({
  type: 'CATEGORY_FILTERS',
  payload: category
})

export const scoreFilters = (scoreRange) => ({
  type: 'SCORE_FILTERS',
  payload: scoreRange
})