import React, { Component } from 'react';

class EvenAndOdd extends Component {
    constructor() {
        super();
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }

    handleInput(value) {
        this.setState({ userInput: value })
    }

    slpitArray(userInput) {
        let copyArray = userInput.split(',')
        console.log(copyArray)
        let newEvenArray = []
        let newOddArray = []
        for (let i = 0; i < copyArray.length; i++) {
            if (copyArray[i] % 2 === 0) {
                newEvenArray.push(parseInt(copyArray[i], 10))
            } else if (copyArray[i] % 2 === 1) {
                newOddArray.push(parseInt(copyArray[i], 10))
            }
        }
        this.setState({ evenArray: newEvenArray.join(','), oddArray: newOddArray.join(',') })
    }


    render() {
        // console.log(this.state);
        return (
            <div className='puzzleBox evenAndOddPB'>
                <h4>Evens and Odds</h4>
                <input className='inputLine' onChange={event => this.handleInput(event.target.value)}></input>
                <button className='confirmationButton' onClick={() => { this.slpitArray(this.state.userInput) }}>Split</button>
                <span className='resultsBox'>Evens [{this.state.evenArray}]</span>
                <span className='resultsBox'>Odds [{this.state.oddArray}]</span>
            </div>
        )
    }
};

export default EvenAndOdd;