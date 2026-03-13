import React from 'react'

function JoinUs() {
  return (
    <div className='flex justify-center items-center'>
      <div className="w-11/12 bg-join-bg bg-no-repeat bg-cover h-auto md:h-96 rounded-3xl my-5 flex justify-center items-center flex-col p-6 text-center">
        <div className="flex justify-center flex-col items-center">
          <p className='text-white'>SUBSCRIBE</p>
          <p className='text-white font-serif text-4xl md:text-6xl font-bold'>
            JOIN THE FUN <br className="hidden md:block" /> SUBSCRIBE NOW!
          </p>
          <p className='text-white mt-4 max-w-md'>
            Subscribe to our newsletter for a weekly serving of recipes, cooking tips, and exclusive insights straight to your inbox.
          </p>
        </div>
        <div className="mt-8 w-full max-w-lg">
          <div className='flex  md:flex-row gap-4 md:gap-0 bg-white p-2 rounded-full'>
            <input 
              placeholder='Email Address' 
              className='pl-4 w-full text-gray-700 placeholder-gray-500 bg-transparent focus:outline-none' 
            />
            <button className='text-white hidden md:block bg-black rounded-full px-6 py-3 hover:opacity-90 transition-opacity  md:w-auto'>
              SUBSCRIBE
            </button>
            
            <button className='text-white md:hidden bg-black rounded-full px-6 py-3 hover:opacity-90 transition-opacity  md:w-auto'>
              SUB
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default JoinUs