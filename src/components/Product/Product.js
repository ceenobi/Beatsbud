import React, { Component } from 'react'
import { ProductConsumer } from '../../Context'
import {Link} from 'react-router-dom'
import { ProductWrapper } from './styles'
import {ButtonWrapper} from '../Button'
import Fade from 'react-reveal/Fade'

export default class Product extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value)=> {
                    const {image2, name, price, inBag, id,} = value.detailProduct
                    
                    return (
                      <ProductWrapper>
                        <Fade top cascade>
                        <div className='container'>
                          <p className='mt-5 mb-0 lead'>{name}</p>
                          <h1 className='text-uppercase'>select your style</h1>
                          <div className='row'>
                            <div className='col-10 mx-auto col-lg-4 col-md-6 col-sm-6 my-3 px-3'>
                              <div className='back'>
                                <img src={image2} alt='productcard' className='img-fluid'/>
                                {/* <div className="overcast">
                                <p>{color1}</p>
                                </div> */}
                                <div className='overlay'>
                                  <p className='lead text-center text-dark mb-0'>&#8358; {price}</p>                                 
                                  <ButtonWrapper disabled={inBag ? true : false}
                                    onClick={() => {value.addToBag(id);value.handleDetail(id)}}>
                                    {inBag ? (<p className='text-capitalize mb-0'disabled> 
                                        Added to bag</p>) : (<i className='bi bi-bag mx-1'> Add To Bag</i>)} 
                                  </ButtonWrapper>
                                </div>
                              </div>
                            </div>
                            {/* <div className='col-10 mx-auto col-lg-4 col-md-6 col-sm-6 my-3 px-3'>
                              <div className='back'>
                                <img src={image3} alt='productcard' className='img-fluid'/>
                                <div className='overcast'>
                                  <p className='text-white'>{color2}</p>
                                </div>
                                <div className='overlay'>
                                  <p className='lead text-center text-white mb-0'>
                                    &#8358; {price}
                                  </p>
                                  <ButtonWrapper
                                    disabled={inBag ? true : false}
                                    onClick={() => {value.addToBag(id);value.handleDetail(id)}}>
                                    {inBag ? (<p className='text-capitalize mb-0'disabled>Added to bag</p>) 
                                    : (<i class='bi bi-bag'> Add To Bag</i>)}
                                  </ButtonWrapper>
                                </div>
                              </div>
                            </div> */}

                            {/* <div className='col-10 mx-auto col-lg-4 col-md-6 col-sm-6 my-3 px-3'>
                              <div className='back'>
                                <img src={image4} alt='productcard' className='img-fluid'/>
                                <div className='overcast'>
                                  <p className='text-white'>{color3}</p>
                                </div>
                                <div className='overlay'>
                                  <p className='lead text-center text-white mb-0'>
                                    &#8358; {price}
                                  </p>
                                  <ButtonWrapper
                                    disabled={inBag ? true : false}
                                    onClick={() => {value.addToBag(id);value.handleDetail(id)}}>
                                    {inBag ? (<p className='text-capitalize mb-0'disabled>Added to bag</p>) 
                                    : (<i class='bi bi-bag'> Add To Bag</i>)}
                                  </ButtonWrapper>
                                </div>
                              </div>
                            </div> */}
                          </div>
                          <div className='py-5 d-flex justify-content-center'>
                            <Link to='/shop'>
                              <ButtonWrapper click>
                                back to products
                              </ButtonWrapper>
                            </Link>
                            <Link to='/bag'>
                              <button className='btn btn-outline-danger text-uppercase mb-3 px-2'>
                                goto bag
                                <i class='bi bi-bag-check-fill'></i>
                              </button>
                            </Link>
                          </div>
                        </div>
                        </Fade>
                      </ProductWrapper>
                    )
                }}               
            </ProductConsumer>
        )
    }
}
