import React from 'react';
import { Link } from 'react-router-dom';


export default function ShowData({result, removePerson, updatePersonId}) {
  return (
    <div className='container show-data  px-3 pt-4'>
        <Link to="/registerPerson"><button className='btn btn-outline btn-outline-primary me-2'>Add</button></Link>

        <table className='table'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Gender</th>
                    <th>DOB</th>
                    <th>Contact</th>
                    <th>Address</th>
                    <th>Delete</th>
                    {/* <th>Colour</th>  */}
                </tr>
            </thead>
            <tbody>
                {result.map((item,index) => {
                    return <tr key={index}>
                                <td>{item.fullName}</td>
                                <td>{item.email}</td>
                                <td>{item.password}</td>
                                <td>{item.gender}</td>
                                <td>{item.dob}</td>
                                <td>{item.contact}</td>
                                <td>{item.address}, {item.state}, {item.zip}</td>
                                <td onClick={()=>removePerson(item._id)}>
                                    <span className='remove-user bg-danger text-white btn px-2 py-0' title='Delete user'>X</span>
                                </td>
                                <td onClick={()=>updatePersonId(item._id)}>
                                    <Link to="/updatePerson"><span className='remove-user bg-info text-white btn px-2 py-0' title='Update user'>+</span></Link>
                                </td>
                                {/* <td>{item.profilePic}</td>
                                <td>{item.colour}</td> */}
                            </tr>
                })}
            </tbody>
        </table>
    </div>
  )
}
