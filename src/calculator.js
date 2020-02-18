import React from 'react'

class Calculator extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            result: 0,
            num1: '',
            num2: ''
        }

        this.handleFieldChange = this.handleFieldChange.bind(this)
        this.calculateResult = this.calculateResult.bind(this)
    }

    handleFieldChange = (event) => {
        const newState = {};
        newState[event.target.id] = parseInt(event.target.value);
        this.setState(newState);
    }

    calculateResult = (event) => {
        event.preventDefault();
        let result;
        switch (event.target.id) {
            case "addButton":
                result = this.state.num1 + this.state.num2;
                this.setState({ result: result })
                break
            case "subtractButton":
                result = this.state.num1 - this.state.num2;
                this.setState({ result: result })
                break
            case "multiplyButton":
                result = this.state.num1 * this.state.num2;
                this.setState({ result: result })
                break
            default:
                result = this.state.num1 / this.state.num2;
                this.setState({ result: result })
        }
    }

    clearInputs = (event) => {
        event.preventDefault();
        this.setState( { result: 0, num1: '', num2: '' });
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <h1>{this.state.result}</h1>
                <input 
                className="numInput"
                type="text"
                id="num1"
                value={this.state.num1}
                onChange={this.handleFieldChange}
                />
                <input 
                    className="numInput"
                    type="text"
                    id="num2"
                    value={this.state.num2}
                    onChange={this.handleFieldChange}
                />
                <button id="clearInputButton" onClick={this.clearInputs}>Clear</button>
                <div>
                    <button id="addButton" onClick={this.calculateResult}> + </button>
                    <button id="subtractButton" onClick={this.calculateResult}> - </button>
                    <button id="multiplyButton" onClick={this.calculateResult}> * </button>
                    <button id="divideButton" onClick={this.calculateResult}> / </button>
                </div>
            </div>
            
        )
    }
}

export default Calculator