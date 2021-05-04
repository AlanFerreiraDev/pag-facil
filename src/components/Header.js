import React from 'react';

export const Header = (props) => {

  return (
    <header className={props.className}>
      <h1>{props.name}</h1>
      <ul className="menu">
        <li>{props.links[0]}</li>
        <li>{props.links[1]}</li>
        <li>{props.links[2]}</li>
      </ul>
    </header>

  )
}