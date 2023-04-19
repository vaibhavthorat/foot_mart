import React from 'react'
import './Register.css';

export default function Register() {
  return (
   <>
   <div style={{border:'1px solid black'}} className='container'>
        <form>
            <h3 style={{textAlign:'center',color: '#ee6e73',fontSize:'20',fontWeight:'500'}}>Register</h3>
            <hr></hr>
            <div className='regiser-container'>
                <input type='text' placeholder='First Name'></input>
                <input type='text' placeholder='Middle Name'></input>
                <input type='text' placeholder='Last Name'></input>
                <input type='text' placeholder='Email Address'></input>
                <input type='text' placeholder='Mobile No'></input>
                <input type='text' placeholder='Area Pin Code'></input>
                
            </div>
                <center><button className='btn btn-primary'>Register</button>&nbsp;&nbsp;&nbsp;
                <button className='btn btn-primary'>Clear</button></center>
                <br></br><br></br><br></br>
        </form>
    </div>
   </>
  )
}
