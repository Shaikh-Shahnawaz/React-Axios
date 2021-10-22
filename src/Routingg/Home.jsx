import React from 'react'
import { Link } from "react-router-dom";
function Home() {
    return (
        <div className="container py-3">
            <div class="jumbotron  mt-5 p-3 text-center bg-light">

                <h1 class="display-5">React Life Cycle - Functional Based Components</h1>
                <p class="lead">There are three phases in React Component Life-Cycle </p>
                <hr class="my-4" />

                <div className="">

                <p><strong>Mounting :</strong> that is putting inserting elements into the DOM.  <a href="#" ><Link class="" to="/mounting">Read More..</Link></a></p> 
                <p><strong>Updating :</strong> which involves methods for updating components in the DOM. <a  href="#" ><Link class="" to="/updating">Read More..</Link></a></p>
                <p><strong>Unmounting :</strong> that is removing a component from the DOM.  <a  href="#" ><Link class="" to="/unmounting">Read More..</Link></a></p>
                
                </div>

                <p class="lead">
                 
                 
                </p>
            </div>

        </div>
    )
}

export default Home
