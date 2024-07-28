import React from 'react'

import {
    Link,
    useLocation
} from "react-router-dom";


export default function Navbar() {
    let locations = useLocation();
    React.useEffect(() => {
    }, [locations]);

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

                    </div>
                </div>
            </nav>
        </div>
    )
}
