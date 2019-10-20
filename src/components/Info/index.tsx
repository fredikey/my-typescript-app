import React from 'react'
import styles from './styles.module.css'
import { IIncome } from '../../types'

interface IProps {
  money: number
  income: IIncome
}

const Info = ({ money, income }: IProps) => {
  return (
    <div className={styles.info}>
      <h2>Info</h2>
      <span>Money: ${money}</span>
      <span>Income per click: ${income.perClick}</span>
      <span>Income per sec: ${income.perTime}</span>
    </div>
  )
}

export default Info
