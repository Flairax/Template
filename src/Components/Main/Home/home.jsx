import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { login, exit } from '../../../Reducers/Roles/roles-Action';

//<p hidden className={!this.props.loginVal && !this.props.passwordVal && "notValidDesc"}>Wrong login</p>

class Home extends Component {
   render() {
      return (
         <article>
            <h1>Home</h1>
            <section className="switcherRole">
              
               {this.props.logined ?
                  <button onClick={this.exit}>Quit</button>
                  :
                  <form onSubmit={this.login}>
                     <input className={this.props.loginVal ? "input" : "input invalid"} 
                        type="text" required placeholder="Login" ref="Login" />
                     <p  className={
                           !this.props.loginVal ? "notValidDesc" : 
                           !this.props.passwordVal ? "validDesc" : ""
                        }>
                     login</p>
                     <input className={this.props.passwordVal ? "input" : "input invalid"} 
                        type="password" required placeholder="Password" ref="Password" />
                     <p  className={!this.props.passwordVal && "notValidDesc"}>password</p>
                     <button type="submit">Sign in</button>
                  </form>
               }
            </section>
            <hr />
            <section className="description">
               <h4>Описание: </h4>
               <ul>
                  <li>Чтобы перейти на страницу товаров нажмите на пункт "Products" (3).</li>
                  <li>Общая информация о продукции находиться в левом меню, чтобы открыть его наведите курсор на 3 кружка и кликните.</li>
                  <li>Сверху находиться форма для перехода в режим администратора, пароль "1111".
                     <ul>
                        <li>В режиме администратора пункт меню "Customer support" меняется на "Administrator tools".</li>
                        <li>Cтановиться доступно меню добавления товара, для открытия нажмите на сайдбар справа.</li>
                        <li>Появляется возможность путешествовать по состояниям через дополнительные кнопки на левом сайдбаре </li>
                     </ul>
                  </li>
                  <li>Сайт в большей степени адаптивен, попробуйте изменять размер.</li>
                  <li>Вся требуемая функциональность реализована</li>
                  <li>Я не использовал materialUI, по причине того что, думаю вы сможете лучше оценить мои навыки работы с html/css при ручной вёрстке.</li>
                  <li><a href="https://github.com/Flairax/Template">Ссылка на GitHub</a></li>
               </ul>
            </section>
         </article>
      );
   }

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
}

function matchDispatchToProps(dispatch) {
   return bindActionCreators({ login, exit }, dispatch)
}

export default connect(
   state => ({     
      acces: state.roles.CurrentUser.accesability,
      logined: state.roles.Chekker.logined,
      loginVal: state.roles.Chekker.loginVal,
      passwordVal: state.roles.Chekker.passwordVal,
   }), matchDispatchToProps)(Home);