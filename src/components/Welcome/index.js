import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {buttonText: 'Subscribe'}

  isClicked = () => {
    const {buttonText} = this.state
    if (buttonText === 'Subscribe') {
      this.setState(() => ({buttonText: 'Subscribed'}))
    } else {
      this.setState(() => ({buttonText: 'Subscribe'}))
    }
  }

  render() {
    const {buttonText} = this.state
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thank you! Happy Learning</p>
        <button type="button" className="button" onClick={this.isClicked}>
          {buttonText}
        </button>
      </div>
    )
  }
}

export default Welcome
