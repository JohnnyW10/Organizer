import React from "react";

const styled = {
  cursor:'pointer'
}

class LoggedButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedState: this.props.logged,
      name: 'Login in'
    } 
  }

  change_value = () => {
    if(this.state.loggedState === false) {
      this.setState({loggedState:  true, name: 'Login in'})
    }
    if(this.state.loggedState === true) {
      this.setState({loggedState:  false, name: 'Login out'})
    }
  }



  render() {
    return(
      <div onClick={this.change_value} style={styled}>{this.state.name}</div>
    )
  }
}

function displayLoginButton () {
  return(<LoggedButton logged={true}/>)
}


export default displayLoginButton;
