import { makeAutoObservable } from 'mobx'

export default class UserStore {
  user = null

  constructor() {
    makeAutoObservable(this)
  }

  get isLogin() {
    return this.user !== null
  }

  login() {
    this.user = { name: 'Admin' } //fake
  }

  logout() {
    this.user = null
  }
}