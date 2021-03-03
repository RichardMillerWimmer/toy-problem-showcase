import React, { Component } from 'react';

class FilterString extends Component {

    constructor() {
        super();
        this.state = {
            unFilteredArray: ['James', 'Jessica', 'Melody', 'Tyler', 'Blake', 'Jennifer', 'Mark', 'Maddy'],
            userInput: '',
            filteredArray: []
        }

    }

    handleInput(value) {
        this.setState({ userInput: value })
    }

    filterString(userInput) {
        let arr = this.state.unFilteredArray.slice()
        let newFilteredArr = arr.filter(elem => {
            return elem === userInput
        })
        console.log(newFilteredArr)
        this.setState({ filteredArray: newFilteredArr })
    }




    render() {
        // console.log(this.state);
        return (
            <div className='puzzleBox filterStringPB'>
                <h4>Filter String</h4>
                <span className='puzzleText'>Original: {JSON.stringify(this.state.unFilteredArray)}</span>
                <input className='inputLine' onChange={event => this.handleInput(event.target.value)}></input>
                <button className='confirmationButton' onClick={() => { this.filterString(this.state.userInput) }}>Filter</button>
                <span className='resultsBox filterStringRB'>Filtered: {JSON.stringify(this.state.filteredArray)}</span>
            </div>

        )
    }
};

export default FilterString;