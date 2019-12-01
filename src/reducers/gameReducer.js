const initialState = {
  ideas: []
}

export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'IDEA_CREATED':
      return {...state, ideas: [...state.ideas, action.payload] }
      default:
       return state
  }
}