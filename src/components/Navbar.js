import React from 'react'

export default function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg" style={{ boxShadow: "3px 3px 5px white" }}>
            <div className="nav container-fluid py-2">
                <a className="navbar-brand ms-5" href="/" style={{ fontSize: "29px" }}> 
                <strong className='text-light'> UserList </strong></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                 data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                  aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    
                </div>
                <div>
                    <button className="btn btn-outline-light me-4"  style={{ fontSize: "24px" }} 
                    onClick={props.handleRequest}>Get Users</button>
                </div>
            </div>
        </nav>
    )
}