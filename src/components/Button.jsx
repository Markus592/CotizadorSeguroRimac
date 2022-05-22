import React from 'react'
import  "../styles/Layout.scss"
export const Button = (props) => {
  return (
    <button   type="submit" className='btn'>{props.text||'cotízalo'}</button>
  )
}
