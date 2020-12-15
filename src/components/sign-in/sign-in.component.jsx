import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom.button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password:''
    }
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: '', password: ''})
  }

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value})
  }
//no entiendo handleChange que funciona, y porque esta en los 2 inputs del form
//por ejemplo si yo pongo email: juan@juan.com, y pass: 123456 y hago clic en el boton "submit form", que sucede??
  //opcion a, esto va unicamente al handleSubmit
  //opcion b, esto va unicamente al handleChange (pero quien es value, y quien es name??, y peor quien o que es target?)
  //opcion c, esto va las 2 handleSubmit Y handleChange
  render() {
    return(
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput name='email' type='email' value={this.state.email} handleChange={this.handleChange} label='email' required />

          <FormInput name='password' type='password' value={this.state.password} handleChange={this.handleChange} label='password' required />

        <div className='buttons'>
          <CustomButton type='submit'>Sign in</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn > {''} Sign in with Google {''} </CustomButton>
        </div>
        </form>
      </div>
    );
  }
}

export default SignIn;