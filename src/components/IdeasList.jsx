import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { increaseScore, decreaseScore, categoryFilters, scoreFilters } from '../actions/gameActions';
import { CATEGORIES } from '../constants/constants'

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
  const [min, setMin] = useState("")
  const [max, setMax] = useState("")

  useEffect(() => {
    props.scoreFilters({min, max})
    console.log({min, max})
  }, [min, max])

  if(props.ideas.length == 0) {
    return (
      <h3 className='Split Right'>There are no ideas to diplay yet. Submit the first one!</h3>
    )
  } else {
    return (
      <div className='Split Right'>
        <h3>Submitted ideas</h3>
        <p>Filter by category</p>
        {
          CATEGORIES.map(el => 
            <div>
              <label>{el}
              <input 
                type="checkbox"
                name={el}
                onChange={() => props.categoryFilters(el)}
              />
              </label>
            </div>
          )
        }
        <p>Filter by score</p>
        <div>
          <label>Min
          <input 
            type="number"
            value={min}
            onChange={(e) => {setMin(e.target.value)}}
          />
          </label>
          <label>Max
          <input 
            type="number"
            value={max}
            onChange={(e) => {setMax(e.target.value)}}
            />
          </label>
        </div>
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
    ideas: filterByScore(filterByCategories(state.ideas, state.filters.categories), state.filters.score)
  }),
  {increaseScore, decreaseScore, categoryFilters, scoreFilters}
)(IdeasListPure)