import React from 'react';
import { render } from 'react-dom';

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userLoggedIn: false
    }
  }
  login = () => {
    this.setState({
      userLoggedIn: true
    })
  }
  logout = () => {
    this.setState({
      userLoggedIn: false
    })
  }
  render() {
    if (this.state.userLoggedIn) {
      return (
        <div>
          <button onClick={this.logout}>Log out</button>
        </div>
      )
    } else {
      return (
        <div>
          <button onClick={this.login}>Log in</button>
        </div>
      )
    }
  }
}
ReactDOM.render(<Hello />, document.getElementById('app'));