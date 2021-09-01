import React from 'react'
import {NavLink} from 'react-router-dom'
import Modal from '../Modal/Modal'
import {NavWrapper} from './styles'
import {useState} from 'react'

const Navbar = () => {
  const [show, setShow] = useState(false)
  return (
    <NavWrapper className='navbar navbar-expand-lg bg-white sticky-top'>
      <div className='container-lg'>
        <NavLink to='/' className='navbar-brand'>
          <img
            src='https://res.cloudinary.com/ceenobi/image/upload/v1627861199/Gadgets/taskade-icon_fov9a1.svg'
            className='img-fluid logo'
            alt='logo'
          />
        </NavLink>
        <div className='collapse navbar-collapse justify-content-center'id='navbarNavAltMarkup'>
          <div className='navbar-nav'>
            <NavLink to='/' exact activeclassname='navbar__link--active' className='navbar__link px-5'>
              HOME
            </NavLink>
            <NavLink to='/shop' activeclassname='navbar__link--active' className='navbar__link px-5'>
              SHOP
            </NavLink>
            <NavLink to='/!' activeclassname='navbar__link--active' className='navbar__link px-5'>
              SUPPORT
            </NavLink>
          </div>
        </div>

        <i className='bi bi-search' onClick={()=>setShow(true)}/>
        <Modal onClose={()=>setShow(false)}show={show}/>

        <div className='d-lg-none d-block'>
          <i className='bi bi-list' data-bs-toggle='offcanvas' data-bs-target='#offcanvasRight'aria-controls='offcanvasRight'role="button"></i>
          <div className='offcanvas offcanvas-end'  id='offcanvasRight' aria-labelledby='offcanvasRightLabel'>
            <div className='offcanvas-header'>
              <div id='offcanvasRightLabel'>
                <img src='https://res.cloudinary.com/ceenobi/image/upload/v1627861199/Gadgets/taskade-icon_fov9a1.svg'
                  className='img-fluid logo'alt='logo'/>
              </div>
              <button type='button'className='btn-close text-reset' data-bs-dismiss='offcanvas'aria-label='Close'></button>
            </div>
            <div className='offcanvas-body'>
              <div className='d-flex flex-column align-items-center'>
                <NavLink to='/' exact activeclassname='navbar__link--active'className='navbar__link py-4 border-bottom fw-bold'>
                  Home
                </NavLink>
                <NavLink to='/shop' activeclassname='navbar__link--active' className='navbar__link py-4 border-bottom fw-bold'>
                  Shop
                </NavLink>
                <NavLink to='/!' activeclassname='navbar__link--active'className='navbar__link py-4 border-bottom fw-bold'>
                  Support
                </NavLink>
                <NavLink to='/!' activeclassname='navbar__link--active'className='navbar__link py-4 border-bottom fw-bold'>
                  Other
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </NavWrapper>
  )
}
 
export default Navbar;