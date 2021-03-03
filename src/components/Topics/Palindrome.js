import React, { Component } from 'react';

class Palindrome extends Component {

    constructor() {
        super();
        this.state = {
            userInput: '',
            palindrome: ''
        }
    }

    handleInput(value) {
        this.setState({ userInput: value })
    }


    checkPalindrome(userInput) {
        let isPalindrome = ''
        let stringToCheck = userInput.toLowerCase()
        let reverseString = stringToCheck.reverse()
        console.log(reverseString === stringToCheck)
        return isPalindrome = reverseString === stringToCheck
    }






    render() {
        // console.log(this.state);
        return (
            <div className='puzzleBox filterStringPB'>
                <h4>Palindrome</h4>
                <input className='inputLine' onChange={event => this.handleInput(event.target.value)}></input>
                <button className='confirmationButton' onClick={() => this.checkPalindrome(this.state.userInput)}>Check</button>
                <span className='resultsBox'>Palindrome: {JSON.stringify(this.state.palindrome)}</span>
            </div>
        )
    }
};

export default Palindrome;