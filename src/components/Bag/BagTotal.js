import React from 'react'
import { Link } from 'react-router-dom'
import PaypalButton from './PaypalButton'

export default function BagTotal({value, history}) {
    const { bagSubTotal, bagTax, bagTotal, clearBag} = value
    return (
      <>
        <div className='container py-5'>
          <div className='d-flex flex-column'>
            <div className='text-center'>             
              <h5>
                  <span className="text-title">
                      subtotal:
                  </span>
                  <strong>&#8358;{bagSubTotal}</strong>
              </h5>
              <h5>
                  <span className="text-title">
                      Tax:
                  </span>
                  <strong>&#8358;{bagTax}</strong>
              </h5>
              <h5>
                  <span className="text-title">
                     Your bag total:
                  </span>
                  <strong>&#8358;{bagTotal}</strong>
              </h5>
              <PaypalButton total={bagTotal} clearBag={clearBag} history={history}/> 
               <Link to='/shop'>
                <button className='btn btn-outline-danger text-uppercase mb-3 px-5 mt-4' type='button'onClick={() => clearBag()}>
                    clear bag
                </button>
              </Link>
            </div>
          </div>
        </div>
      </>
    )
}
