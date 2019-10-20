import React from 'react'
import styles from './styles.module.css'

interface IProps {
  readonly title: string
  onClick: () => void
}

const Button = ({ title, onClick }: IProps) => {
  return (
    <button onClick={onClick} className={styles.button}>
      {title}
    </button>
  )
}

export default Button
