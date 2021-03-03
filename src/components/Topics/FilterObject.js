import React, { Component } from 'react';

class FilterObject extends Component {
    constructor() {
        super();
        this.state = {
            unFilteredArray: [
                { "name": "Jimmy Joe", "title": "Hack0r", "age": 12 },
                { "name": "Jeremy Schrader", "age": 24, "hairColor": "brown" },
                { "name": "Carly Armstrong", "title": 'CEO' }
            ],
            userInput: '',
            filterArray: []
        }
    }

    handleInput(value) {
        this.setState({ userInput: value })
    }

    filterObjArray(userInput) {
        console.log(userInput)
        let arr = this.state.unFilteredArray.slice()
        console.log(arr)
        let newFilteredArr = arr.filter((elem) => {
            return elem.hasOwnProperty(userInput)
        })
        console.log(newFilteredArr)
        this.setState({ filterArray: newFilteredArr })
    }

    // filterObjArray(userInput) {
    //     let arr = this.state.unFilteredArray
    //     let newFilteredArr = []
    //     for (let i = 0; i < arr.length; i++) {
    //         if (arr[i].hasOwnProperty(userInput)) {
    //             newFilteredArr.push(arr[i])
    //         }
    //     }
    //     this.setState({ filterArray: newFilteredArr })
    // }




    render() {
        // console.log(this.state);
        return (
            <div className='puzzleBox filterObjectPB'>
                <h4>Filter Object</h4>
                <span className='puzzleText'>Original: {JSON.stringify(this.state.unFilteredArray, null, 10)}</span>
                <input className='inputLine' onChange={event => this.handleInput(event.target.value)}></input>
                <button className='confirmationButton' onClick={() => { this.filterObjArray(this.state.userInput) }}>Filter</button>
                <span className='resultsBox filterObjectRB'>Filtered: {JSON.stringify(this.state.filterArray)}</span>
            </div >
        )
    }
};

export default FilterObject;