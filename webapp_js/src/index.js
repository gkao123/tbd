import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

class HelloWorld extends React.Component {
  render(){
    return(
      <div>Hello World!</div>
    )
  }
}

class Awon extends React.Component {
  render(){
    return (
      <div>
        <h3>awon THE APP COMING SOON!</h3>
      <HelloUser handleChange = 'anthony'/>
      </div>
    )
  }
}

class HelloUser extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      username: 'anthonyliu'
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({
      username: e.target.value
    })
  }

  render(){
    return (
      <div>
        Hello {this.state.username} <br />
      Change Name:
      <input>
        type = "text"
        value = {this.state.username}
        onChange = {this.handleChange}
      </input>
      </div>
    )
  }
}

ReactDOM.render(<Awon />, document.getElementById('root'));

registerServiceWorker();