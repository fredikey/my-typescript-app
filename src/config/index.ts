import { IIncome, IUpgradeCount } from '../types'
import upgrades from './upgrades'

export const DEFAULT_VALUE_MONEY: number = 20
export const DEFAULT_VALUE_INCOME: IIncome = { perClick: 1, perTime: 0 }

export const DEFAULT_VALUE_UPGRADES_COUNT: Array<IUpgradeCount> = [
  { count: 0, id: 0 },
  { count: 0, id: 1 }
]

export { upgrades }
