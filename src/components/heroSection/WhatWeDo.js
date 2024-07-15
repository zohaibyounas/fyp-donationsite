import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';
function WhatWeDo() {
    return (
        <>
        <div className='container mx-auto'>
            <h1 className='text-4xl font-sans font-bold mt-20 flex justify-center items-center'>What we do</h1>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-2'>

                <div className='flex flex-col bg-slate-100 rounded mb-4 h-[450px] w-full mx-auto lg:mt-14 mt-5'>
                    <h2 className='px-16 mt-14 tracking-widest text-yellow-500 font-sans font-medium'>SAVE THE STUDENT</h2>
                    <span className='text-2xl font-bold font-sans px-16 mt-8'>Support the student to grow in life and do something for the nation</span>
                    <span className='px-16 mt-4 font-sans tracking-wider'>We take pride in nurturing students’ academic abilities. Our admissions process ensures the establishment of an outstanding student body.</span>
                    <FontAwesomeIcon icon={faUserGraduate } size='5x' className='mt-6 flex xl:mr-80' />
                </div>

                <div className='flex flex-col bg-slate-100 rounded mb-4 h-[450px] w-full mx-auto lg:mt-14 mt-5'>
                    <h2 className='px-16 mt-14 tracking-widest text-yellow-500 font-sans font-medium'>HELP THE HELPLESS STUDENT</h2>
                    <span className='text-2xl font-bold font-sans px-16 mt-8'>Support the student to grow in life and do something for the nation</span>
                    <span className='px-16 mt-4 font-sans tracking-wider'>We take pride in nurturing students’ academic abilities. Our admissions process ensures the establishment of an outstanding student body.</span>
                    <FontAwesomeIcon icon={faUserGraduate} size='5x' className='mt-6 flex xl:mr-80' /></div>

                <div className='flex flex-col bg-slate-100 rounded mb-4 h-[450px] w-full mx-auto lg:mt-14 mt-5'>
                    <h2 className='px-16 mt-14 tracking-widest text-yellow-500 font-sans font-medium'>DONATE FOR THE POOR STUDENT</h2>
                    <span className='text-2xl font-bold font-sans px-16 mt-8'>Support the student to grow in life and do something for the nation</span>
                    <span className='px-16 mt-4 font-sans tracking-wider'>We take pride in nurturing students’ academic abilities. Our admissions process ensures the establishment of an outstanding student body.</span>
                    <FontAwesomeIcon icon={faUserGraduate } size='5x' className='mt-6 flex xl:mr-80' />
                </div>=
            </div>
        </div>
        </>
    );
}

export default WhatWeDo;
