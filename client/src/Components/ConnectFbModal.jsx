import React from 'react'

function ConnectFbModal() {

    const handleFacebookAuth = () => {
        window.location.href = "http://localhost:3001/auth/facebook";
      };

  return (
    <div className="w-80 h-44 bg-white flex flex-col items-center justify-center rounded-md">
        <h3 className='mb-10'>Facebook Page Integration</h3>
        <button className='bg-[#1d4e91] text-white p-2 w-[80%] mx-4 rounded-md' onClick={handleFacebookAuth}>Connect Page</button>
    </div>
  )
}

export default ConnectFbModal