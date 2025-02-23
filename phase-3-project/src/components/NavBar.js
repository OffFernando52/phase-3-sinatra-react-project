import React from "react"; 
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">Crazy for Cereal</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink exact className="nav-link" aria-current="page" to="/">Cereals</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact className="nav-link" aria-current="page" to="/reviews">Reviews</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/new-review">Review a Cereal</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default NavBar;