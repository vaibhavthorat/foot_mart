import React from 'react'
import './Login.css';
import { Link } from 'react-router-dom';
export default function Login() {
   
 

    let LoginUser=()=>{
        
        this.props.username('vaibhav'); 
    }
  return (
   <>
    <div style={{border:'1px solid black'}} className='container'>
        <form>
            <h3 style={{textAlign:'center',color: '#ee6e73',fontSize:'20',fontWeight:'500'}}>Login</h3>
            <hr></hr>
            <div className='form-container'>
                <input type='text' placeholder='Enter User Name' ></input>
                <input placeholder='Enter Password'type='password'></input><br></br><br></br>
                <center><button className='btn btn-primary' onClick={LoginUser}>Login</button>&nbsp;&nbsp;&nbsp;
                <button className='btn btn-primary'>Clear</button>&nbsp;&nbsp;&nbsp;
                <Link to="/register" className='btn btn-primary'>Register</Link></center>
            </div>
        </form>
    </div>
   </>
  )
}
