import React, { useContext, useState } from 'react'
import AuthContext from '../context/authContext';
import { useNavigate } from 'react-router-dom';

export default function Login(props) {

    const context = useContext(AuthContext)
    const [credentials, setCredentials] = useState({ email: "", password: "" })
    const history=useNavigate();


    const handleLogin = async (e) => {
        e.preventDefault();
        const response = await context.login(credentials)
        if (response.status == 200) {
            localStorage.setItem("auth_token", response.token);
            props.showAlert(200,"Login Successfully")
            setTimeout(() => {
                history('/')  
            }, 1000);

        } else {
            props.showAlert(400,"Invalid Credentials")
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
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" name='email' className="form-control" id="exampleInputEmail1" value={credentials.email} onChange={handleOnChange} aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" name='password' className="form-control" value={credentials.password} onChange={handleOnChange} id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={handleLogin}>Submit</button>
                </form>
            </div>
        </div>
    )
}
