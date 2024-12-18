import React from 'react'
import me from '../../../assets/images/me.png';
import { GitHub, Instagram, LinkedIn, X } from '@mui/icons-material';

function Profile() {
  return (
    <div className='flex flex-col items-center w-[80%]'>
        <div className="bg-primary overflow-hidden dark:bg-primary-dark w-[100px] h-[100px] rounded-full">
            <img src={me} className='w-[90px] h-[90px] object-cover rounded-full mt-[10px] ml-[5px]' alt='Daniel Djakam' />
        </div>
        <div className="flex flex-col items-center my-4 space-y-1">
            <h3 className="font-bold">
                Daniel Djakam
            </h3>
            <p className="text-slate-500 dark:text-slate-400">
                Web and Mobile Developer
            </p>
        </div>
        <div className="flex justify-between space-x-3 text-sm">
            <div className="text-primary hover:text-primary-fonced w-8 h-8 rounded-full flex items-center justify-center">
                <a target='blank' href='https://github.com/danieldjakam'>
                    <GitHub/>
                </a>
            </div>
            <div className="text-primary hover:text-primary-fonced w-8 h-8 rounded-full flex items-center justify-center">
                <a target='blank' href='https://instagram.com/daniel_djakam'>
                    <Instagram/>
                </a>
            </div>
            <div className="text-primary hover:text-primary-fonced w-8 h-8 rounded-full flex items-center justify-center">
                <a target='blank' href='https://linkedin.com/in/danieldjakam'>
                    <LinkedIn/>
                </a>
            </div>
            <div className="text-primary hover:text-primary-fonced w-8 h-8 rounded-full flex items-center justify-center">
                <a target='blank' href='https://linkedin.com/in/danieldjakam'>
                    <X/>
                </a>
            </div>
        </div>
        <hr className="w-full mt-4 border border-gray-100 dark:border-gray-800" />
    </div>
  )
}

export default Profile