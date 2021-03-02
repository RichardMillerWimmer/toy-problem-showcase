import React, { Component } from 'react';

class EvenAndOdd extends Component {
    constructor() {
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }

    handleInput(event) {
        this.setState({ unserInput: event.target.value })
    }

    slpitArray() {
        let copyArray = this.state.evenArray.slice()
        let newEvenArray = []
        let newOddArray = []
        copyArray.filter((num, index) => {
            if (num % 2 === 0) {
                newEvenArray.push(num)
            } else if (num % 2 === 1) {
                newEvenArray.push(num)
            }
        })
    }


    render() {
        // console.log(this.state);
        return (
            <div className='puzzleBox evenAndOddPB'>
                <h4>Evens and Odds</h4>
                <input className='inputLine' onChange={event => this.handleInput(event)}></input>
                <button className='confirmationButton' onClick={ }></button>
                <span className='resultBox'></span>
                <span className='resultBox'></span>
            </div>
        )
    }
};

export default EvenAndOdd;