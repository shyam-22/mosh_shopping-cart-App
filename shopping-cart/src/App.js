import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count : 0
  }

  render() { 
    return (
      <div>

      <span style={{fontSize : 20}} className = {this.getBadgeClasses()}>
        {this.formatCount()}
      </span> 
      <button className="btn btn-danger">Increment</button>
    </div> 
    );
  }

  getBadgeClasses () {
    let classes = "badge m-2 badge-"
    classes += this.state.count === 0 ? "warning" : "primary"
    return classes;
  }

    formatCount () {
      const {count} = this.state
       return  count === 0 ? 'zero' : count
      }

}
 
export default Counter;