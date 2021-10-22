import axios from 'axios'
import React, { useEffect, useState } from 'react'
import GetData from './GetData'
function AxiosGetApi() {

    const [state, setState] = useState([])
    // const [newData, setNewData] = useState([])

    // console.log("inside new data state",newData)

    const url = "https://reqres.in/api/users?page=2"


    function getData() {

        // ===================== [ Axios ] =================

        axios.get(url).then((data) => {
            let data1 = data.data
            console.log(data1.data)

            setState(data1.data)

        }).catch((error) => {
            console.log("Error Occured", error)
        })



        // ===================== [ fetch api ] =================

        // fetch(url).then((response) => {
        //     return response.json()
        // }).then((data) => {

        //     let myData = data.data
        //     setState(myData)

        // })

    }


    // useEffect(() => {

    //     fetch(url).then((response) => {
    //         return response.json()
    //     }).then((data) => {

    //         let myData = data.data
    //         console.log("get data",myData)
    //         setState(myData)

    //     })

    // }, [])


    function addData() {

        const userData = {
            "first_name": (Math.random() + 1).toString(36).substring(7),
            "last_name": (Math.random() + 1).toString(36).substring(7),
            "email": (Math.random() + 1).toString(36).substring(7),
            "avatar": 'https://source.unsplash.com/random'
        }

        axios.post('https://reqres.in/api/users?page=2', userData).then((data) => {

            console.log("data added", data.data)
            setState([
                ...state , data.data])

        }).catch((error) => {
            console.log(error)
        })


    }




    return (
        <>
            <div className="container text-light py-5 text-center">

                <h1>Axios Get Request</h1>
                <table class="table table-hover bg-light">
                    <thead className="bg-warning">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Avatar</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            state.map((element, index) => (
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{element.first_name}</td>
                                    <td>{element.last_name}</td>
                                    <td>{element.email}</td>
                                    <td><img height={100} width={150} src={element.avatar} /></td>
                                </tr>
                            ))

                        }

                    </tbody>

                </table>
                <button onClick={getData} className=" mt-3 btn btn-outline-warning col-md-4 " >Get Data</button>
                <button onClick={addData} className=" mt-3 btn btn-warning col-md-4 offset-1" >Add Data</button>

                {/* ======== showing data using props ======== */}
                {/* <GetData data={state} /> */}



            </div>
        </>
    )
}

export default AxiosGetApi
