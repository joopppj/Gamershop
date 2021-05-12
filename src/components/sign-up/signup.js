import React from 'react';
import Button from '@material-ui/core/Button';
import FiberNewIcon from '@material-ui/icons/FiberNew';

import './signup.scss';

import { auth, createUserDocument } from '../../firebase/firebase.utils';

import FormInput from '../form-input/form-input';

const style = {
    background: 'linear-gradient(45deg, #42c8f5 30%, #c8f542 90%)',
    borderRadius: 10,
    border: 0,
    color: 'white',
    height: 48,

    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
};


class Signup extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert('Make sure the passwords are the same')
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserDocument(user, { displayName });
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch (error) {
            console.log(error);
        }
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }

    render() {
        //const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className="sign-up">
                <h2 className="title">Don't hava an account?</h2>
                <span>Sign up with your email/password</span>
                <form className="form-signup" onSubmit={this.handleSubmit}>
                    <FormInput name="displayName" type="text" value={this.state.displayName} label="Nickname" handleChange={this.handleChange} required />

                    <FormInput name="email" type="email" value={this.state.email} label="Email" handleChange={this.handleChange} required />

                    <FormInput name="password" type="password" value={this.state.password} label="Password" handleChange={this.handleChange} required />

                    <FormInput name="confirmPassword" type="password" value={this.state.confirmPassword} label="Confirm Password" handleChange={this.handleChange} required />

                    <Button
                        className="signupb"
                        type="submit"
                        onClick={this.props.onSubmit}
                        variant="contained"
                        style={style}
                        startIcon={<FiberNewIcon />}>Sign Up
                    </Button>
                </form>

            </div>
        )
    }
}

export default Signup;