import React from 'react'
import { IIncome } from '../types'
import { observable } from 'mobx'
import { DEFAULT_VALUE_INCOME } from '../config'

class IncomeStore {
  @observable value: IIncome = DEFAULT_VALUE_INCOME
}

export default React.createContext(new IncomeStore())
