
import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import {FooterWrapper} from './styles'

export default class Footer extends Component {
    render() {
        return (
     <FooterWrapper>
          <footer className="text-center text-lg-start bg-light text-muted py-2">

    <section>
    <div className="container text-center text-md-start mt-5">
    
      <div className="row mt-3">
       
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          
          <h6 className="text-uppercase fw-bold mb-4">
             <img src='https://res.cloudinary.com/ceenobi/image/upload/v1627861199/Gadgets/taskade-icon_fov9a1.svg' className='img-fluid logo' alt='logo'/>
          </h6>
        </div>
       

       
        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4">
         
          <h6 className="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <Link to='/'className="text-reset">special offers</Link>
          </p>
          <p>
            <Link to='/'className="text-reset">beats studio buds</Link>
          </p>
          <p>
            <Link to='/'className="text-reset">beats flex</Link>
          </p>
          <p>
            <Link to='/'className="text-reset">powerbeats</Link>
          </p>
           <p>
            <Link to='/'className="text-reset">powerbeats pro</Link>
          </p>
           <p>
            <Link to='/'className="text-reset">beats pill+</Link>
          </p>
        </div>
       

       
        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4">
         
          <h6 className="text-uppercase fw-bold mb-4">
            support
          </h6>
          <p>
            <Link to='/'className="text-reset">downloads</Link>
          </p>
          <p>
            <Link to='/'className="text-reset">product help</Link>
          </p>
          <p>
            <Link to='/'className="text-reset">service & warranty</Link>
          </p>
          <p>
            <Link to='/'className="text-reset">register your beats</Link>
          </p>
          <p>
            <Link to='/'className="text-reset">update your beats</Link>
          </p>
           <p>
            <Link to='/'className="text-reset">contact support</Link>
          </p>
        </div>
           
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
         
          <h6 className="text-uppercase fw-bold mb-4">
            Company
          </h6>
          <p> <Link to='/'className="text-reset">About</Link></p>
          <p>
             <Link to='/'className="text-reset">Press</Link>
          </p>
          <p> <Link to='/'className="text-reset">careers</Link></p>
         
         <div className="mb-4 mb-md-0">
              <h6 className="text-uppercase fw-bold mb-4">follow us</h6>
          <div className="mb-0">
              <i className="bi bi-facebook px-2"></i>
             <i className="bi bi-twitter px-2"></i>
             <i className="bi bi-instagram px-2"></i>
             <i className="bi bi-youtube px-2"></i>
          </div>  

         </div>
              
        </div>      
      </div>
    
    </div>
  </section>
  
  <div className="text-center p-4">
    © 2021 Copyright:
    <a className="text-reset fw-bold" href="https://github.com/">{' '}ceenobi.com</a>
  </div>

</footer>


     </FooterWrapper>               
  
            
                
          
        )
    }
}
