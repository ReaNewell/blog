import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../../actions/auth';

class AdminLogin extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        }
    }
    onEmailChange = (e) => {
        const email = e.target.value;
        this.setState(() => ({ email }));
    }
    onPasswordChange = (e) => {
        const password = e.target.value;
        this.setState(() => ({ password }));
    }
    loginWithEmail = () => {
        if (this.state.email && this.state.password) {
            this.props.startLogin(this.state.email, this.state.password);
        }
    }
    render() {
        return (
            <div>
                <h2>Please login, sir.</h2>
                <input 
                    onChange={this.onEmailChange}
                    placeholder='Email'
                    type='text'
                    value={this.state.email}
                />
                <input 
                    onChange={this.onPasswordChange}
                    placeholder='Password'
                    type='text'
                    value={this.state.password}
                />
                <button onClick={this.loginWithEmail}>Log In</button>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => ({
    startLogin: (email, password) => dispatch(startLogin(email, password))
});

export default connect(undefined, mapDispatchToProps)(AdminLogin);