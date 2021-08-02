
import { useState } from 'react';
import { connect } from 'react-redux';
import FormInput from '../../forms/form-input.component';
import FormButton from '../../forms/custom-button.component';
import { signUpStart } from '../../../redux/user/user.actions';


type propObj = {
  signUpStart:any
}

const Register = ({signUpStart}:propObj)=> {

  const [userCredentials, setUserCredentials] = useState({
    email : '',
    confirmEmail:'',
    password : '',
    confirmPassword:'',
    displayName:''

  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async (event:any) => {

    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    signUpStart({displayName, email, password})
  };


  const handleChange = (event:any) =>{
    const {value, name} = event.target;
    setUserCredentials({...userCredentials, [name]:value});
  }


  return(

    <div className="main-auth-wrapper">

      <div className="registration-form-wrapper">

        <div className="registration-form">

          <form>

            <FormInput handleChange={handleChange} 
                          name={'displayName'}
                          label={"Display Name"}
                          placeholder={"Name displayed for user"}
                          type={"text"}
                          icon={"UserAstronaut"}
                          error={false} />

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

            <FormInput handleChange={handleChange} 
                          name={'confirmPassword'}
                          label={"Confirm Password"}
                          placeholder={"Confirm Password"}
                          type={"password"}
                          icon={"Key"}
                          error={false} />

            <FormButton handleClick={handleSubmit}
                          classString={"primary-button upper-button raised is-fullwidth is-rounded"}
                          name={"register-submit"}
                          label={"Register"}  />

          </form>

        </div>

      </div>

    </div>

  )
}

const mapDispatchToProps = (dispatch:any) => ({
  signUpStart : (userCredentials:any) => dispatch(signUpStart(userCredentials))
});

export default connect(null, mapDispatchToProps)(Register);


