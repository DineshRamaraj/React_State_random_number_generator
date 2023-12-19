// Write your code here
import {Component} from 'react'
import './index.css'

class MyComponent extends Component {
  state = {number: 0}

  randomNumber = () => {
    this.setState({
      number: Math.ceil(Math.random() * 100),
    })
  }

  render() {
    const {number} = this.state
    return (
      <div className="app-container">
        <div className="random-number-generator-container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            className="generate-button"
            onClick={this.randomNumber}
          >
            Generate
          </button>
          <p className="random-number">{number}</p>
        </div>
      </div>
    )
  }
}

export default MyComponent
