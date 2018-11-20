import React, { Component } from 'react';
import Header from './headernav/header';


class Layout extends Component {
  render() {
    return (
      <div className='layout'>
        {this.props.children}
        <Header />
        
      </div>
    );
  }
}

export default Layout;