import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';


export default function Register({addPerson}) {
  const navigate = useNavigate();
  const dataClean = {
      fullName: "",
      email: "",
      password: "",
      gender: "",
      dob: "",
      address: "",
      state: "",
      zip: "",
      contact: "",
      colour: "",
      profilePic: "",
      iagree: ""
  }
  const [person, setPerson] = useState(dataClean);
  
  const handleResult = (e)=>{
      e.preventDefault();
      addPerson(person);
      setPerson(dataClean);
      navigate("/");
  }


  return (
    <div className='signup-page container mt-4 px-5 py-4'>
        <h2 className='text-center my-3'>Add person</h2>

        <form onSubmit={handleResult} className='form mt-5'>
            <div className='row mx-0'>
                <div className="fullName-field col-12 col-md-6 mb-3">
                    <div className='row'>
                        <div className='col-3'>
                            <label for="fullName" class="form-label">Full Name:<span className='text-danger'>*</span></label>
                        </div>
                        {/* regex (allowing Alphabets, Dots, Spaces) */}
                        <div className='col col-md-7'>
                            <input type="text" value={person.fullName} id='fullName'
                            onChange={(e)=> setPerson({...person,fullName: e.target.value})} 
                            className='form-control' pattern="^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$" required/>   
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='row mx-0'>
                <div className="email-field col-12 col-md-6 mb-3">
                    <div className='row'>
                        <div className='col-3'>
                            <label for="email" class="form-label">Email:<span className='text-danger'>*</span></label>
                        </div>
                        <div className='col col-md-7'>
                            <input type="email" value={person.email} id='email'
                            onChange={(e)=> setPerson({...person,email: e.target.value})} className='form-control' required/>
                        </div>
                    </div>
                </div>

                <div className="password-field col-12 col-md-6 mb-3">
                    <div className='row'>
                        <div className='col-3'>
                            <label for="password" class="form-label">Password:<span className='text-danger'>*</span></label>
                        </div>
                        <div className='col col-md-7'>
                            <input type="password" value={person.password} id='password'
                            onChange={(e)=> setPerson({...person,password: e.target.value})} className='form-control' required/>
                        </div>
                    </div>
                </div>
            </div>

            <div className='row mx-0'>
                <div className="gender-field col-12 col-md-6 mb-3">
                    <div className='row'>
                        <div className='col-3'>
                            <lable for="gender-data">Gender:<span className='text-danger'>*</span></lable>
                        </div>
                        <div className='col col-md-7' onChange={(e)=> setPerson({...person,gender: e.target.value})} id='gender-data'>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="gender" id="male" value="male" required/>
                                <label class="form-check-label" for="male">
                                    Male
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="gender" id="female" value="female" required/>
                                <label class="form-check-label" for="female">
                                    Female
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dob-field col-12 col-md-6 mb-3">
                    <div className='row'>
                        <div className='col-3'>
                            <lable for="dob">DOB: </lable>
                        </div>
                        <div className='col col-md-7'>
                        <input type="date" name="dob" value={person.dob} className='form-control'
                        onChange={(e)=> setPerson({...person, dob: e.target.value})}/>
                        </div>
                    </div>
                </div>
            </div>

            <div className='row mx-0'>
                <div className="address-field  col-12 col-md-6 mb-3">
                    <div className='row'>
                        <div className='col-3'>
                            <label for="address" class="form-label">Address:<span className='text-danger'>*</span></label>
                        </div>
                        <div className='col col-md-7'>
                            <input type="text" value={person.address} id='address'
                            onChange={(e)=> setPerson({...person, address:e.target.value})} 
                            className='form-control' required/>
                        </div>
                    </div>
                </div>

                <div className="city-field col-12 col-md-6 mb-3">
                    <div className='row'>
                        <div className='col-3'>
                            
                        </div>
                        <div className='col col-md-7'>
                        </div>
                    </div>
                </div>
                
                <div className="state-field col-12 col-md-6 mb-3">
                    <div className='row'>
                        <div className='col-3'>
                            <lable for="state">State:</lable>
                        </div>
                        <div className='col col-md-7'>
                            <select id="state" onChange={(e)=> setPerson({...person,state: e.target.value})} 
                            className='form-select'>
                                <option hidden>--select--</option>
                                <option value="Bihar">Bihar</option>
                                <option value="Uttar Pradesh">Uttar Pradesh</option>
                                <option value="New Delhi">New Delhi</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="zip-field col-12 col-md-6 mb-3">
                    <div className='row'>
                        <div className='col-3'>
                            <label for="zip" class="form-label">Zip:<span className='text-danger'>*</span></label>
                        </div>
                        {/* regex (allowing numbers of length 6 only) */}
                        <div className='col col-md-7'>
                            <input type="text" value={person.zip} id='zip'
                            onChange={(e)=> setPerson({...person,zip: e.target.value})} 
                            className='form-control' pattern="^[0-9]{6}$" required/>
                        </div>
                    </div>
                </div>
            </div>

            <div className='row mx-0'>
                <div className="contact-field col-12 col-md-6 mb-3">
                    <div className='row'>
                        <div className='col-3'>
                            <label for="contact" class="form-label">Contact:<span className='text-danger'>*</span></label>
                        </div>
                        {/* regex (allowing numbers of length 10 only) */}
                        <div className='col col-md-7'>
                            <input type="tel" value={person.contact} id='contact'
                            onChange={(e)=> setPerson({...person,contact: e.target.value})}
                            className='form-control'  pattern="^[0-9]{10}$" required/>
                        </div>
                    </div>
                </div>

                <div className="profilePic-field col-12 col-md-6 mb-3">
                    <div className='row'>
                        <div className='col-3'>
                            <lable for="profilePic" className="form-label">Image: </lable>
                        </div>
                        <div className='col col-md-7'>
                            <input type="file" className="form-control" accept=".jpg, .png"
                            id="profilePic" value={person.profilePic} title="Choose profile pic"
                            onChange={(e)=> setPerson({...person, profilePic: e.target.value})}/>
                        </div>
                    </div>
                    {/* <div className='col-4'>
                        <img src={person.profilePic} alt='avatar' />
                    </div> */}
                </div>
            </div>
            <div className="agree-field form-check mb-3">
                <input className="form-check-input" type="checkbox" value={!person.iagree} id="iagree"
                onClick={(e)=> setPerson({...person, iagree: e.target.value})} />
                <label className="form-check-label" for="iagree">
                    I agree to terms & condition. <span className='text-danger'>*</span>
                </label>
            </div>
            
            <div className="d-flex justify-content-center mx-0 mb-3">
                <button type='submit' className='btn btn-success me-3 '>Add</button>
                <button type="reset" className="btn btn-danger ">Cancel</button>
            </div>     
        </form>
    </div>
  )
}

{/* <div className='border px-3 py-4'>
            Full Name: {person.fullName}<br/>
            Email: {person.email}<br/>
            Password: {person.password}<br/>
            Gender: {person.gender}<br/>
            DOB: {person.dob}<br/>
            Address: {person.fullAddress.address}<br/>
            City: {person.fullAddress.city}<br/>
            State: {person.fullAddress.state}<br/>
            ZIP: {person.fullAddress.zip}<br/>
            Contact: {person.contact}<br/>
            Colour: {person.colour}<br/>
            Image: {person.profilePic}<br/>
            Agree: {person.iagree}
            </div>             */}
{/* <div className="colour-field row mx-0 mb-3">
                <div className='col-3'>
                    <lable for="colour" class="form-label">Colour: </lable>
                </div>
                <div className='col-auto'>
                    <input type="color" class="form-control form-control-color" 
                    id="colour" value={person.colour} title="Choose your color"
                    onChange={(e)=> setPerson({...person, colour: e.target.value})}/>
                </div>
            </div> */}