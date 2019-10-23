import { action, observable } from 'mobx'
import { DEFAULT_VALUE_MONEY } from '../config'

class MoneyStore {
  @observable value: number = DEFAULT_VALUE_MONEY

  @action add(count: number): void {
    this.value += count
    this.setValueInStorage()
  }
  @action pay(price: number): void {
    this.value -= price
    this.setValueInStorage()
  }

  @action setValueInStorage(): void {
    localStorage.setItem('money', `${this.value}`)
  }

  @action async getValueFromStorage(): Promise<void> {
    const value = await localStorage.getItem('money')
    if (value !== null) {
      this.value = Number(value)
    }
  }
}

export default new MoneyStore()
