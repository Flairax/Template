import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

/*================Images==================*/
import arrow from '../Assets/Main/Images/nav-arr.svg'
import rate_star from '../Assets/Main/Images/star.svg'

/*================Modals==================*/
import Modal from '../Modals/modal';
import { StartGamesVoting, FinishGamesVoting } from '../Modals/modals.VAULT';

export default class Ratings extends Component {
   constructor(props) {
      super(props);
      this.counter = 0;
      this.answered = 0;
      this.questCount = props.questions.length - 1;
      props.questions.forEach(question => {
         if (question.mark === 0) {
            this.answered++;
         }
      });
      this.state = {
         currQuest: props.questions[this.counter],
         startMOD: true,
         finishMOD: false,
      }
   }

   /*================Handlers==================*/
   rate = (star) => {
      this.props.action({ currQues: this.state.currQuest, mark: star });
      this.answered--;
      this.next()
   }

   /*-------------Navigation-------------*/
   next = () => {
      this.counter = (this.counter === this.questCount) ? 0 : this.counter + 1;
      if (this.counter === 0) {
         this.setState({
            finishMOD: true,
         });
      }
      this.setState({
         currQuest: this.props.questions[this.counter],
      });
   }

   prev = () => {
      this.counter = (this.counter === 0) ? this.questCount : this.counter - 1;
      this.setState({
         currQuest: this.props.questions[this.counter]
      });
   }

   /*-------------Modals-------------*/
   closeMODStart = () => {
      this.setState({
         startMOD: false,
      });
   }

   closeMODFinish = () => {
      this.setState({
         finishMOD: false,
      });
   }
   /*================RENDER==================*/
   render() {
      return (
         <section className="ratings">
            {/*=============Prev arrow=============*/}
            <nav className="prev"><img src={arrow} alt="nav-arrow" onClick={this.prev} /></nav>
            <div>

               {/*=============Description=============*/}
               <h3>Question #{this.counter + 1}</h3>
               <h5>{this.answered > 0 ? `Remain: ${this.answered}` : "Complete"}</h5>
               <div className={this.state.currQuest.mark === 0 ? "question" : "question answered"}>
                  {this.state.currQuest.text}
               </div>

               {/*=============Stars=============*/}
               <div className="star-container">
                  {[4, 3, 2, 1, 0].map(star => {
                     return (
                        <img
                           src={rate_star}
                           alt="star"
                           className={this.chekIncluded(star)}
                           onClick={() => this.rate(star + 1)}
                           key={star}
                        />
                     );
                  })}
               </div>
            </div>

            {/*=============Next arrow=============*/}
            <nav className="next"><img src={arrow} alt="nav-arrow" onClick={this.next} /></nav>
            
            {/*=============Modals=============*/}
            {ReactDOM.createPortal(
               <Fragment>
                  {/*=============Start=============*/}
                  <Modal
                     closeBy="button"
                     opened={this.state.startMOD}
                     callback={this.closeMODStart}
                  ><StartGamesVoting />
                  </Modal>

                  {/*=============Finish=============*/}
                  <Modal
                     closeBy="button"
                     opened={this.state.finishMOD}
                     callback={this.closeMODFinish}
                  ><FinishGamesVoting />
                  </Modal>
               </Fragment>,
               document.getElementById("modals")
            )}
         </section>
      );
   }

   /*================Utillity==================*/
   chekIncluded(num) {
      if (this.state.currQuest.mark >= num + 1) {
         return "rate-star included";
      }
      return "rate-star";
   }
}