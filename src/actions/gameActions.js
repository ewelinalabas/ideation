export const addIdea = (ideaParams) => dispatch => {
  // Tutaj normalnie jest call do api a potem jest dipatch akcji ponizej, my oprostu dispatchujemy bo nie mamy backendu 
    dispatch(ideaCreated(ideaParams))
}

const ideaCreated = (idea) => ({
  type: 'IDEA_CREATED',
  payload: idea
})