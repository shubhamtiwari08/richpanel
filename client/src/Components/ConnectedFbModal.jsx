import React from 'react'

function ConnectedFbModal() {
  return (
    <div className="w-80 h-44 bg-white flex flex-col items-center justify-center rounded-md">
   <div className='mb-4 flex flex-col items-center'>
   <h3>Facebook Page Integration</h3>
    <p>Integrated Page: Page name</p>
   </div>
    <button className='bg-red-500 text-white p-2 w-[80%] mx-4 rounded-md mb-2'>Delete Integration</button>
    <button className='bg-[#1d4e91] text-white p-2 w-[80%] mx-4 rounded-md'>Reply To Messages</button>
</div>
  )
}

export default ConnectedFbModal