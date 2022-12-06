import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
// import '../../App.css'

const LoginPage = props => {
    let navigate=useNavigate();
    const [username,setUsername]=useState();
    const [password,setPassword]=useState();
    const [err,setErr]=useState('');
    const formSubmit=(e)=>{
        e.preventDefault()
        if(!username || !password) setErr('Lütfen email ve şifrenizi giriniz');
        else{
           navigate('/main')
        }
    }
  return (
    <div className='loginMain d-flex flex-column align-items-center'>
      <h1 style={{marginTop:'140px',color:'#157487'}}><b>Edu-Journal</b>'a Hoşgeldiniz!</h1>
        <form onSubmit={formSubmit} className='d-flex flex-column align-items-center justify-content-center'>
            <label><b>Email</b></label>
            <input onChange={(e)=>{setUsername(e.target.value)}} className='mb-3 mt-2' type='email' placeholder="Lütfen email'inizi giriniz"></input>
            <label><b>Şifre</b></label>
            <input onChange={(e)=>{setPassword(e.target.value)}} className='mt-2' type='password' placeholder="Lütfen şifrenizi giriniz"></input>
            <button type='submit' className='btn btn-danger mt-3'>Giriş yap</button>
         {err && (
          <p className="text-center alert alert-danger mt-3">{err}</p>
        )}
        </form>
    </div>
   
  )
}

export default LoginPage