import React, { Component } from 'react';


/*================Images==================*/
import arrow from '../Assets/Main/Images/nav-arr.svg'
import rate_star from '../Assets/Main/Images/star.svg'

/*================Modals==================*/
import { RatingsStartMOD, RatingsFinishtMOD } from '../Modal/modals.VIEW'


export default class Ratings extends Component {
   constructor() {
      super();
      this.counter = 0;
      this.answered = 0;
      this.questCount = 0;
   }

   /*================Lifecycle==================*/      
   componentDidMount(){
      RatingsStartMOD();   
   }
   
   componentWillMount(){
      this.questCount = this.props.questions.length - 1;
      this.props.questions.forEach(question => {
         if (question.mark === 0) {
            this.answered++;
         }
      });
   }

   /*================Handlers==================*/
   rate = (star) => { 
      this.props.action({ currQues: this.props.questions[this.counter], mark: star });
      this.answered--; 
      this.chekNext() 
   }

   next = () => {
      this.chekNext()
      this.forceUpdate();
   }

   prev = () => {
      if (this.counter === 0) { this.counter =  this.questCount; }
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
               <h5>{this.answered > 0 ? `Remain: ${this.answered}` : "Complete"}</h5>
               <div className={this.props.questions[this.counter].mark === 0 ? "question" : "question answered"}>
                  {this.props.questions[this.counter].text}
               </div>
               <div className="star-container">
                  {[4, 3, 2, 1, 0].map(star => {
                     return (                      
                        <img  src={rate_star} alt="star" 
                              className={this.chekIncluded(star)} 
                              onClick={() => this.rate(star + 1)} key={star} />
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
      if(this.props.questions[this.counter].mark >= num + 1){
         return "rate-star included";
      }
      return "rate-star";
   }

   chekNext(){
      if (this.counter ===  this.questCount) { 
         RatingsFinishtMOD();
         this.counter = 0; 
      }
      else { this.counter++; }
   }
}