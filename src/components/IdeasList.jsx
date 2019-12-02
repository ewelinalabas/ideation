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
  return(
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
  )
}
    
export const IdeasList = connect(
  state => ({
    ideas: state.ideas.sort((a,b) => b.score - a.score)
  }),
  {increaseScore, decreaseScore}
)(IdeasListPure)