import React from "react"
import { Link, Router } from "react-router-dom"

const Navbar = () => {
    return (
        <nav>
            <h4>
                Home
                {/* <Router>
                    <Link to="/">Home</Link>
                </Router> */}
            </h4>
            <h4>
                Notes
                {/* <Router>
                    <Link to="/notes">Notes</Link>
                </Router> */}
            </h4>
            <h4>
                Create
                {/* <Router>
                    <Link to="/create">Create</Link>
                </Router> */}
            </h4>
        </nav>
    )
}

export default Navbar
