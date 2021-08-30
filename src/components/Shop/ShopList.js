import React, { Component } from 'react'
import { Link } from 'react-router-dom'
 import { ProductConsumer } from '../../Context.js'
 import {ShopWrapper} from './styles.js'
 import { ButtonWrapper } from '../Button.js'
 import Fade from 'react-reveal/Fade'

export default class ShopList extends Component {
    render() {
        const {title, name, header, image, price, feat1, feat2, feat3, feat4, id} = this.props.product
        return (
          <ShopWrapper>
            <ProductConsumer>
              {(value) => (
                <Fade bottom cascade>
                  <div>
                    <h1 className='py-5 px-5 text-center display-4'>{title}</h1>
                    <div className='d-lg-flex flex-row-reverse py-5 px-3 border-bottom'>
                      <div className='px-lg-5'>
                        <img src={image} className='img-fluid' alt='pic' />
                      </div>
                      <div className='px-lg-4 mt-5'>
                        <h5 className='fw-bold'>
                          <span>New </span>&#8226; {name}
                        </h5>
                        <h3 className='mb-4 p-2'>{header}</h3>
                        <p className='mb-2'>&#8226; {feat1}</p>
                        <p className='mb-2'>&#8226; {feat2}</p>
                        <p className='mb-2'>&#8226; {feat3}</p>
                        <p className='mb-2'>&#8226; {feat4}</p>
                        <p className='fw-bold mb-4 lead'>&#8358; {price}</p>
                        <Link to='/!' className='mx-1'>
                          <ButtonWrapper>LEARN MORE</ButtonWrapper>
                        </Link>
                        <Link to='/product'>
                          <ButtonWrapper
                            click
                            className=''
                            onClick={() => value.handleDetail(id)}
                          >
                            BUY NOW
                          </ButtonWrapper>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Fade>
              )}
            </ProductConsumer>
          </ShopWrapper>
        )
    }
}
