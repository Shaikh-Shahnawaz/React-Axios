import React from 'react'
import { Link } from "react-router-dom";
import '../RoutingCss/Header.css'
function Headers() {
    return (
        <div className="contianer bg-light text-center py-3 d-flex justify-content-around ">
            <h5 className="mt-4">React Life Cycle</h5>

            <ul className="d-flex justify-content-around mt-4">

              <li><a href=""><Link class="" to="/">Home</Link></a></li>
              <li><a href=""><Link class="" to="/mounting">Mounting</Link></a></li>
              <li><a href=""><Link class="" to="/updating">updating</Link></a></li>
              <li><a href=""><Link class="" to="/unmounting">unmounting</Link></a></li>
              
            </ul>
        </div>
    )
}

export default Headers
