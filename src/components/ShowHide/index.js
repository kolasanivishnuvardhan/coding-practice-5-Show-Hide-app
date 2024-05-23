import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {firstName: false, lastName: false}
  onClickFirstName = () => {
    this.setState(prevState => {
      return {firstName: !prevState.firstName}
    })
  }

  onClickLastName = () => {
    this.setState(prevState => {
      return {lastName: !prevState.lastName}
    })
  }

  render() {
    const {firstName, lastName} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="btns-container">
          <div className="first-name-container">
            <button
              className="btn"
              type="button"
              onClick={this.onClickFirstName}
            >
              Show/Hide FirstName
            </button>
            {firstName?<div className="joe-container"><p className="joe">Joe</p></div>: null}

          </div>
          <div className="first-name-container">
            <button
              className="btn"
              type="button"
              onClick={this.onClickLastName}
            >
              Show/Hide LastName
            </button>
            {lastName?<div className="joe-container"><p className="joe">Jonas</p></div>: null}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
