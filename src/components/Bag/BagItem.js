import React from 'react'

export default function BagItem({item, value}) {
    const {id,name,image5, price, total , count} = item;
    const {increment, decrement, removeItem} = value;
   
    return (
        
        <div className='row my-2 text-capitalize text-center border-bottom'>
            <div className="col-10 mx-auto col-lg-2">
                <img src={image5} style={{width:"5rem", height:"5rem"}} className="img-fluid" alt='product'/>
            </div>
             <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">product:</span> {name}
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">price:</span> {price}
            </div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="justify-content-center">
                    <div>
                        <span className="btn btn-black mx-1"onClick={()=>decrement(id)}>-</span>
                        <span className="btn btn-black mx-1">{count}</span>
                        <span className="btn btn-black mx-1"onClick={()=>increment(id)}>+</span>
                    </div>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2" onClick={()=>removeItem(id)}>
                <div className="cart-icon">
                   <i class="bi bi-trash-fill"></i>
                    </div>  
            </div>
             <div className="col-10 mx-auto col-lg-2">
                <strong>item total: &#8358;{total} </strong>  
            </div>    
        </div>
    ) 
     
}
