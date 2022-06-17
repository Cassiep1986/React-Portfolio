import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import "./Sidebar.css"

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        About Me
      </a>
      <a className="menu-item" href="/contact">
        Contact
      </a>
      <a className="menu-item" href="/pizzas">
        Portfolio
      </a>
      <a className="menu-item" href="/desserts">
        Resume
      </a>
    </Menu>
  );
};