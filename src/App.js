
import React, { useState, useEffect } from 'react'
import data from './data'
import List from './list'
import 'font-awesome/css/font-awesome.min.css';
import { v4 as uuidv4 } from 'uuid';
function App() {
  let init;
  if (localStorage.getItem("saved") === null) {
  init=data;
  }
  else {
    init = JSON.parse(localStorage.getItem("saved"));
  }
  const [appointments, setAppointments] = useState(init);
  const [name, setName] = useState("");
  const [time, setime] = useState("")
  
  function handleAdd() {
    const newList = appointments.concat({ name,time, id: uuidv4() });
    setAppointments(newList);
    localStorage.setItem("saved", JSON.stringify(newList));
    
  }
 
  const submit = (e) => {
    e.preventDefault();
    if (!name || !time) {
        alert("enter values");
    }
    else {
        handleAdd(name, time);
        setName("");
        setime("");
    }

}
function handledelete(){
  let newList=[];
  setAppointments([]);
  localStorage.setItem("saved", JSON.stringify(newList));
}
  return (
    <div className="App"> 
     <nav class="navbar navbar-light bg-light">
  <a class="navbar-brand" href="#">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar" viewBox="0 0 16 16">
  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
</svg>
<span>&nbsp;</span> Appointments List
  </a>
</nav>
      <section className='container'>
        <h3>{appointments.length} Appointments today</h3>
        <List appointments={appointments} />
        <button onClick={handledelete}>clear all</button>
      </section>
      
      <div className="container my-3">
            <h3>Enter Appointments</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Enter name of person</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Enter time in AM/PM</label>
                    <input type="text" value={time} onChange={(e) => setime(e.target.value)} className="form-control" id="desc" />
                </div>
                <button type="submit" className="btn btn-sm btn-success">Add</button>
            </form>
        </div>

    </div>
  );
}

export default App;
