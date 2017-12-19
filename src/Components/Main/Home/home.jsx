import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { enterAsAdmin, quitAdmin } from '../../../Reducers/roles-Action';

class Home extends Component {
   render() {
      return (
         <article>
            <h1>Home</h1>
            <section className="switcherRole">
               <h4>Switch role</h4>
               {this.props.acces ?
                  <button onClick={this.handleQuitAdmin}>Quit admin mode</button>
                  :
                  <form onSubmit={this.handleAdmin}>
                     <input className={this.props.validation ? "input" : "input invalid"} type="password" required placeholder="password" ref="adminPass" />
                     <button type="submit">Enter admin mode</button>
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

   handleAdmin = (event) => {
      event.preventDefault();
      this.props.enterAsAdmin(this.refs.adminPass.value);
      this.refs.adminPass.value = "";
   }

   handleQuitAdmin = () => {
      this.props.quitAdmin();
   }
}

function matchDispatchToProps(dispatch) {
   return bindActionCreators({ enterAsAdmin, quitAdmin }, dispatch)
}

export default connect(
   state => ({
      acces: state.roles.accesability,
      validation: state.roles.passwordValidation,
   }), matchDispatchToProps)(Home);