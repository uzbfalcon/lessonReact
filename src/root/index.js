import React from 'react';
import {Hooks} from '../Hooks/App';

class Root extends React.Component {
  render() {
    return (
      <div style={{ display: 'flex' }}>
        <Hooks/>
      </div>
    );
  }
}

export default Root;