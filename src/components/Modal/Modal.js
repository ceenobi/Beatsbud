import React from 'react'
import {ModalWrapper} from './styles'


const Modal = props => {
  if (!props.show) {
    return null
  }
  
  return (
    <ModalWrapper>
        <div className='modal' onClick={props.onClose}>
          <div className='modal-content' onClick={(e) => e.stopPropagation()}>
            <div className='modal-header'>
              <h4 className='modal-title'>What are you looking for?</h4>
              <i className='bi bi-x' onClick={props.onClose} />
            </div>
            <div className='modal-body'>
              <div className='form-outline'>
                <input
                  type='search'
                  id='form1'
                  className='form-control'
                  placeholder='Search Beats'
                  aria-label='Search'
                />
              </div>
            </div>
          </div>
        </div>
    </ModalWrapper>   

  )   
}
 
export default Modal;