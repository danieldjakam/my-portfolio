import React from 'react'
import CustomBtn from '../ui/CustomBtn'
import { Paper } from '@mui/material'
import { Money } from '@mui/icons-material'

function Contact() {
  return (
    <div className='pt-12 mb-6 text-dark dark:text-white flex gap-8'>
        <div className='w-[60%]'>
			<h1 className='text-xl font-bold text-dark dark:text-white mb-6 pl-4'>Leave Us Your Info</h1>
            <div className='bg-white dark:bg-gray-900 py-8 px-6 rounded'>
                <form>
                    <div className='flex flex-col space-y-2 mb-6'>
                        <label>Your Full Name <span className='text-red-500'>*</span></label>
                        <input type='text' name='name' className='py-2 px-4 rounded bg-slate-200 dark:bg-slate-800 outline-none border-none' />
                    </div>
                    <div className='flex flex-col space-y-2 mb-6'>
                        <label>Your Email <span className='text-red-500'>*</span></label>
                        <input type='text' name='name' className='py-2 px-4 rounded bg-slate-200 dark:bg-slate-800 outline-none border-none' />
                    </div>
                    <div className='flex flex-col space-y-2 mb-6'>
                        <label>Subject</label>
                        <input type='text' name='name' className='py-2 px-4 rounded bg-slate-200 dark:bg-slate-800 outline-none border-none' />
                    </div>
                    <div className='flex flex-col space-y-2'>
                        <label>Your Message <span className='text-red-500'>*</span></label>
                        <textarea className='py-2 px-4 rounded bg-slate-200 dark:bg-slate-800 outline-none border-none' rows={6}></textarea>
                    </div>
                    <div className='mt-6'>
                        <CustomBtn text={<><Paper/> <span className='ml-0.5'>SEND MESSAGE</span></>} className={'text-sm hover:bg-primary-fonced px-4  text-white font-bold rounded-full '}/>
                    </div>
                </form>
            </div>
        </div>
        <div className='w-[40%]'>
            <h1 className='text-xl font-bold text-dark dark:text-white mb-6 pl-4'>Contact Information</h1>
            <div className='bg-white dark:bg-gray-900 p-2 rounded mb-6 px-8'>
                <div className='flex justify-center my-4'>
                    <span className='flex justify-center items-center p-2 bg-primary rounded-full'><Money/></span>
                </div>
                <div className='text-base'>
                    <h3 className='flex justify-between mb-2'>
                        <span>Country :</span>
                        <span>Cameroon</span>
                    </h3>
                    <h3 className='flex justify-between mb-2'>
                        <span>City :</span>
                        <span>Douala</span>
                    </h3>
                    <h3 className='flex justify-between mb-2'>
                        <span>Streat :</span>
                        <span>Bangue</span>
                    </h3>
                </div>
            </div>
            <div className='bg-white dark:bg-gray-900 p-2 rounded mb-6 px-8'>
                <div className='flex justify-center my-4'>
                    <span className='flex justify-center items-center p-2 bg-primary rounded-full'><Money/></span>
                </div>
                <div className='text-base'>
                    <h3 className='flex justify-between mb-2'>
                        <span>Country :</span>
                        <span>Cameroon</span>
                    </h3>
                    <h3 className='flex justify-between mb-2'>
                        <span>City :</span>
                        <span>Douala</span>
                    </h3>
                    <h3 className='flex justify-between mb-2'>
                        <span>Streat :</span>
                        <span>Bangue</span>
                    </h3>
                </div>
            </div>
            <div className='bg-white dark:bg-gray-900 p-2 rounded px-8'>
                <div className='flex justify-center my-4'>
                    <span className='flex justify-center items-center p-2 bg-primary rounded-full'><Money/></span>
                </div>
                <div className='text-base'>
                    <h3 className='flex justify-between mb-2'>
                        <span>Country :</span>
                        <span>Cameroon</span>
                    </h3>
                    <h3 className='flex justify-between mb-2'>
                        <span>City :</span>
                        <span>Douala</span>
                    </h3>
                    <h3 className='flex justify-between mb-2'>
                        <span>Streat :</span>
                        <span>Bangue</span>
                    </h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact