

// Redux Items
import { useState } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';


// Needed Components
import FormInput from '../../forms/form-input.component';
import FormButton from '../../forms/custom-button.component';

// Firebase signin with google
import { emailSignInStart, signOutStart } from '../../../redux/user/user.actions';


type propObj = {
  emailSignInStart:any,
  signOutStart:any
}


const LoginForm = ({emailSignInStart, signOutStart}:propObj) => {

  const [ userCredentials, setCredentials ] = useState({ email:'', password:''});
  

  const handleSubmit = async (event:any) =>{
    console.log(userCredentials)
    event.preventDefault();
    const {email, password } = userCredentials;
    emailSignInStart(email, password);

  }

  const handleChange = (event:any) =>{
    const {value, name} = event.target;
    setCredentials({...userCredentials, [name]:value});
    console.log(userCredentials)
  }

  return(



    <div className="main-auth-wrapper">

      <div className="login-form-wrapper">

        <div className="login-form">
                
          <form id="login-form">

            <FormInput handleChange={handleChange} 
                       name={'email'}
                       label={"Email"}
                       placeholder={"Email Address"}
                       type={"email"}
                       icon={"Envelope"}
                       error={false} />

            <FormInput handleChange={handleChange} 
                       name={'password'}
                       label={"Password"}
                       placeholder={"Password"}
                       type={"password"}
                       icon={"Key"}
                       error={false} />

            <FormButton handleClick={handleSubmit}
                        classString={"primary-button upper-button raised is-fullwidth is-rounded"}
                        name={"login-submit"}
                        label={"Login"}  />


            <div className="forgot-link has-text-centered">
                <Link href="/resetPassword">Forgot Password?</Link>
            </div>

          </form>

        </div>

      </div>

    </div>

  )
}

const mapDispatchToProps = (dispatch:any) => ({
  emailSignInStart:(email:string, password:string) => dispatch(emailSignInStart({email, password})),
  signOutStart:() => dispatch(signOutStart())
})

export default connect(null, mapDispatchToProps)(LoginForm)
