import React from 'react'

function MessagesBox() {
  return (
    <div className='p-2 text-slate-700 text-[14px] border-b-2'>
        <div className='flex justify-between items-center '>
           <div className='flex items-center gap-1'>
           <input type="checkbox"  />
            <div className='px-2'>
                <p>Amit Rg</p>
                <p className='text-[10px]'>Facebook DM</p>
            </div>
           </div>
            <p className='text-[12px]'>10m</p>
        </div>
        <div className='text-[12px]'>
            <p className='font-bold'>Awesome Product</p>
            <p>hey there ! the product..</p>
        </div>
    </div>
  )
}

export default MessagesBox