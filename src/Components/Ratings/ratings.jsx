import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

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
      this.answered = 0;
      this.handlers = [
         this.rateOne,
         this.rateTwo,
         this.rateThree,
         this.rateFour,
         this.rateFive,
      ];
   }

   componentWillMount(){
      this.props.ratings.forEach(question => {
         if (question.mark === 0) {
            this.answered++;
         }
      });
   }
   /*================Handlers==================*/
   rateOne = () => { this.props.rate({ currQues: this.props.ratings[this.counter], mark: 1 }); this.answered--; this.chekNext() }
   rateTwo = () => { this.props.rate({ currQues: this.props.ratings[this.counter], mark: 2 }); this.answered--; this.chekNext() }
   rateThree = () => { this.props.rate({ currQues: this.props.ratings[this.counter], mark: 3 }); this.answered--;  this.chekNext() }
   rateFour = () => { this.props.rate({ currQues: this.props.ratings[this.counter], mark: 4 }); this.answered--; this.chekNext() }
   rateFive = () => { this.props.rate({ currQues: this.props.ratings[this.counter], mark: 5 }); this.answered--; this.chekNext() }

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
            <aside className="prev"><img src={arrow} alt="nav-arrow" onClick={this.prev} /></aside>
            <div>              
               <h3>Question #{this.counter+1}</h3>
               <h5>Remain: {this.answered}</h5>
               <div className={this.props.ratings[this.counter].mark === 0 ? "question" : "question answered"}>
                  {this.props.ratings[this.counter].text}
               </div>
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
         $(".modal#finish").addClass("modal-RVL");
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