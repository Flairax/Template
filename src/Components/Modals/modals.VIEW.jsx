import React, { Fragment } from 'react';

/*==============Components===============*/
import Modal from './modal';
import Login from '../Login/login';

const modals = (props) => {
   return(
      <Fragment>
         {/*==============Login===============*/}
         <Modal name="Login" text={<Login />}/>

         {/*==============Games voting===============*/}
         <Modal name="Start-voting" text={[
            <h4 key="h4">Hello</h4>,
            <p key="p">Here you will see the list of games, which we need your opinion about,
                     so tell as how much do you like every one of them by clicking on stars,
                     <br /> 1 - Totaly dislike
                     <br /> 5 - I adore it!
               </p>
         ]} closeBy="button" />        
         <Modal name="Finish-voting" text={[
            <h4 key="h4">Job is done!</h4>,
            <p key="p">
               You can start over to see what marks you gave and change them if needed.
               </p>
         ]} closeBy="button" />
      </Fragment>
   );
}

export default modals;