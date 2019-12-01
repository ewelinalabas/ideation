import React from 'react';
import { connect } from 'react-redux';

const IdeasListPure = (params) => {
  return(
    <ul>
    {params.ideas.map((idea, i) => <Idea idea={idea} key={i}/>)}
    </ul>
  )
}

const Idea = (idea) => {
  return(
    <li>
      <p>Title:{idea.idea.title}</p>
      <p>Text:{idea.idea.text}</p>
    </li>
  )
}
 
export const IdeasList = connect(
  state => ({
    ideas: state.ideas
  })
)(IdeasListPure)