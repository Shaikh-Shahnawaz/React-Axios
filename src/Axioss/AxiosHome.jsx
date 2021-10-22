import React from 'react'
import { Link } from "react-router-dom";
function AxiosHome() {
    return (
        <div>
            <div class="container jumbotron text-light mt-5 p-3 text-center">

                <h1 class="display-4">Axios Api</h1>
                <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr class="my-4" />
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <p class="lead">
                     {/* <a class="nav-link active"  href="#"> </a> */}
                    <a class="btn btn-outline-warning btn-sm mx-3" href="#" role="button"><Link to="/get">Get Request</Link></a>
                    <a class="btn btn-warning btn-sm" href="#" role="button"><Link  to="/post">Post Request</Link></a>
                </p>
            </div>
        </div>
    )
}

export default AxiosHome
