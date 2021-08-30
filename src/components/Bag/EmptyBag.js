import React from 'react'
import {Link} from 'react-router-dom'

export default function EmptyBag() {
    return (
      <div className='container mt-5'>
        <div className='row'>
          <div className='text-center text-title'>
            <h1 className=''>Your bag is currently empty</h1>
            <p>Click <span className='text-reset'><Link to='/shop'>here</Link></span> to start adding items to your bag</p>
          </div>
        </div>
      </div>
    )
}
