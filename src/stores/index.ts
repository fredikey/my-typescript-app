import { createContext } from 'react'
import MoneyStore from './MoneyStore'
import UpgradesStore from './UpgradesStore'
const MoneyStoreContext = createContext(MoneyStore)
const UpgradesStoreContext = createContext(UpgradesStore)

export { MoneyStoreContext, UpgradesStoreContext }
