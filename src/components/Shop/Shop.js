import React, { Component } from 'react'
import ShopList from './ShopList'
import { ProductConsumer } from '../../Context'


export default class Shop extends Component {
    render() {
        return (
          <div className='container'>
              <ProductConsumer>
                {(value) => {
                  return value.products.map((product) => {
                    return <ShopList key={product.id} product={product} />
                  })
                }}
              </ProductConsumer>
            <p className='py-5 px-4'>
              <small>
                Testing conducted by Apple in April 2021 using preproduction
                Beats Studio Buds and Charging Case units and software paired
                with iPhone 11 Pro Max units and prerelease software. The
                playlist consisted of 358 unique audio tracks purchased from the
                iTunes Store (256-Kbps AAC encoding). Volume was set to 50% and
                Active Noise Cancellation and Transparency were turned off.
                Testing consisted of full Beats Studio Buds battery discharge
                while playing audio until the first Beats Studio Buds stopped
                playback. With Active Noise Cancellation turned on, listening
                time was up to 5 hours. Battery life depends on device settings,
                environment, usage, and many other factors.
              </small>
            </p>
          </div>
        )
    }
}
