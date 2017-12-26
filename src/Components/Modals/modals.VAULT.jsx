import React, { Fragment } from 'react';

export function StartGamesVoting() {
   return (
      <Fragment>
         <h4 key="h4">Hello</h4>
         <p key="p">Here you will see the list of games, which we need your opinion about, so tell as how much do you like every one of them by clicking on stars,
            <br /> 1 - Totaly dislike
            <br /> 5 - I adore it!
         </p>
      </Fragment>
   )
}

export function FinishGamesVoting() {
   return (
      <Fragment>
         <h4 key="h4">Job is done!</h4>
         <p key="p">You can start over to see what marks you gave and change them if needed.</p>
      </Fragment>
   )
}