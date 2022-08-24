import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <span>
                <Link to="/" className="m-4">
                    Main
                </Link>
            </span>
            <span>
                <Link to="/login" className="m-4">
                    Login
                </Link>
            </span>
            <span>
                <Link to="/users" className="m-4">
                    Users
                </Link>
            </span>
        </div>
    );
};

export default Navbar;
