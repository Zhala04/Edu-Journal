import React, { Component } from 'react'
import Navbar from './components/Navbar'
import './sass/app.scss'
export class App extends Component {
  render() {
    return (
      <>
      <Navbar/>
      <div className='table-con d-flex justify-content-center align-items-center'>
           <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">İsim</th>
            <th scope="col">Soyisim</th>
            <th scope="col">Not</th>
            <th style={{width:'100px'}} scope="col">Davranış notu</th>
            <th scope="col">Derse katılım</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Ali</td>
            <td>Ozturk</td>
            <td><input style={{width:'60px', borderRadius:'10px'}} type='number' min='0' max='100'></input></td>
            <td><input style={{width:'200px'}} type='text'></input></td>
            <td><input style={{width:'30px',height:'30px'}} type='checkbox'></input></td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Aynur</td>
            <td>Can</td>
            <td><input style={{width:'60px', borderRadius:'10px'}} type='number' min='0' max='100'></input></td>
            <td><input style={{width:'200px'}} type='text'></input></td>
            <td><input style={{width:'30px',height:'30px'}} type='checkbox'></input></td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Berna</td>
            <td>Akyol</td>
            <td><input style={{width:'60px', borderRadius:'10px'}} type='number' min='0' max='100'></input></td>
            <td><input style={{width:'200px'}} type='text'></input></td>
            <td><input style={{width:'30px',height:'30px'}} type='checkbox'></input></td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Cemal</td>
            <td>Yıldırım</td>
            <td><input style={{width:'60px', borderRadius:'10px'}} type='number' min='0' max='100'></input></td>
            <td><input style={{width:'200px'}} type='text'></input></td>
            <td><input style={{width:'30px',height:'30px'}} type='checkbox'></input></td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Demet</td>
            <td>Polat</td>
            <td><input style={{width:'60px', borderRadius:'10px'}} type='number' min='0' max='100'></input></td>
            <td><input style={{width:'200px'}} type='text'></input></td>
            <td><input style={{width:'30px',height:'30px'}} type='checkbox'></input></td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Esma</td>
            <td>Yavuz</td>
            <td><input style={{width:'60px', borderRadius:'10px'}} type='number' min='0' max='100'></input></td>
            <td><input style={{width:'200px'}} type='text'></input></td>
            <td><input style={{width:'30px',height:'30px'}} type='checkbox'></input></td>
          </tr>
          <tr>
            <th scope="row">7</th>
            <td>Gökhan</td>
            <td>Aslantaş</td>
            <td><input style={{width:'60px', borderRadius:'10px'}} type='number' min='0' max='100'></input></td>
            <td><input style={{width:'200px'}} type='text'></input></td>
            <td><input style={{width:'30px',height:'30px'}} type='checkbox'></input></td>
          </tr>
          <tr>
            <th scope="row">8</th>
            <td>Halil</td>
            <td>Karakaya</td>
            <td><input style={{width:'60px', borderRadius:'10px'}} type='number' min='0' max='100'></input></td>
            <td><input style={{width:'200px'}} type='text'></input></td>
            <td><input style={{width:'30px',height:'30px'}} type='checkbox'></input></td>
          </tr>
          <tr>
            <th scope="row">9</th>
            <td>Hatice</td>
            <td>Arslan</td>
            <td><input style={{width:'60px', borderRadius:'10px'}} type='number' min='0' max='100'></input></td>
            <td><input style={{width:'200px'}} type='text'></input></td>
            <td><input style={{width:'30px',height:'30px'}} type='checkbox'></input></td>
          </tr>
          <tr>
            <th scope="row">10</th>
            <td>Kenan</td>
            <td>Akbulut</td>
            <td><input style={{width:'60px', borderRadius:'10px'}} type='number' min='0' max='100'></input></td>
            <td><input style={{width:'200px'}} type='text'></input></td>
            <td><input style={{width:'30px',height:'30px'}} type='checkbox'></input></td>
          </tr>
        </tbody>
      </table>
      </div>
      </>
    )
  }
}

export default App
