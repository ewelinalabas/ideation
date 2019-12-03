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
    <li>
        <p>Title: {idea.title}</p>
        <p>Text: {idea.text}</p>
        <p>Score: {idea.score}</p>
        <button onClick={voteFor}>Up</button>
        <button onClick={voteAgainst}>Down</button>
      </li>
  )
}

const IdeasListPure = (props) => {
  if(props.ideas.length == 0) {
    return (
      <h3>Submit the first idea</h3>
    )
  } else {
    return (
      <div>
        <h3>Submitted ideas</h3>
        <ul>
          { props.ideas.map((idea, i) => 
          <Idea 
            key={i}
            idea={idea} 
            increaseScore={props.increaseScore}
            decreaseScore={props.decreaseScore}
          />
          )}
        </ul>
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