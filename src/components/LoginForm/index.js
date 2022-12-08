// Write your JS code here
import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', errorMsg: '', showSubmitError: false}

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(response)
    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {username, password, errorMsg, showSubmitError} = this.state
    return (
      <>
        <div className="log-form-container">
          <div className="login-img">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
              alt="website login"
              className="login-logo"
            />
          </div>
          <form className="form-container" onSubmit={this.onSubmitForm}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
              className="web-logos"
            />
            <br />
            <label className="user-name  labels" htmlFor="username">
              USERNAME
            </label>
            <br />
            <input
              type="text"
              className="user-name-input inputs"
              id="username"
              value={username}
              onChange={this.onChangeUsername}
              placeholder="Username"
            />
            <br />
            <label className="pass-word labels" htmlFor="password">
              PASSWORD
            </label>
            <br />
            <input
              type="password"
              className="password-input inputs"
              id="password"
              value={password}
              onChange={this.onChangePassword}
              placeholder="Password"
            />
            <br />
            <button type="submit" className="login-btn">
              Login
            </button>
            {showSubmitError && <p className="err-msg">*{errorMsg}</p>}
          </form>
        </div>
      </>
    )
  }
}

export default LoginForm
