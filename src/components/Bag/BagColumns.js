import React from 'react'

export default function BagColumns() {
    return (
      <div className='container text-center mt-5 d-none d-lg-block'>
        <div className='row'>
          <div className='col-10 col-lg-2  mx-auto'>
            <p className='text-uppercase'>products</p>
          </div>
          <div className='col-10 col-lg-2  mx-auto'>
            <p className='text-uppercase'>description</p>
          </div>
          <div className='col-10 col-lg-2  mx-auto'>
            <p className='text-uppercase'>price</p>
          </div>
          <div className='col-10 col-lg-2  mx-auto'>
            <p className='text-uppercase'>quantity</p>
          </div>
          <div className='col-10 col-lg-2  mx-auto'>
            <p className='text-uppercase'>remove</p>
          </div>
          <div className='col-10 col-lg-2  mx-auto'>
            <p className='text-uppercase'>total</p>
          </div>
        </div>
      </div>
    )
}
