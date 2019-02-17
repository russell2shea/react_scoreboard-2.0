//Since each module has its own scope you will always need to import react into the file to use react features like jsx
import React from 'react';

const Header = (props) => {
  return (
    <header>
      <h1>{ props.title }</h1>
      <span className="stats">Players: {props.totalPlayers}</span> 
    </header>
  );
}

export default Header;