import React, { useState } from 'react'
import Navbar from './Navbar'

const Viewall = () => {
    const [data,changeData]=useState(
        [
            {
            
              "_id": "6665dd357f96fb262b8dd5a6",
              "name": "Ramesh",
              "friendName": "Tovino",
              "friendNickName": "TT",
              "DescribeYourFriend": "Test desc",
              "__v": 0
            }
        ]   
    )
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Name</th>
      <th scope="col">friend Name:</th>
      <th scope="col">Friend Nick Name</th>
      <th scope="col">describe</th>
      <th scope="col">--v</th>
    </tr>
  </thead>
  <tbody>
    {
    data.map(
        (value,index)=>{
            return <tr>
            <td>{value._id}</td>
            <td>{value.name}</td>
            <td>{value.friendName}</td>
            <td>{value.friendNickName}</td>
            <td>{value.DescribeYourFriend}</td>
            <td>{value.__v}</td>
          </tr>
         
        }
    )
}
    
  </tbody>
</table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Viewall