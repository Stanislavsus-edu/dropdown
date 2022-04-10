import React, { useState } from 'react';

const settings = ['Profile Information', 'Change Password', 'Become PRO', 'Help', 'Log out']

export default function DropdownList() {
  const [active, selectActive] = useState(0);

  const selectItem = (e) => {
  	selectActive(prev => {
  		settings.indexOf(e.target.innerText)
  	})
  }

  const style = {
    color: "#5380F7",
  }

  return (
    <ul data-id="dropdown" className="dropdown">
      {settings.map((el) => {
        return (
          <li className="item" key={el} style={el === settings[active] ? style : null}>
          <a href="#" onClick={selectItem}>{el}</a>	
          </li>
        );
      })}
    </ul>
  );
}