import { makeAutoObservable } from 'mobx'

export default class CartStore {
  
  items = []

  constructor() {
    makeAutoObservable(this)
  }

  get cnt() {
    return this.items.length;
  }

  get total() {
    return this.items.reduce((t, item) => t + item.id, 0) //id now is price of item
  }

  get has() {
    return (id) => this.items.some(item => item.id === id)
  }

  add(id) {
    this.items.push( { id, cnt: 1 } )
    console.log(this.items);
  }

  remove(id) {
    this.items = this.items.filter(item => item.id !== id)
  }
}

// let cart = new Cart
// cart.add(100)
// cart.add(101)
// cart.add(102)
// cart.remove(101)
// console.log(cart.total);