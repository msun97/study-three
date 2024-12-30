import React from 'react'

const page = () => {
  return (
    <div className="content-wrapper h-[953px] w-screen relative">
        <div className="loading absolute w-full h-full bg-black flex justify-center align-center items-center transition-[opacity 0.5s]">
            <div className='loading-logo w-1/3 max-w-[200px] opacity-1'>
                <svg width='374' height='127' viewBox='0 0 374 127' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M137.595 56.2576H123.291C121.366 56.2576 119.805 57.8152 119.805 59.7417L119.81 82.3574C119.81 94.275 110.047 103.964 98.0525 103.964C86.1447 103.964 76.4639 94.275 76.4639 82.3574V59.7417C76.4639 57.8152 74.9024 56.2576 72.9827 56.2576H58.6738C56.7489 56.2576 55.1926 57.8152 55.1926 59.7417V82.3574C55.1926 106.105 74.4263 125.416 98.0525 125.416C121.776 125.416 141.076 106.1 141.076 82.3574V59.7417C141.076 57.8152 139.515 56.2576 137.595 56.2576Z' fill='white'></path>
                </svg>
            </div>
        </div> 
    </div>
  )
}

export default page