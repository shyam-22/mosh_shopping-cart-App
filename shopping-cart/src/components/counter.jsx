import React, { Component } from 'react';

class Counter extends Component {
  
  render() { 
    return (
      <div>
      <span style={{fontSize : 20}} className = {this.getBadgeClasses()}>
        {this.formatCount()}
      </span> 
      <button onClick = {() => this.props.onIncrement(this.props.counter)} className="btn btn-primary m-2">Add</button>
      <button onClick = {() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger m-2">Delete</button>
    </div> 
    );
  }

  getBadgeClasses () {
    let classes = "badge m-2 badge-"
    classes += this.props.counter.value === 0 ? "warning" : "primary"
    return classes;
  }

  formatCount () {
      const {value} = this.props.counter 
       return  value === 0 ? 'zero' : value
  }
}
 
export default Counter;