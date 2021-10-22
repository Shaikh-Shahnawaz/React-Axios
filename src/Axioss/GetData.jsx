import React from 'react'

function GetData(props) {
    return (
        <div>
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
                            props.state.map((element,index)=>(
                                <tr>
                                <th scope="row">{index+1}</th>
                                <td>{element.first_name}</td>
                                <td>{element.last_name}</td>
                                <td>{element.email}</td>
                                <td><img  src={element.avatar} /></td>
                            </tr>
                            ))
                           
                        }

                       

                    </tbody>

                </table>
        </div>
    )
}

export default GetData
