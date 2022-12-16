import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sidebardata } from './Sidebardata';
import Submenu from './Submenu';
import "./sidebar.css"

function SideRender(){
    const data = Sidebardata;

    return(
        data.map((item) => {
            return <Submenu item={item} />;
          })
    );
}

export default SideRender