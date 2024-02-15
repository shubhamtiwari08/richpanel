import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useNavigate } from 'react-router'

function Landing() {

    const navigate = useNavigate()

  return (
    <div className="bg-[#1d4e91] w-full h-screen flex flex-col gap-4 justify-center items-center">
        <h1 className='text-xl text-white'>FB helpdesk (POC App)</h1>
        <button className='bg-white text-blue-800 rounded-md p-2' onClick={()=>navigate('/signup')}>SignUp <FontAwesomeIcon icon={faArrowRight}/></button>
    </div>
  )
}

export default Landing