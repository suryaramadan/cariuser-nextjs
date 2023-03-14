"use client"
import React, { useState } from 'react'
import SectionResult from './sectionResult'

export default function page() {
    const [query, setQuery] = useState('')
    const onSearch = (e:any) => {
        e.preventDefault()
        const inputQuery = e.target[0].value;
        setQuery(inputQuery)
    }
    return (
        <div className='max-w-5xl mx-auto'>
            <form onSubmit={onSearch} className="flex space-x-4">
                <input placeholder="Cari User Github" className='bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 focus:outline-none focus:bg-white focus:border-blue-500 w-full' />
                <button className='shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'>Cari</button>
            </form>
            <div className='mt-4'>
                {query && <SectionResult query={query}/>}
            </div>
        </div>
    )
}
