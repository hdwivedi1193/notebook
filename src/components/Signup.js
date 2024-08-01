import React, { useContext, useState } from 'react'
import AuthContext from '../context/authContext';
import { useNavigate } from 'react-router-dom';

export default function Signup(props) {
  const [credentials, setCredentials] = useState({ name:"", email: "", password: "",cpassword:"" })
  const context = useContext(AuthContext)
  const history=useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
   const response= await context.signup(credentials)
   if(response && response.status==200){

    const login = await context.login(credentials)
    if (login.status == 200) {
      localStorage.setItem("auth_token", response.token);

      props.showAlert(200,"Login Successfully")

      setTimeout(() => {
        history('/')  
    }, 1000);
    }else{
      props.showAlert(200,"SignedUp Successfully. Please login to continue")

    }

   
   }
    

}

const handleOnChange = (e) => {
    setCredentials({ ...credentials, [e.currentTarget.name]: e.currentTarget.value })
}
  return (
    <div>
      <div className='container' style={{ 'marginTop': "100px" }}>

        <form>
        <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label">Name</label>
            <input type="text" name='name' className="form-control" id="exampleInputName" value={credentials.name} onChange={handleOnChange} aria-describedby="nameHelp" />
            <div id="nameHelp" className="form-text"></div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" name='email' className="form-control" id="exampleInputEmail1" value={credentials.email} onChange={handleOnChange} aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" name='password' className="form-control" value={credentials.password} minLength={6} onChange={handleOnChange} id="exampleInputPassword1" />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputCPassword1" className="form-label">Confirm Password</label>
            <input type="password" name='cpassword' className="form-control" value={credentials.cpassword} minLength={6} onChange={handleOnChange} id="exampleCInputPassword1" />
          </div>
         
          <button type="submit" className="btn btn-primary" onClick={handleSignup}>Submit</button>
        </form>
      </div>
    </div>
  )
}
