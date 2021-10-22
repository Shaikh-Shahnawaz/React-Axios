import React from 'react'

function Mounting() {
    return (
        <div className="container bg-dark text-light mt-4 py-2">
            <h3 className="text-center p-2 mb-3" >Mounting in the React component lifecycle with hooks</h3>

            <p>We can take advantage of the <mark>useEffect</mark>  hook to achieve the same results as with the <mark> componentDidMount</mark> , <mark>componentDidUpdate</mark> and <mark>componentWillUnmount</mark> methods. </p>
            <p>useEffect accepts two parameters. The first one is a callback which runs after render, much like in componentDidMount. The second parameter is the effect dependency array. If you want to run it on mount and unmount only, pass an empty array [].</p>
            <p>To clean up, return the callback in useEffect:</p>

            <p>
                <code>
                    useEffect(
                         () =
                    document.addEventListener(“click”, someFunc);
    
                     return () =
                    document.removeEventListener(“click”, someFunc);
                    ;
                    ,
                    []
                    );
                </code>
            </p>

        </div>
    )
}

export default Mounting
