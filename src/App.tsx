import React, { useState, useEffect } from 'react'
import { IIncome } from './types'
import { Info, Button } from './components'

const DEFAULT_VALUE_MONEY: number = 20
const DEFAULT_VALUE_INCOME: IIncome = { perClick: 1, perTime: 0 }

const App = () => {
  const [money, setMoney] = useState(DEFAULT_VALUE_MONEY)
  const [income, setIncome] = useState<IIncome>(DEFAULT_VALUE_INCOME)

  const add = (): void => {
    setMoney(money => money + income.perClick)
  }

  return (
    <div className="app">
      <Info money={money} income={income} />
      <Button title="Click" onClick={add} />
    </div>
  )
}

export default App
