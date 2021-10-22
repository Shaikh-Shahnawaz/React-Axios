import React from 'react'

function Unmounting() {
    return (

        <div className="container bg-dark text-light mt-4 py-2">
            <h1 className="text-center  p-2 mb-3" >UnMounting</h1>
            <p>
                You can also use  <mark>useState</mark>   instead of  <mark>this.state</mark>   in class components. Instead of:
            </p>
            <p>
                <code>
                    this.state =
                    counter: 0,
                    usersList: [],

                </code>
            </p>

            <p>You can do that:</p>

            <p>

                <code>
                    const [counter, setCounter] = useState(0);
                    const [usersList, setUsersList] = useState([]);
                </code>


            </p>


            <p>As you can, it is possible to use hooks to achieve similar or the same end results.</p>
        </div>
    )
}

export default Unmounting
