import React from 'react';
import { connect } from 'react-redux';
import { increaseScore, decreaseScore } from '../actions/gameActions';
import { Filters } from './Filters'


const Idea = (props) => {
  const { idea } = props
  const voteFor = () => {
    props.increaseScore(idea.id)
  }
  const voteAgainst = () => {
    props.decreaseScore(idea.id)
  }
  
  return(
    <ul className="Idea">
      <li className="IdeaDetails">
          <p>Title: {idea.title}</p>
          <p>Description: {idea.text}</p>
          <p>Category: {idea.category}</p>
      </li>
      <li className="IdeaScore">
          <p>{idea.score}</p>
          <button onClick={voteFor}>+</button>
          <button onClick={voteAgainst}>-</button>
      </li>
    </ul>
  )
}

const IdeasListPure = (props) => {
  if(props.ideas.length == 0) {
    return (
      <div className='Split Right'>
        <h3>Submitted ideas</h3>
        <Filters />
        <h3>There are no ideas to diplay.</h3>
      </div>
    )
  } else {
    return (
      <div className='Split Right'>
        <h3>Submitted ideas</h3>
        <Filters />
        <div>
          { props.ideas.map((idea, i) => 
          <Idea 
            key={i}
            idea={idea} 
            increaseScore={props.increaseScore}
            decreaseScore={props.decreaseScore}
          />
          )}
        </div>
      </div>
    )
  }
}

const filterByCategories = (ideas, selectedCategories) => {
  if(selectedCategories.length == 0) {
    return ideas
  } else {
    return ideas.filter(i => selectedCategories.includes(i.category))
  }
}

const filterByScore = (ideas, scoreRange) => {
  const {min, max} = scoreRange

  if(min.length != 0 && max.length != 0) {
    return ideas.filter(i => i.score >= Number(min) && i.score <= Number(max))
  } else if (min.length == 0 && max.length != 0) {
    return ideas.filter(i => i.score <= Number(max))
  } else if (min.length != 0 && max.length == 0){
    return ideas.filter(i => i.score >= Number(min))
  } else {
    return ideas
  }
}
    
export const IdeasList = connect(
  state => ({
    ideas: filterByScore(filterByCategories(state.ideas, state.filters.categories), state.filters.score),
    filters: state.filters
  }),
  {increaseScore, decreaseScore}
)(IdeasListPure)