import React from "react";

import AuthContext from "./authContext";

const AuthUserState = (props) => {

  //  login
  const login = async (credentials) => {
    const { email, password } = credentials
    const options = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password })
    }
    const user = await fetch("http://localhost:3000/api/auth/login", options)
    const response = await user.json();
    return response;
  }
  // signup

  const signup= async(credentials)=>{
    const {name,email,password,cpassword}=credentials
    const options={
      method:"POST",
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name,email,password,cpassword})
    }
    const user =await fetch("http://localhost:3000/api/auth/create/user",options)
    const response= await user.json();
    return response;
}

  return <AuthContext.Provider value={{ login,signup }}>
    {props.children}
  </AuthContext.Provider>
}

export default AuthUserState