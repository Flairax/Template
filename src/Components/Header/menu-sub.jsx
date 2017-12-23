import $ from 'jquery';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

/*=============Components=============*/
import Ref from './ref';

/*=============Images=============*/
import arrow from '../Assets/Header/Images/arrow.svg';


export default class Menu_sub extends Component {
   /*=============lifecycle=============*/
   componentDidMount() {
      $(`#Menu-sub-${this.props.order}`).css("z-index",`${30 - this.props.order}`);
      
   }

   componentWillUpdate(){
      console.log(this.props.subPoints)
   }

   componentWillReceiveProps(){
      console.log(this.props.subPoints)
   }

   com
   /*=============Handlers=============*/
   reveal = () => {
      $(`#RL-menu-sub-${this.props.order}`).toggleClass("RL-menu-sub-CLK");
      $(`#Menu-sub-${this.props.order}`).toggleClass("menu-sub-RVL");
   }

   /*================RENDER==================*/
   render() {
      return (
         <li className="points-main-openable">
            <Link to={`/`+this.props.name} className="ref-main">{this.props.name}</Link>
            <div id={"RL-menu-sub-" + this.props.order} className="RL-menu-sub" onClick={this.reveal}>             
               <span></span>
               <img src={arrow} alt="arrow" className="arrow" />
            </div>
            <ul id={"Menu-sub-" + this.props.order} className="menu-sub">
               {this.props.subPoints.map(subPoint => {
                  return <Ref key={subPoint.id} link={"/"+subPoint.name} name={subPoint.name} type="ref-sub" />
               })}
            </ul>
         </li>
      );
   }
}