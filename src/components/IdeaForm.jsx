import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addIdea } from '../actions/gameActions';

const IdeaFormPure = ({addIdea}) => {
  const [title, setTitle] = useState("")
  const [text, setText] = useState("")
  const handleClick = () => {
    const id = Math.floor(Math.random()*1000)
    const ideaParams = {id, title, text, score: 0}
    addIdea(ideaParams)
    setTitle("")
    setText("")
  }
  return (
    <div className='Split Left'>
      <h3>Add new idea</h3>
      <label>Title
      <input
        type='text'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      </label>

      <label>Text
      <input
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      </label>
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