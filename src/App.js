import React from 'react';
import AddButton from './components/AddButton';

const buttonClick = () => console.log('You clicked me!');

const App = () => (
  <div>
    <p>App text.</p>
    <AddButton onClick={buttonClick} />
  </div>
);

export default App;
