import React from 'react'

import {
    Link,
    useLocation,
    useNavigate 
} from "react-router-dom";


export default function Navbar(props) {
    let locations = useLocation();
    React.useEffect(() => {
    }, [locations]);

    const history=useNavigate();

    const handleLogin=()=>{
        history("/login");

    }
    const handleSignup=()=>{
        history("/signup");

    }

    const handleLogout=()=>{
        localStorage.removeItem("auth_token")
        props.showAlert(200,"LoggedOut Successfully")

        history("/login");

    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${locations.pathname == `/` ? `active` : ""}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${locations.pathname == `/about` ? `active` : ""}`} to="/about">About</Link>
                            </li>
                        </ul>
                        {
                        localStorage.getItem("auth_token") && localStorage.getItem("auth_token")!=null?<button className="btn btn-outline-success me-2" type="button" onClick={handleLogout}>Logout</button>:<><button className="btn btn-outline-success me-2" type="button" onClick={handleLogin}>Login</button><button className="btn btn-outline-success me-2" type="button" onClick={handleSignup} >SignUp</button> </>
                        }
                        

                    </div>
                </div>
            </nav>
        </div>
    )
}
