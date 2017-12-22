import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

/*================Components==================*/
import Modal from '../Modal/modal';

/*================Actions==================*/
import { rate } from '../../Reducers/Ratings/ratings.ACT'

/*================Images==================*/
import arrow from '../Assets/Main/Images/nav-arr.svg'
import rate_star from '../Assets/Main/Images/star.svg'

/*================Jauery==================*/
import $ from 'jquery'

class Ratings extends Component {
   constructor() {
      super();
      this.counter = 0;
      this.handlers = [
         this.rateOne,
         this.rateTwo,
         this.rateThree,
         this.rateFour,
         this.rateFive,
      ];
   }

   componentDidMount(){
      $(".greeting#start").addClass("modal-RVL");
   }

   /*================Handlers==================*/
   rateOne = () => { this.props.rate({ currQues: this.props.ratings[this.counter], mark: 1 }); this.chekNext() }
   rateTwo = () => { this.props.rate({ currQues: this.props.ratings[this.counter], mark: 2 }); this.chekNext() }
   rateThree = () => { this.props.rate({ currQues: this.props.ratings[this.counter], mark: 3 }); this.chekNext() }
   rateFour = () => { this.props.rate({ currQues: this.props.ratings[this.counter], mark: 4 }); this.chekNext() }
   rateFive = () => { this.props.rate({ currQues: this.props.ratings[this.counter], mark: 5 }); this.chekNext() }

   next = () => {
      this.chekNext()
      this.forceUpdate();
   }

   prev = () => {
      if (this.counter === 0) { this.counter = this.props.ratings.length - 1; }
      else { this.counter--; }
      this.forceUpdate();
   }
   /*================RENDER==================*/
   render() {
      return (
         <section className="ratings">
            <Modal order="start" text = {[
               <h4 key="h4">Hello</h4>,
               <p key="p">Here you will see the list of games, which we need your opinion about,
                     so tell as how much do you like every one of them by clicking on stars,
                     <br /> 1 - Totaly dislike
                     <br /> 5 - I adore it!
               </p>
            ]}/>
            <Modal order="finish" text = {[
               <h4  key="h4">Job is done!</h4>,
               <p key="p">
                  You can start over to see what marks you gave an change them if needed
               </p>
            ]}/>

            <aside className="prev"><img src={arrow} alt="nav-arrow" onClick={this.prev} /></aside>
            <div>
               
               <h3>Question #{this.counter+1}</h3>
               <div className="question">{this.props.ratings[this.counter].text}</div>
               <div className="star-container">
                  {[4, 3, 2, 1, 0].map(star => {
                     return (                      
                        <img  src={rate_star} alt="star" 
                              className={this.chekIncluded(star)} 
                              onClick={this.handlers[star]} key={star} />
                     );
                  })}
               </div>
            </div>
            <aside className="next"><img src={arrow} alt="nav-arrow" onClick={this.next} /></aside>
         </section>
      );
   }

   /*================Utillity==================*/
   chekIncluded(num){
      if(this.props.ratings[this.counter].mark >= num + 1){
         return "rate-star included";
      }
      return "rate-star";
   }

   chekNext(){
      if (this.counter === this.props.ratings.length - 1) { 
         $(".greeting#finish").addClass("modal-RVL");
         this.counter = 0; 
      }
      else { this.counter++; }
   }
}

/*=============Store connection============*/
function matchDispatchToProps(dispatch) {
   return bindActionCreators({ rate }, dispatch)
}

export default connect(state => ({
   ratings: state.ratings
}), matchDispatchToProps)(Ratings)