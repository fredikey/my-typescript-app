import React, {Fragment, useContext, useEffect, useState} from 'react'
import { Info, Button } from './components'
import { MoneyStoreContext, IncomeStoreContext } from './stores'
import { observer } from 'mobx-react-lite'

const App = () => {
	const [loading, setLoading] = useState(false)
  const MoneyStore = useContext(MoneyStoreContext)
  const IncomeStore = useContext(IncomeStoreContext)
	
	useEffect(() => {
		MoneyStore.getValueFromStorage().finally(() => {
			setLoading(true)
		})
	}, [])
	
  const add = (): void => {
    MoneyStore.add(IncomeStore.value.perClick)
  }
	
  return (
    <div className="app">
	    {
	    	loading
		   ? (
			    <Fragment>
				    <Info money={MoneyStore.value} income={IncomeStore.value} />
				    <Button title="Click" onClick={add} />
			    </Fragment>
			    )
			    : (<span>Loading...</span>)
	    }
    </div>
  )
}

export default observer(App)
