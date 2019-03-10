import React from 'react';

// class Header extends Component {
  //   render() {
       
  //       return (      
  //       <div className="Header">
  //       <h1>{this.props.title}</h1>
  //          <h2>{this.props.subtitle}</h2>
  //       </div>
  //     );
  //   }
  // }


const Header= (props) => {
      return (      
      <div className="header">
      <div className = "container">
      <h1 className="header__title">{props.title}</h1>
      {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
      </div>
      </div>
    );
};
 Header.defaultProps = {
 title : "Indecision"
 };  
  export default Header;