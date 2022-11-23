import React, { useState, useReducer } from 'react';

export const Hooks = (props) => {
  const [count, setCount] = useState(0);
  const [option, setOption] = useState(1);


  const reducer = (state, action) => {
    console.log(state, action);
    switch (action.type) {
      case 'plus':
        return state + 1;
      case 'minus':
        return state - 1;
      case 'byamout':
        return state + action.payload;
      default:
        return state;
    }
  };

  const [counter, dispatch] = useReducer(reducer, 0);

  const onSelect = (e) => {
    console.log(e.target.value);
    setOption(Number(e.target.value))
  }


  return (
    <div style={{ textAlign: 'center', margin: '100px auto' }}>
      <h1>Hook component</h1>
      <h1>Result: {counter}</h1>
      <button onClick={() => dispatch({ type: 'plus' })} style={{ margin: '5px' }}>+</button>
      <button onClick={() => dispatch({ type: 'minus' })} style={{ margin: '5px' }}>-</button>
      <select defaultValue={1} name='' id='' style={{ margin: '5px' }} onChange={onSelect}>
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={30}>30</option>
        <option value={40}>40</option>
      </select>
      <button onClick={() => dispatch({ type: 'byamout', payload: option })} style={{ margin: '5px' }}>plus</button>

    </div>
  );
};