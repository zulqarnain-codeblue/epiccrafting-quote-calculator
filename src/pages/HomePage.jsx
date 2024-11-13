import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <section className="hero bg-gray-100 min-w-1/2 mx-auto py-16 px-20 rounded-2xl">
        <div>
            <h1 className="text-3xl font-bold">Want an Instant Quotation?
            </h1>
            <p className="py-4">Choose your sign type and calculate the wholesale quotation</p>
           <Link to="quotations" className="bg-blue-500 transition-all hover:bg-blue-700 shadow-2xl shadow-blue-500 px-9 py-3 text-white rounded-lg mt-4 inline-block">Let's get started</Link>
        </div>
    </section>
  )
}

export default HomePage