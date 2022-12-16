import React from "react";
import { FiUser } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import "./Navstyles.css";
import { library, icon } from '@fortawesome/fontawesome-svg-core'
const Navbar = () => {

  let activeStyle={
    textDecoration:"none",
    color:"white",
    fontWeight:"600"
  }
  let notActiveStyle={
    textDecoration:"none",
    color:"white",
  }

  const handle = ()=>{

  }

  return (
    <div className="navbar">
      <div className="logo">
      <FiUser />
        <span className="nav-title">Medical Darpan</span>
      </div>
      <div className="navbarItem">
        <ul>
          <li><NavLink style={({isActive})=>isActive?activeStyle:notActiveStyle} to='/'>Home</NavLink></li>
          <li><NavLink style={({isActive})=>isActive?activeStyle:notActiveStyle} to='/products'>Products</NavLink></li>
          <li><NavLink style={({isActive})=>isActive?activeStyle:notActiveStyle} to='/distributors'>Distributors</NavLink></li>
          <li><NavLink style={({isActive})=>isActive?activeStyle:notActiveStyle} to='/manufacturers'>Manufacturers</NavLink></li>
          <li><NavLink style={({isActive})=>isActive?activeStyle:notActiveStyle} to='/about'>About Us</NavLink></li>
          <li><NavLink style={({isActive})=>isActive?activeStyle:notActiveStyle} to='/blog'>Blog</NavLink></li>
        </ul>
      </div>
      <div className="userProfile">


        <button className="btn" onClick={handle}>Log in</button>
        <div className="userLogo">
          <FiUser />
        </div>
      </div>
    </div>
  );
};

export default Navbar;