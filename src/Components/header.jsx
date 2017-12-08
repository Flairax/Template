import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import arrow from '../Style/Images/arrow.svg';
//import cosmos from '../Style/Images/cosm.jpg';

export default class Header extends Component {
   componentDidMount() {
      const menuShifter = document.createElement("script");

      menuShifter.src = "./Scripts/menuShifter.js";
      menuShifter.async = true;
      menuShifter.type = "text/javascript";
      menuShifter.className = "MountedMenuShifter";
      document.body.appendChild(menuShifter);
   }

   componentWillUnmount() {
      const menuShifter = document.createElement("script");
      menuShifter.className = "MountedMenuShifter";
      document.body.removeChild(menuShifter);
   }
   render() {
      return (
         <header>
            <div id="banner">
            </div>
            <nav className="navigation">
               <aside id="agregator" hidden>&#9776;</aside>
               <ul className="main-menu">
                  <li><Link to='/' className="unExpandable">Home</Link></li>
                  <li>
                     <Link to='/news' className="expandable">News</Link>
                     <div className="areaGrower sub-Opener">
                        <img src={arrow} alt="arrow" className="arrow" />
                        <span>Expand</span>
                     </div>
                     <ul className="sub-menu">
                        <li><Link to='/'>Poinczczxczxct</Link></li>
                        <li><Link to='/a'>Point</Link></li>
                     </ul>
                  </li>
                  <li><Link to='/gallery' className="unExpandable">Gallery</Link></li>
                  <li>
                     <Link to='/a' className="expandable">ManuSubPoints</Link>
                     <div className="areaGrower sub-Opener">
                        <img src={arrow} alt="arrow" className="arrow" />
                        <span>Expand</span>
                     </div>
                     <ul className="sub-menu">
                        <li><Link to='/'>Poifsfsfsfsnt</Link></li>
                        <li><Link to='/a'>Point</Link></li>
                        <li><Link to='/a'>Point</Link></li>
                        <li><Link to='/a'>Point</Link></li>
                        <li><Link to='/a'>Point</Link></li>
                        <li><Link to='/a'>Point</Link></li>
                        <li><Link to='/a'>Point</Link></li>
                        <li><Link to='/a'>Point</Link></li>
                        <li><Link to='/a'>Point</Link></li>
                        <li><Link to='/a'>Point</Link></li>
                        <li><Link to='/a'>Point</Link></li>
                        <li><Link to='/cccc'>Pointaaaaa</Link></li>
                     </ul>
                  </li>
                  <li><Link to='/a' className="unExpandable">Point</Link></li>
               </ul>
               <aside>
                  <form>
                     <input type="text" className="searcher" />
                  </form>
               </aside>
            </nav>
         </header>
      );
   }
}