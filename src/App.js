import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar.js';
import Sidebar from './Components/Sidebar/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Product from './Pages/Products';
import Manufacturers from './Pages/Manufacturers';
import Distributors from './Pages/Distributors';
import Blog from './Pages/Blog';
import Card from './Components/Store/Card/Card.js';
import SideRender from './Components/Sidebar/SidebarRender';
import Search from './Components/SearchBar.js/Search';
import Breadcrumb from './Components/BreadCrumbs/BreadCrumbs';
import Tags from './Components/Tags/Tags';


function App() {
	function cards() {
		const arr = [];
		  for (let i = 0; i < 100; i++) {
			arr.push(Card());
		  }
		  return <div className='producttab'>{arr}</div>;
	  }
return (
	<>
  <Navbar />
  <Breadcrumb/>
  <Search/>
  <Tags/>
  <div className=""></div>

  <div className='containar' style={{height: '100vh', display:"flex"}}>
    <div className='sidebar'>
      <SideRender/>
    </div>

			{cards()}


  </div>

	{/* <Routes>
		<Route path='/Home' exact component={Home} />
		<Route path='/about' component={About} />
		<Route path='/product' component={Product} />
		<Route path='/distributor' component={Distributors} />
		<Route path='/manufacturers' component={Manufacturers} />
		<Route path='/blog' component={Blog} />

	</Routes> */}

  </>
);
}

export default App;

