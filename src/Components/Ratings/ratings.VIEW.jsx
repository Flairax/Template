import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/*================Actions==================*/
import { rate } from '../../Vaults/Ratings/ratings.ACT'

/*================Components==================*/
import Ratings from './ratings';

import { StartGamesVoting, FinishGamesVoting } from '../Modals/modals.VAULT';

class RatingsView extends Component {
   /*================RENDER==================*/
   render() {
      return (
         <article>
            <Ratings 
               questions={this.props.games} 
               action={this.props.rate} 
               startMOD={<StartGamesVoting />}
               finishMOD={<FinishGamesVoting />}
            />                      
         </article>
      );
   }
}

/*=============Store connection============*/
function matchDispatchToProps(dispatch) {
   return bindActionCreators({ rate }, dispatch)
}

export default connect(state => ({
   games: state.ratings
}), matchDispatchToProps)(RatingsView)