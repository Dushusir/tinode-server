import { Univer } from '../univer';

import React from 'react';

export default class UniverView extends React.PureComponent {
  componentDidMount(){
    new Univer()
  }
  componentWillUnmount() {
    this.setState = ()=>false;
}
  render() {
    return (
      <div id="univer-demo" style={{width: '300px', height: '100px'}}>
      </div>
    );
  }
};
