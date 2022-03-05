import React from 'react';
import { bubble as Menu } from 'react-burger-menu';
import './Sidebar.css';

export default function Sidebar() {
  return (
    <Menu>
      <a className="menu-item">Desayunos</a>
      <a className="menu-item">Almuerzos</a>
      <a className="menu-item">Meriendas</a>
      <a className="menu-item">Cenas</a>
    </Menu>
  );
}
