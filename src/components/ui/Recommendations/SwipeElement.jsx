import { Star } from '@mui/icons-material'
import React from 'react'
import me from '../../../assets/images/me.png';

function SwipeElement() {
  return (
    <div className='bg-white dark:bg-gray-900 p-4 rounded flex flex-col mb-8'>
        <div className='mb-2'>
            <p className='items-start w-full'>
                <i className='text-orange-300'><Star sx={{fontSize: 20}}/></i>
                <i className='text-orange-300'><Star sx={{fontSize: 20}}/></i>
                <i className='text-orange-300'><Star sx={{fontSize: 20}}/></i>
                <i className='text-gray-300'><Star sx={{fontSize: 20}}/></i>
                <i className='text-gray-300'><Star sx={{fontSize: 20}}/></i>
            </p>
            <h3 className='text-medium my-2 font-medium'>
                Great Quality!
            </h3>         
        </div>

        <p className='text-sm text-slate-500 dark:text-slate-400 mb-4'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptates possimus Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptates possimus
        </p>

        <div className='flex space-x-3'>
            <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center">
                <img src={me} alt='Daniel Djakam'
                    className='w-full h-full object-cover rounded-full' />
            </div>
            <div className="">
                <h3 className='text-sm font-medium'>
                    John Doe
                </h3>    
                <p className='text-sm text-slate-500 dark:text-slate-400 mb-4'>
                    Web Designer
                </p>     
            </div>
        </div>
    </div>
  )
}

export default SwipeElement