import './App.css';
import React, { useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShowData from './components/ShowData';
import Signup from './components/Register';
import bgImage from "./images/park-background.jpg";
import Signin from './components/Signin';
import leafImg from '../src/images/leaf.png';
import UpdatePerson from './components/UpdatePerson';


function App() {
    const [result, setResult] = useState([]);
    const [personID, setPersonID] =useState("");

    const fetchData = async()=>{
      const response = await fetch("http://localhost:5001/api/registrations");
      const data = await response.json();
      setResult(data);
    }
    useEffect(()=>{
      fetchData();
    })

    const addPerson = async(personData)=>{
      const response = await fetch("http://localhost:5001/api/registrations",{
        method: "POST",
        headers: {
          'Content-Type': "application/json; charset=utf-8"
        },
        body: JSON.stringify(personData)
      })
      const data = await response.json();
      console.log(data);
      // setResult([...result, personData]);
    }
    
    
    const updatePersonId = (user)=>{
      setPersonID(user);
      console.log(personID);
    }

    const updatePerson = async(person)=>{
      const response = await fetch(`http://localhost:5001/api/registrations/${personID}`, { 
        method: 'PUT',
        body: JSON.stringify(person) 
      });
      const data = await response.json();
      console.log(data);
    }

    const removePerson = async(user)=>{
      console.log(user);
      const response = await fetch(`http://localhost:5001/api/registrations/${user}`, { method: 'DELETE' });
      const data = await response.json();
      console.log(data);
    }

    return (
      <div className="App">
        <img src={bgImage} className='bgPark-img z-n1 position-absolute top-0 w-100' alt='bg-park-img' />
        <div className="set">
          <div><img src={leafImg} /></div>
          <div><img src={leafImg} /></div>
          <div><img src={leafImg} /></div>
          <div><img src={leafImg} /></div>
          <div><img src={leafImg} /></div>
          <div><img src={leafImg} /></div>
          <div><img src={leafImg} /></div>
          <div><img src={leafImg} /></div>
        </div>
        <Router>
          <Routes>
            {/* <Signin /> */}
            
            <Route path="/" element={<ShowData result={result} removePerson={removePerson} updatePersonId={updatePersonId}/>} />
            <Route path='/registerPerson' element={<Signup addPerson={addPerson} />}/>
            <Route path='/updatePerson' element={<UpdatePerson  personID={personID} updatePerson={updatePerson} />}/>
          </Routes>
        </Router>
      </div>
    );
  }
export default App;


