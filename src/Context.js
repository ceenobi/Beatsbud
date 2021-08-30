import React, { Component } from 'react'
import { storeProducts, detailProduct } from './data'
const ProductContext = React.createContext()

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
    bag: [],
    bagSubTotal: 0,
    bagTax: 0,
    bagTotal: 0,
  }
  componentDidMount() {
    this.setProducts()
  }
  setProducts = () => {
    let Products = []
    storeProducts.forEach((item) => {
      const singleItem = { ...item }
      Products = [...Products, singleItem]
    })
    this.setState(() => {
      return { products: Products }
    })
  }
  getItem = (id) => {
    const product = this.state.products.find((item) => item.id === id)
    return product
  }
  handleDetail = (id) => {
    const product = this.getItem(id)
    this.setState(() => {
      return { detailProduct: product }
    })
  }
  handleColor = (id) => {
    const product = this.getItem(id)
    this.setState(() => {
      return { detailProduct: product }
    })
  }

  addToBag = (id) => {
    let Products = [...this.state.products]
    const index = Products.indexOf(this.getItem(id))
    const product = Products[index]
    product.inBag = true
    product.count = 1
    const price = product.price
    product.total = price

    this.setState(
      () => {
        return { products: Products, bag: [...this.state.bag, product] }
      },
      () => {
        this.addTotal()
      }
    )
  }

  increment = (id) => {
    let tempCart = [...this.state.bag]
    const selectProduct = tempCart.find((item) => item.id === id)

    const index = tempCart.indexOf(selectProduct)
    const product = tempCart[index]

    product.count = product.count + 1
    product.total = product.count * product.price

    this.setState(
      () => {
        return { bag: [...tempCart] }
      },
      () => {
        this.addTotal()
      }
    )
  }

  decrement = (id) => {
    let tempCart = [...this.state.bag]
    const selectProduct = tempCart.find((item) => item.id === id)
    const index = tempCart.indexOf(selectProduct)
    const product = tempCart[index]

    product.count = product.count - 1
    if (product.count === 0) {
      this.removeItem(id)
    } else {
      product.total = product.count * product.price
      this.setState(
        () => {
          return {
            bag: [...tempCart],
          }
        },
        () => {
          this.addTotal()
        }
      )
    }
  }

  removeItem = (id) => {
    let tempProduct = [...this.state.products]
    let tempCart = [...this.state.bag]
    tempCart = tempCart.filter((item) => item.id !== id)
    const index = tempProduct.indexOf(this.getItem(id))
    let removedProduct = tempProduct[index]
    removedProduct.inBag = false
    removedProduct.count = 0
    removedProduct.total = 0
    this.setState(
      () => {
        return {
          bag: [...tempCart],
          products: [...tempProduct],
        }
      },
      () => {
        this.addTotal()
      }
    )
  }

  clearBag = () => {
    this.setState(
      () => {
        return {
          bag: [],
        }
      },
      () => {
        this.setProducts()
        this.addTotal()
      }
    )
  }

  addTotal = () => {
    let subTotal = 0
    this.state.bag.map((item) => (subTotal += item.total))
    const tempTax = subTotal * 0.01
    const tax = parseFloat(tempTax.toFixed(2))
    const total = subTotal + tax

    this.setState(() => {
      return {
        bagSubTotal: subTotal,
        bagTax: tax,
        bagTotal: total,
      }
    })
  }

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToBag: this.addToBag,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearBag: this.clearBag,
          handleColor: this.handleColor,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}
const ProductConsumer = ProductContext.Consumer
export { ProductProvider, ProductConsumer }
