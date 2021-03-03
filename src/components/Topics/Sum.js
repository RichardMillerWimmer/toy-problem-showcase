import React, { Component } from 'react';

class Sum extends Component {
    constructor() {
        super();
        this.state = {
            number1: 0,
            number2: 0,
            sum: 0
        }
    }


    handleInput1(value) {
        this.setState({ number1: parseInt(value, 10) })
    };

    handleInput2(value) {
        this.setState({ number2: parseInt(value, 10) })
    };

    add(number1, number2) {
        this.setState({ sum: number1 + number2 })
    };






    render() {
        // console.log(this.state);
        return (
            <div className='puzzleBox sumPB'>
                <h4>Sum</h4>
                <input className='inputLine' onChange={event => this.handleInput1(event.target.value)}></input>
                <input className='inputLine' onChange={event => this.handleInput2(event.target.value)}></input>
                <button className='confirmationButton' onClick={() => this.add(this.state.number1, this.state.number2)}>Add</button>
                <span className='resultsBox'>Sum: {this.state.sum}</span>
            </div>
        )
    }
};

export default Sum;