import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../../actions/auth';

export class AdminLogin extends React.Component {
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
            <div className="admin-login">
                <h1 className="admin-login__title">Blog Admin Sign In</h1>
                <div className="login-modal">
                    <label htmlFor='email-input' className="login-modal__label">EMAIL</label>
                    <input 
                        onChange={this.onEmailChange}
                        className="login-modal__input"
                        id="email-input"
                        type='text'
                        value={this.state.email}
                        required
                    />
                    <label htmlFor='password-input' className="login-modal__label">PASSWORD</label>
                    <input 
                        onChange={this.onPasswordChange}
                        className="login-modal__input"
                        id="password-input"
                        type='password'
                        value={this.state.password}
                        required
                    />
                    <button className="login-modal__button" onClick={this.loginWithEmail}>LOGIN</button>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => ({
    startLogin: (email, password) => dispatch(startLogin(email, password))
});

export default connect(undefined, mapDispatchToProps)(AdminLogin);