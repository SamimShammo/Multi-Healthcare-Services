import React from 'react';
import './Login.css';
import img from './bg_1.jpg';

import { useHistory, useLocation } from 'react-router';
import useAuth from '../../useAuth/useAuth';

const Login = () => {

  const {googleSignIn, submitHandler, setUser, setError, isLogin, checkRegister, error, handleEmail, handlePassword, handleName, resetPassword} = useAuth();
  const location = useLocation()
  const history = useHistory()

const redirect_uri = location.state?.from || './home';

      const signInWithGoogle = () => {
        googleSignIn()
        .then(result => {
          console.log(result.user);
          setUser(result.user);
          history.push(redirect_uri)
          
      })

        .catch(error => {
            setError(error.message);
        })
}

    return (
     
  <div className="">
  <div className="bg" style={{img}}></div>
  <div className="contents">

    <div className="container">
      <div className="row align-items-center justify-content-center">
        <div className="col-md-12">
          <div className="form-block mx-auto">
            <div className="text-center mb-5">
              <h4 className="text-uppercase">{isLogin ? 'Login to' :  'Register to ' }  <br /><strong>Multi-Healthcare-Services </strong></h4>
            </div>
            <form  onSubmit={submitHandler}>
            {!isLogin &&  <div className="form-group first mb-3">
                <label htmlFor="username">User Name</label>
                <input onBlur={handleName}  type="text" className="form-control" placeholder="Name" id="username"  required/>
              </div>}
              <div className="form-group first mb-3">
                <label htmlFor="email">Email</label>
                <input onBlur={handleEmail} type="email" className="form-control" placeholder="Email" id="email" required/>
              </div>
              <div className="form-group last mb-3">
                <label htmlFor="password">Password</label>
                <input onBlur={handlePassword} type="password" className="form-control" placeholder="Password" id="password" required/>
              </div>

            
              <div className="d-sm-flex mb-5 align-items-center ">
              <input onChange={checkRegister} className="form-check-input text-whi" type="checkbox" id="gridCheck1"/>
                    <label className="form-check-label text-whi" htmlFor="gridCheck1">
                    {isLogin ? ' Login' : 'Register'}
                    </label>
                <span className=" ms-auto"><button className="btn btn-regular" onClick={resetPassword}>Forgot Password</button></span> 
              </div>
               <p className="text-danger">{error}</p>
              <button type="submit"  className="btn btn-block py-2 btn-primary mr-5 w-100 btn-regular" >{isLogin ? 'Login' : 'Register'}</button>
              
              <span className="text-center my-3 d-block">or</span>
          
              <div className="">
              <button  className="btn btn-block py-2 btn-facebook  w-100 mb-2">
                <span className="icon-facebook mr-3 "></span> Login with facebook
              </button>
              <button className="btn  py-2 btn-google w-100" onClick={signInWithGoogle} >Login with Google</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

  
</div>
    );
};

export default Login;