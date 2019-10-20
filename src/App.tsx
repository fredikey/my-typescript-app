import React, { useContext } from 'react'
import { Info, Button } from './components'
import { MoneyStoreContext, IncomeStoreContext } from './stores'
import { observer } from 'mobx-react-lite'

const App = () => {
  const MoneyStore = useContext(MoneyStoreContext)
  const IncomeStore = useContext(IncomeStoreContext)

  const add = (): void => {
    MoneyStore.add(IncomeStore.value.perClick)
  }

  return (
    <div className="app">
      <Info money={MoneyStore.value} income={IncomeStore.value} />
      <Button title="Click" onClick={add} />
    </div>
  )
}

export default observer(App)
