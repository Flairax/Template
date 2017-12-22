import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login, exit } from '../../Reducers/Roles/roles.ACT';


class Login extends Component {
   /*================Handlers==================*/
   login = (event) => {
      event.preventDefault();
      this.props.login({
         login: this.refs.Login.value,
         password: this.refs.Password.value,
      });     
      this.refs.Password.value = "";
   }

   exit = () => {
      this.props.exit();
   }
   /*================RENDER==================*/
   render() {
      return (
         <section className="switcherRole">
            {this.props.authorised ?
               <button onClick={this.exit}>Quit</button>
               :
               <form onSubmit={this.login}>
                  <input className={this.props.loginVal ? "input" : "input invalid"}
                     type="text" required placeholder="Login" ref="Login" />
                  <p className={
                     !this.props.loginVal ? "notValidDesc" :
                        !this.props.passwordVal ? "validDesc" : ""
                  }>
                     login</p>
                  <input className={this.props.passwordVal ? "input" : "input invalid"}
                     type="password" required placeholder="Password" ref="Password" />
                  <p className={!this.props.passwordVal ? "notValidDesc" : ""}>password</p>
                  <button type="submit">Sign in</button>
               </form>
            }
         </section>
      );
   }
}


/*================Store==================*/
function matchDispatchToProps(dispatch) {
   return bindActionCreators({ login, exit }, dispatch)
}

export default connect(
   state => ({
      acces: state.roles.CurrentUser.accesability,
      authorised: state.roles.Chekker.authorised,
      loginVal: state.roles.Chekker.loginVal,
      passwordVal: state.roles.Chekker.passwordVal,
   }), matchDispatchToProps)(Login);