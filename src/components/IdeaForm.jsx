import React, { useState } from 'react';
import { connect } from 'react-redux';
import {addIdea} from '../actions/gameActions';

const IdeaFormPure = ({addIdea}) => {
  const [title, setTitle] = useState("")
  const [text, setText] = useState("")
  const handleClick = () => {
    const ideaParams = {title, text}
    addIdea(ideaParams)
  }

  return (
    <div>
      <label>Title</label>
      <input
      type='text'
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      />

      <label>Text</label>
      <input
      type='text'
      value={text}
      onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleClick}>Add</button>
    </div>
  )
}
  
export const IdeaForm = connect(
  state => ({
    ideas: state.ideas
  }),
  {addIdea}
  )(IdeaFormPure)