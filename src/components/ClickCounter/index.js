import {Component} from 'react'

import './index.css'

class Counter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => {
      console.log(`Previous State ${prevState.count}`)

      return {count: prevState.count + 1}
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-con">
        <h1 className="heading">
          The Button has been clicked <br />
          <span className="span">{count} </span>times
        </h1>
        <p className="desc">Click the button to increase the count</p>
        <button className="btn" type="button" onClick={this.onIncrement}>
          Click Me!
        </button>
      </div>
    )
  }
}

export default Counter
