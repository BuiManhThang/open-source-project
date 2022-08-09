import React, { useEffect, useRef, useState } from 'react'
import styles from './InputField.module.scss'

export const TypeStyle = {
  Vip: 'vip',
  Normal: 'normal',
}

const InputField = ({
  id = '',
  name = '',
  label = '',
  placeholder = '',
  icon = null,
  isAutoFocus = false,
  error = '',
  value = '',
  type = 'text',
  required = false,
  disabled = false,
  typeStyle = TypeStyle.Vip,
  onInput = () => {},
}) => {
  const [inputFieldClass, setInputFieldClass] = useState('')
  const [inputFieldErrorClass, setInputFieldErrorClass] = useState('')
  const inputRef = useRef(null)

  useEffect(() => {
    if (isAutoFocus) {
      setTimeout(() => {
        inputRef.current?.focus()
      }, 100)
    }
  }, [])

  useEffect(() => {
    if (error) {
      setInputFieldErrorClass('input-field--error')
    } else {
      setInputFieldErrorClass('')
    }
  }, [error])

  const handleInput = (e) => {
    if (e.target.value) {
      setInputFieldClass('input-field--active')
    } else {
      setInputFieldClass('')
    }
    onInput(e)
  }

  if (typeStyle === TypeStyle.Normal) {
    let inputClass =
      'h-10 w-full text-sm text-black outline-none border border-gray-300 rounded-md pl-3 pr-3 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors caret-primary'
    if (error) {
      inputClass =
        'h-10 w-full text-sm text-black outline-none border border-red-600 rounded-md pl-3 pr-9 focus:border-red-600 focus:ring-2 focus:ring-red-600/20 transition-colors caret-red-600'
    }

    return (
      <div className="w-full">
        <div className="w-full relative">
          <label className="block w-max text-sm pb-1" htmlFor={id}>
            <span className="mr-1">{label}</span>
            {required && <span className="text-red-600">*</span>}
          </label>
          <input
            ref={inputRef}
            autoComplete="off"
            className={inputClass}
            type={type}
            id={id}
            name={name}
            placeholder={placeholder}
            value={value}
            disabled={disabled}
            onChange={(e) => {
              console.log(e.target.value)
              onInput(e)
            }}
          />
          {error && (
            <label
              className="group absolute top-9 right-3 text-red-600 flex items-center"
              htmlFor={id}
            >
              <i className="fa-solid fa-circle-exclamation"></i>
              <div className="opacity-0 invisible transition-all group-hover:opacity-100 group-hover:visible absolute top-1/2 right-[calc(100%_+_4px)] -translate-y-1/2 w-max text-sm text-white bg-red-600 px-2 py-[2px] rounded-md before:absolute before:top-1/2 before:left-full before:-translate-y-1/2 before:border-t-4 before:border-b-4 before:border-t-transparent before:border-b-transparent before:border-r-4 before:border-r-red-600 before:rotate-180">
                {error}
              </div>
            </label>
          )}
        </div>
      </div>
    )
  }

  return (
    <div
      className={`${styles['input-field']} ${styles[inputFieldErrorClass]} ${styles[inputFieldClass]}`}
    >
      <div className={styles['input-field__container']}>
        <input
          ref={inputRef}
          className={styles['input-field__input']}
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          onInput={handleInput}
          value={value}
        />
        <label className={styles['input-field__label']} htmlFor={id}>
          {label}
        </label>
        {icon && (
          <label className={styles['input-field__icon']} htmlFor={id}>
            {icon}
          </label>
        )}
      </div>
      {error && <div className={styles['input-field__error']}>{error}</div>}
    </div>
  )
}

export default InputField
