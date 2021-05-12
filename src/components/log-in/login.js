import React from 'react';
import Button from '@material-ui/core/Button';
import GoogleButton from 'react-google-button'
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import './login.scss';


import FormInput from '../form-input/form-input';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

// button style
const style = {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 10,
    border: 0,
    color: 'white',
    height: 48,

    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
};

const style2 = {
    borderRadius: 10,

};

// this is for login part component (the left side of signin page)
class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }


    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({
                email: '',
                password: ''
            });
        } catch (error) {
            console.log(error);
        }


    }

    handleChange = event => {

        const { value, name } = event.target;
        this.setState({ [name]: value })
    }



    render() {


        return (
            <div className='login' >
                <h2>Already hava an account?</h2>
                <span>Login in with your email/google account</span>

                <form className="form" onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" value={this.state.email} label="email" handleChange={this.handleChange} required />

                    <FormInput name="password" type="password" value={this.state.password} label="password" handleChange={this.handleChange} required />

                    <div className="buttons">
                        <Button
                            className="emailb"
                            type="submit"
                            onClick={this.props.onSubmit}
                            variant="contained"
                            style={style}
                            startIcon={<EmojiPeopleIcon />}>Log in</Button>

                        <GoogleButton className="googleb" onClick={signInWithGoogle} style={style2} />
                    </div>
                </form>
            </div>
        )
    }
}

export default Login;