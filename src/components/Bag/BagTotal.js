import React from 'react'
import { Link } from 'react-router-dom'

export default function BagTotal({value}) {
    const { bagSubTotal, bagTax, bagTotal, clearBag} = value
    return (
      <>
        <div className='container py-5'>
          <div className='d-flex flex-column'>
            <div className='text-center'>             
              <h5>
                  <span className="text-title">
                      subtotal :
                  </span>
                  <strong>&#8358; {bagSubTotal}</strong>
              </h5>
              <h5>
                  <span className="text-title">
                      Tax :
                  </span>
                  <strong>&#8358; {bagTax}</strong>
              </h5>
              <h5>
                  <span className="text-title">
                     Your bag total is:
                  </span>
                  <strong>&#8358; {bagTotal}</strong>
              </h5>
               <Link to='/shop'>
                <button className='btn btn-outline-danger text-uppercase mb-3 px-5' type='button'onClick={() => clearBag()}>
                    clear bag
                </button>
              </Link>
            </div>
          </div>
        </div>
      </>
    )
}
