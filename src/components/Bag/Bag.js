import React from 'react'
import {ProductConsumer} from '../../Context'
import BagColumns from './BagColumns'
import BagList from './BagList'
import BagTotal from './BagTotal'
import EmptyBag from './EmptyBag'

export default function Cart() {
    return (
        <section className="py-2">
            <ProductConsumer>
                {value=> {
                    const {bag} = value
                    if (bag.length > 0) {
                        return (
                            <React.Fragment> 
                            <BagTotal value={value}/>                      
                            <BagColumns/>
                            <BagList value={value}/>
                            </React.Fragment>
                        )
                    }else {
                        return <EmptyBag/>
                    }
                }}
            </ProductConsumer>
            
        </section>
    )
}
