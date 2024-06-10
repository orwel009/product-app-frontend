import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="">ProductApp</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/add">AddProduct</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/search">SearchProduct</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/delete">DeleteProduct</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/">ViewProduct</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar