import React, { Fragment, useContext, useEffect, useState } from 'react'
import { Info, Button } from './components'
import { MoneyStoreContext, UpgradesStoreContext } from './stores'
import { observer } from 'mobx-react-lite'
import { upgrades } from './config'
import { IUpgrade } from './types'

const App = () => {
  const [loading, setLoading] = useState(false)
  const MoneyStore = useContext(MoneyStoreContext)
  const UpgradesStore = useContext(UpgradesStoreContext)

  useEffect(() => {
    Promise.all([
      MoneyStore.getValueFromStorage(),
      UpgradesStore.getValueFromStorage()
    ]).finally(() => {
      setLoading(true)
    })
  }, [])
  useEffect(() => {
    let interval = setInterval(() => {
      if (UpgradesStore.income.perTime > 0) {
        MoneyStore.add(UpgradesStore.income.perTime)
      }
    }, 1000)
    return () => clearInterval(interval)
  }, [])
  const add = (): void => {
    MoneyStore.add(UpgradesStore.income.perClick)
  }

  const buy = (item: IUpgrade): void => {
    UpgradesStore.buy(item.id)
    MoneyStore.pay(item.price)
  }

  return (
    <div className="app">
      {loading ? (
        <Fragment>
          <Info money={MoneyStore.value} income={UpgradesStore.income} />
          <Button title="Click" onClick={add} />
          {upgrades.map(item => {
            return (
              <Button
                title={item.title}
                onClick={() => {
                  buy(item)
                }}
              />
            )
          })}
        </Fragment>
      ) : (
        <span>Loading...</span>
      )}
    </div>
  )
}

export default observer(App)
