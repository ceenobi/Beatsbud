import React from 'react'
import {ProductConsumer} from '../../Context'
import BagColumns from './BagColumns'
import BagList from './BagList'
import BagTotal from './BagTotal'
import EmptyBag from './EmptyBag'

export default function Cart() {
    return (
        <section>
            <ProductConsumer>
                {value=> {
                    const {bag} = value
                    if (bag.length > 0) {
                        return (
                            <> 
                            <BagTotal value={value}/>                      
                            <BagColumns/>
                            <BagList value={value}/>
                            </>
                        )
                    }else {
                        return <EmptyBag/>
                    }
                }}
            </ProductConsumer>
            
        </section>
    )
}
