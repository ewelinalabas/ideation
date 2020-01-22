import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { CATEGORIES } from '../constants/constants';
import { categoryFilters, scoreFilters } from '../actions/gameActions';

const FiltersPure = (props) => {
  const [min, setMin] = useState("")
  const [max, setMax] = useState("")

  useEffect(() => {
    props.scoreFilters({min, max})
    console.log({min, max})
  }, [min, max])

  return(
    <div>
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
  )
}

export const Filters = connect(
  () => ({}),
  {categoryFilters, scoreFilters}
)(FiltersPure)