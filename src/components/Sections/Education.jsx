import React from 'react'
import Section from '../ui/Section'

function Education() {
  return (
    <Section title="Education" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptates possimus nihil adipisci perferendis eius, voluptatum iste ">
        <div id="list-ele" className='bg-white dark:bg-gray-900 p-4 rounded flex flex-col mb-8'>
            {
                [1, 2, 3].map(
                    ele => <div className="my-4 flex border-b-2 border-b-gray-600">
                            <div className="min-w-[300px]">
                                <h3 className='text-medium my-2 font-medium mb-4'>
                                    LYDANO
                                </h3>       
                                <p className='text-sm text-slate-500 dark:text-slate-400 mb-4  space-x-4'>
                                    <span class="">Student</span>
                                    <span class="bg-orange-500 rounded px-4 py-1 text-white">Jan 2024 - Dec 2025</span>
                                </p>
                            </div>
                            <div>
                                <h3 className='text-medium my-2 font-medium mb-4'>
                                    Brevet Etude du Premier Cycle
                                </h3>       
                                <p className='text-sm text-slate-500 dark:text-slate-400 mb-4'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ab et maiores soluta eum itaque labore corrupti, sequi saepe tempora quae! Ducimus corrupti delectus aut nesciunt beatae amet, ullam veritatis?
                                </p>
                            </div>
                        </div>
                )
            }
        </div>
    </Section>
  )
}

export default Education