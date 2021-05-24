import React, { Component } from 'react';
import Counters from './components/counters';
import Navbar from './components/Navbar';

class App extends Component {
    state = {  
        counters : [
            { id : 1, value :0},
            { id : 2, value :2},
            { id : 3, value :0}
        ]
    }

    handleDelete = (counterId) => {
        const counters = this.state.counters.filter( c => c.id !== counterId )
        this.setState({counters : counters})
        console.log("u deleted this==>", counterId)
    }
    
    handleIncrement = counter => {  
        const counters = [...this.state.counters]
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++
        this.setState({counters : counters})
        console.log("u clicked on==>", this.state.counters[index])
    }

    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0
            return c;
        })
        this.setState({counters : counters})
    }

    render() { 
        return (
            <React.Fragment>
                <Navbar/>
                <div className="container">
                    <Counters 
                        counters = {this.state.counters}
                        onReset = {this.handleReset}
                        onIncrement = {this.handleIncrement}
                        onDelete = {this.handleDelete}
                    />
                </div>
            </React.Fragment>
         );
    }
}
 
export default App;