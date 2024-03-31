import React from 'react'
import { FcGoogle } from 'react-icons/fc'

type Props = {}

const Signin = (props: Props) => {
  return (
    <div className='bg-white h-[65vh] w-[55vw] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl'>
        <div className="flex flex-row h-full p-3">
        <div className="w-1/2 bg-inherit">
                <h3 className='ml-4 mt-2'>BRAND</h3> 
                <div className='ml-4 mt-16 space-y-2'>
                    <h1 className=' font-semibold '>ACCOUNT</h1>
                    <h1 className='font-bold text-2xl'>Sign in to your Account</h1>
                    <p className='text-[14px] font-semibold'> Sign in to start viewing your dashboard</p>
                    
                </div>   
                <div className='mt-14 ml-4'>
                        <button title='e' className='px-20 py-2 font-bold text-[14px] border-black border-2 rounded-full'>

                            <span className='flex flex-row items-center'><FcGoogle className='mr-2 h-5 w-5'/>Sign in with Google</span>

                        </button>
                    </div>
        </div> 
        <div className="w-1/2 bg-green-400 rounded-2xl"></div>
</div>
    </div>
  )
}

export default Signin