import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class MenuSubSecond extends Component{
   render(){
      return(
         <ul id="sub-second" className="menu-sub">

               <li><Link to='/' className="refs-sub">Poifsfsfsfsnt</Link></li>
               <li><Link to='/a' className="refs-sub">Point</Link></li>
               <li><Link to='/a' className="refs-sub">Point</Link></li>
               <li><Link to='/a' className="refs-sub">Point</Link></li>

               <li><Link to='/a' className="refs-sub">Point</Link></li>
               <li><Link to='/a' className="refs-sub">Point</Link></li>
               <li><Link to='/a' className="refs-sub">Point</Link></li>
               <li><Link to='/a' className="refs-sub">Point</Link></li>

               <li><Link to='/a' className="refs-sub">Point</Link></li>
               <li><Link to='/a' className="refs-sub">Point</Link></li>
               <li><Link to='/a' className="refs-sub">Point</Link></li>
               <li><Link to='/cccc' className="refs-sub">Pointaaaaa</Link></li>

         </ul>
      );
   }
}