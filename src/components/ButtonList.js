import React from 'react'
import Button from './Button'

const ButtonList = () => {
  return (
    <div className='flex px-6 w-[270px] justify-between'>
        <Button name = "All" />
        <Button name = "Mixes" />
        <Button name = "Music" />
        <Button name = "Test" />
        <Button name = "Live" />
        <Button name = "Gaming" />
        <Button name = "Sports" />
        <Button name = "Cricket" />
        <Button name = "Cooking" />
        <Button name = "News" />
        <Button name = "Space" />
        {/* <Button name = "Funny" /> */}
    </div>
  )
}

export default ButtonList
