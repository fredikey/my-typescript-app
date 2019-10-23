import { action, computed, observable } from 'mobx'
import { IUpgradeCount, IIncome } from '../types'
import { DEFAULT_VALUE_UPGRADES_COUNT, upgrades } from '../config'

class UpgradesStore {
  @observable value: Array<IUpgradeCount> = DEFAULT_VALUE_UPGRADES_COUNT

  @computed get income(): IIncome {
    return {
      perClick: 1 + upgrades[0].addiction * this.value[0].count,
      perTime: upgrades[1].addiction * this.value[1].count
    }
  }

  @action buy(id: number) {
    const item = this.value.find(item => item.id === id)
    if (item !== undefined) {
      item.count += 1
      this.setValueInStorage()
    }
  }

  @action setValueInStorage(): void {
    localStorage.setItem('upgrades', JSON.stringify(this.value))
  }

  @action async getValueFromStorage(): Promise<void> {
    const value = await localStorage.getItem('upgrades')
    if (value !== null) {
      this.value = JSON.parse(value)
    }
  }
}

export default new UpgradesStore()
