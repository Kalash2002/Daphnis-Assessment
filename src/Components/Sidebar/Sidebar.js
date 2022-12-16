import React,{useState} from 'react';
import "./sidebar.css";
import Button from './SubmenuButton';


const Sidebar = () => {

  return (
    <div className="sidebar-container">
      <div className="sidebar-col">


        <div className="sidebar-row">
        <div className="sidebar-category-title">
          <span>Title</span>
        </div>
        <div className="subCategories">
          <ul>
              <li><Button/></li>
              <li><Button/></li>
              <li><Button/></li>
          </ul>
        </div>
        </div>

      </div>
    </div>
  )
}

export default Sidebar