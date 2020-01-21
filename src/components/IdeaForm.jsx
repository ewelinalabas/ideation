import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addIdea } from '../actions/gameActions';
import { CATEGORIES } from '../constants/constants';


const IdeaFormPure = ({addIdea}) => {
  const [title, setTitle] = useState("")
  const [text, setText] = useState("")
  const [category, setCategory] = useState(CATEGORIES[0])
  const handleClick = () => {
    const id = Math.floor(Math.random()*1000)
    const ideaParams = {id, title, text, category, score: 0}
    addIdea(ideaParams)
    setTitle("")
    setText("")
    setCategory(CATEGORIES[0])
  }
  return (
    <div className='Split Left'>
      <h3>Add new idea</h3>
      <form>
        <label>Title</label>
        <input
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Description</label>
        <input
          type='text'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <label>Category</label>
        <select 
          value={category}
          onChange={(e) => setCategory(e.target.value)}>
          {CATEGORIES.map(el => <option value={el}>{el}</option>)}
        </select>
      </form>
      <button className="AddIdea" onClick={handleClick}>Add</button>
    </div>
  )
}
  
export const IdeaForm = connect(
  () => {},
  {addIdea}
  )(IdeaFormPure)