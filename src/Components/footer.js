import React, { Component } from 'react';
import '../Style/Css/footer.scss';

export default class Footer extends Component {
  componentDidMount(){
    const JQuery = document.createElement("script");

    JQuery.src = "./Scripts/jquery.js";
    JQuery.async = true;
    JQuery.type = "text/javascript";
    JQuery.className = "MountedJQuery";

    document.body.appendChild(JQuery);

    const parallax = document.createElement("script");

    parallax.src = "./Scripts/parallax.js";
    parallax.async = true;
    parallax.type = "text/javascript";
    parallax.className = "Mountedparallax";

    document.body.appendChild(parallax);
  }
  
  componentWillUnmount(){
    const menuShifter = document.createElement("script");
    menuShifter.className = "MountedJQuery";

    document.body.removeChild(menuShifter);
  }

  render() {
    return (
      <footer>
        Footer
      </footer>
    );
  }
}
