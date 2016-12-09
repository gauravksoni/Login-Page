import React, { Component } from 'react';
import './Style/App.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      PasswordPage:false
    };
  };

/*Password Page Rendering */
  enablePasswordPage(){
    var emailtext= this.refs.enteremail.value
    if (emailtext=='abcd@xyz.com'){
      this.setState({
        PasswordPage: true
      });
    };
    else {
     alert("Invalid Email!");
     PasswordPage: false
    };
  };

  render(){
    var usernameComp=(
      <div className="mainapp">
        <img className="avatar"src={require('./Docs/img_avatar2.png')} alt=""/>
        <h2>Email  Id</h2>
        <input type='email' ref='enteremail'className="inputemail" placeholder='Enter Username' required/>
        <div>
          <button onClick={this.enablePasswordPage.bind(this)} className="loginbutton">Next</button>
        </div>
      </div>
    );
    var passwordComp=(
      <form action="http://localhost:3002">
        <div className="mainapp">
          <img className="avatar"src={require('./Docs/photo.jpg')} alt=""/>
          <h2>Password</h2>
          <input type='password' ref='enteremail'className="inputemail" placeholder='Enter Password' required/>
          <div>
            <button type="submit" className="loginbutton">Login</button>
          </div>
        </div>
      </form>
    );

    return (
      <div>
        { this.state.PasswordPage ? passwordComp : usernameComp }
      </div>
    );
  };
};
export default App;
