import axios from 'axios'
import React, { useState } from 'react'



function AxiosPostApi() {

    
    // const url = "https://jsonplaceholder.typicode.com/posts"
    const url = "https://reqres.in/api/users?page=2"
    
    let [postData, setPostData] = useState([])

    const [input, setInput] = useState({
        fname: "",
        lname: "",
        mobile: 0,
        email: ""
    })


    function handleChange(event) {

        setInput({
            ...input, [event.target.name]: event.target.value
        })

    }

    function postRequest() {

        axios.post(url, input).then((data) => {

            let myData = data.data
            postData.push(myData)
            setPostData([
                ...postData
            ])
            

        }).catch((error) => {

            console.log("Error Occured",error)
        })

      

    }

    return (
        <>
            <h1 className="text-light mt-3 text-center">Axios Post Request</h1>

            <div className="container col-md-6 text-warning">


                <div className="row">

                    <div class="form-group col-md-6 ">
                        <label for="exampleInputEmail1">First Name</label>
                        <input name="fname" onChange={handleChange} type="text" class="form-control" id="exampleInputEmail1" placeholder="Enter first name" />

                    </div>

                    <div class="form-group col-md-6">

                        <label for="exampleInputEmail1">Last Name</label>
                        <input name="lname" onChange={handleChange} type="text" class="form-control" id="exampleInputEmail1" placeholder="Enter last name" />

                    </div>

                </div>

                <div className="row mt-3">

                    <div class="form-group col-md-6">
                        <label for="exampleInputEmail1">Mobile Number</label>
                        <input name="mobile" onChange={handleChange} type="tel" class="form-control" id="exampleInputEmail1" placeholder="Enter mobile number" />

                    </div>

                    <div class="form-group col-md-6">
                        <label for="exampleInputEmail1">Email address</label>
                        <input name="email" onChange={handleChange} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>

                </div>



                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>

               

                <button type="submit" onClick={postRequest} class="btn btn-warning offset-3 col-md-6 mt-4">Submit</button>


            </div>

            <div className="container mt-5 bg-light px-5 py-4">
                <h2 className="text-center py-2">Fetching Post Data</h2>
                <table class="table table-hover bg-light">
                    <thead className="bg-warning">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Mobile Number</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>

                        {

                               postData.map((element, index) => (
                                    <tr>
                                        <th scope="row">{index + 1}</th>
                                        <td>{element.fname}</td>
                                        <td>{element.lname}</td>
                                        <td>{element.mobile}</td>
                                        <td>{element.email}</td>
                                    </tr>
                                ))
                              
                            // <tr>
                            //     <th scope="row">{1}</th>
                            //     <td>{postData.fname}</td>
                            //     <td>{postData.lname}</td>
                            //     <td>{postData.mobile}</td>
                            //     <td>{postData.email}</td>
                            // </tr>


                        }



                    </tbody>

                </table>
            </div>

        </>
    )
}

export default AxiosPostApi
