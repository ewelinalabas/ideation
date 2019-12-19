import React from 'react';
import { connect } from 'react-redux';
import {increaseScore, decreaseScore} from '../actions/gameActions';

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
      <h3 className='Split Right'>There are no ideas to diplay yet. Submit the first one!</h3>
    )
  } else {
    return (
      <div className='Split Right'>
        <h3>Submitted ideas</h3>
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
    
export const IdeasList = connect(
  state => ({
    ideas: state.ideas.sort((a,b) => b.score - a.score)
  }),
  {increaseScore, decreaseScore}
)(IdeasListPure)