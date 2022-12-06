import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
  render() {
    return (
      <div>
          <nav className="navbar navbar-expand-lg navbar-light ">
        <Link to='/main'><a style={{color:'#157487'}} className="ms-4 navbar-brand" href="#"><b>Edu-Journal</b></a></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item active">
              <Link to='/haberler'><a className='px-3' href="#">Haberler</a></Link>
            </li>
            <li className="nav-item">
              <a className="" href="#">İletişim</a>
            </li>
            
          
          </ul>
          <form className="form-inline my-2 my-lg-0 d-flex">
            <input className="form-control mr-sm-2 me-2" type="search" placeholder="Ara" aria-label="Search" />
            <button className="btn btn-outline-primary my-2 my-sm-0 me-4" type="submit">Ara</button>
          </form>
        </div>
      </nav>
      </div>
    )
  }
}

export default Navbar