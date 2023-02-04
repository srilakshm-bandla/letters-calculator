// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {enterInput: ''}

  textCount = event => {
    console.log(event.target.value)
    this.setState({
      enterInput: event.target.value,
    })
  }

  render() {
    const {enterInput} = this.state
    console.log(enterInput)
    return (
      <div className="letters-container">
        <div>
          <h1 className="heading">Calculate the Letters you enter</h1>

          <input
            type="text"
            className="text-class"
            placeholder="Enter the phrase"
            value={enterInput}
            onChange={this.textCount}
          />

          <div>
            <p className="count-con">No.of letters: 0</p>
          </div>
        </div>

        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
