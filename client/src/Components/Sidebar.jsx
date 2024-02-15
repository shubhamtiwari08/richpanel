import { faLongArrowRight, faMessage, faShareNodes, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Sidebar() {
  return (
    <div className='w-16 h-screen bg-[#004e96]  flex flex-col items-center py-5'>
       <ul className='flex flex-col gap-3  w-full  items-center text-white'>
        <li><FontAwesomeIcon icon={faShareNodes}/></li>
        <li className='bg-white w-full p-2 '><FontAwesomeIcon icon={faMessage} className='text-[#004e96] w-10'/></li>
        <li><FontAwesomeIcon icon={faUser}/></li>
        <li><FontAwesomeIcon icon={faLongArrowRight}/></li>
       </ul>
    </div>
  )
}

export default Sidebar