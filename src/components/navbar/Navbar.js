import React from 'react'

const Navbar=()=>{
    return(
    <div className='h-20 bg-blue text-white flex justify-between py-2 px-5 items-center'>
        <div>
            <img src="http://localhost:3000/static/media/logo.7fc31abd0302e00b15e2.png" alt="logo" className='w-48'></img>
        </div>
        <div className='flex gap-2 items-center'>
            <img src="https://w7.pngwing.com/pngs/178/419/png-transparent-man-illustration-computer-icons-avatar-login-user-avatar-child-web-design-face-thumbnail.png" className='w-11'/>
            <div className=''>
                <h4 className='text-blue-600 text-sm font-bold'>Hi,</h4>
                <button className='bg-blue-600 rounded-lg p-2 text-sm'>logout</button>
            </div>
        </div>
    </div>
  )
}
export default Navbar