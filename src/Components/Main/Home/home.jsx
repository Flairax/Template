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
                     <input className="input"  type="password" required placeholder="password" onChange={(event) => { this.setState({ adminPass: event.target.value }) }} />
                     <button type="submit">Enter admin mode</button>
                  </form>
               }
            </section>
            <hr/>
            <section className="description">
               <h4>Описание: </h4>
               <ul>
                  <li>Чтобы перейти на страницу товаров нажмите на рункт "Products" (3).</li>
                  <li>Общая информация о продукции находиться в левом меню, чтобы открыть его наведите курсор на 3 кружка и кликните.</li>
                  <li>Сверху находиться форма для перехода в режим администратора, пароль "1111".
                     <ul>
                        <li>В режиме администратора появляется пункт меню "Administrator tools".</li>
                        <li>Cтановиться доступно меню добавления товара, для открытия нажмите на сайдбар справа.</li>
                        <li>Появляется возможность путешествовать по состояниям через кнопки на левом сайдбаре </li>
                     </ul>
                  </li>
                  <li>Сайт в большей степени адаптивен, попробуйте изменять размер.</li>
                  <li>Надеюсь, то что я не в прямой точности следовал техническому заданию не слишком критично.
                     <ul>
                        <li>Вся требуемая функциональность реализована</li>
                        <li>Также я не использовал materialUI, по причине - думаю вы сможете лучше оценить мои CSS навыки при ручном подходе.</li>
                     </ul>
                  </li>
               </ul>
            </section>
         </article>
      );
   }

   handleAdmin = (event) => {
      event.preventDefault();
      this.props.enterAsAdmin(this.state.adminPass);
      this.setState({
         adminPass: ""
      })
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
   }), matchDispatchToProps)(Home);