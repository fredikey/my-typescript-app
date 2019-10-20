import React from 'react'
import { action, observable } from 'mobx'
import { DEFAULT_VALUE_MONEY } from '../config'

class MoneyStore {
  @observable value: number = DEFAULT_VALUE_MONEY

  @action add(count: number): void {
    this.value += count
  }
  @action pay(price: number): void {
    this.value -= price
  }
}

export default React.createContext(new MoneyStore())
