import React from 'react'
import { ArrowRightAlt } from '@mui/icons-material'
import image from '../../assets/images/me-long.png';
import CustomBtn from '../ui/CustomBtn'

function FixedElement() {
    return (
        <div id='home' className='flex items-center'>
            <div className="w-[60%] h-full items-start p-8">
                <h1 className="text-4xl font-bold">I'm Daniel Djakam</h1>
                <h1 className="text-4xl font-bold"> <span className='text-primary'>Fullstack</span> Developer </h1>

                <p className='text-slate-500 dark:text-slate-400 my-8'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis ipsam aperiam pariatur eligendi nemo! Illo et laborum laboriosam beatae vitae corrupti hic eveniet aperiam laudantium porro earum architecto, animi praesentium!
                </p>

                <CustomBtn text={<><span className='ml-0.5'>Hire Me <ArrowRightAlt/></span></>} className={'text-sm hover:bg-primary-fonced px-4  text-white font-bold rounded-full transition duration-500 ease-in-out hover:translate-x-2'}/>
            </div>
            <div className="w-[40%] flex justify-center items-center">
                <img src={image} className='w-[200px] h-[200px] object-cover rounded-full mt-[10px] ml-[5px]' alt='Daniel Djakam' />
            </div>
        </div>
    )
}

export default FixedElement
