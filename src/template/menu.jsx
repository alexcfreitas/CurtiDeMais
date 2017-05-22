import React from 'react'

export default props => (
  <nav className='header'>
      <div className='container'>
          <div className='navbar-header'>
              <a className='navbar-brand' href='#'>
                  <span className="logo"><i className='icon-like'></i> CurtiDeMais!!</span>
              </a>
          </div>
          <div id='navbar' className='navbar-collapse collapse'>
              <ul className="nav navbar-nav">
                  <li><a href='#/curtir'>Curtir</a></li>
                  <li><a href='#/about'>Sobre</a></li>
              </ul>
          </div>
      </div>
  </nav>

)
