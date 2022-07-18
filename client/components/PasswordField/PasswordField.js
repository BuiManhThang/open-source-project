import React, { useState } from 'react'
import styles from './PasswordField.module.scss'

const PasswordField = ({ id = '', name = '', label = '', placeholder = '' }) => {
  const [inputFieldClass, setInputFieldClass] = useState('')
  const [activePassword, setActivePassword] = useState(false)

  const handleInput = (e) => {
    if (e.target.value) {
      setInputFieldClass('password-field--active')
    } else {
      setInputFieldClass('')
    }
  }

  const handleClickIcon = () => {
    setActivePassword(!activePassword)
  }

  return (
    <div className={`${styles['password-field']} ${styles[inputFieldClass]}`}>
      <div className={styles['password-field__container']}>
        <input
          className={styles['password-field__input']}
          type={activePassword ? 'text' : 'password'}
          id={id}
          name={name}
          placeholder={placeholder}
          onInput={handleInput}
        />
        <label className={styles['password-field__label']} htmlFor={id}>
          {label}
        </label>
        <div className={styles['password-field__icon']} onClick={handleClickIcon}>
          {activePassword ? (
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
              <path d="m19.575 23.325-3.875-3.85q-.825.3-1.737.45-.913.15-1.963.15-4.075 0-7.35-2.313Q1.375 15.45-.125 11.5q.475-1.3 1.288-2.525.812-1.225 1.787-2.25L.275 4.05l1.85-1.85L21.4 21.5ZM12 16.225q.125 0 .25-.013.125-.012.25-.037L7.275 11v.5q0 2 1.362 3.363Q10 16.225 12 16.225Zm8.325.725-3.9-3.9q.175-.35.238-.788.062-.437.062-.762 0-2-1.362-3.363Q14 6.775 12 6.775q-.375 0-.787.075-.413.075-.763.2L7.225 3.825q1.05-.425 2.287-.663Q10.75 2.925 12 2.925q4.05 0 7.312 2.3 3.263 2.3 4.813 6.275-.575 1.6-1.6 3.012-1.025 1.413-2.2 2.438Zm-6.6-6.625-.75-.725q.175-.025.313.012.137.038.237.163.1.1.163.25.062.15.037.3Z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
              <path d="M12 16.225q1.975 0 3.35-1.375t1.375-3.35q0-1.975-1.375-3.35T12 6.775q-1.975 0-3.35 1.375T7.275 11.5q0 1.975 1.375 3.35T12 16.225Zm0-2.525q-.925 0-1.562-.638Q9.8 12.425 9.8 11.5t.638-1.562Q11.075 9.3 12 9.3t1.562.638q.638.637.638 1.562t-.638 1.562q-.637.638-1.562.638Zm0 6.375q-4.075 0-7.362-2.375-3.288-2.375-4.763-6.2Q1.35 7.675 4.638 5.3 7.925 2.925 12 2.925T19.363 5.3q3.287 2.375 4.762 6.2-1.475 3.825-4.762 6.2-3.288 2.375-7.363 2.375Z" />
            </svg>
          )}
        </div>
      </div>
    </div>
  )
}

export default PasswordField
