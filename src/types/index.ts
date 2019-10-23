export interface IIncome {
  perClick: number
  perTime: number
}

type upgradeType = 'click' | 'sec'

export interface IUpgrade {
  id: number
  type: upgradeType
  title: string
  price: number
  addiction: number
}

export interface IUpgradeCount {
  id: number
  count: number
}
