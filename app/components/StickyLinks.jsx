import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const StickyLinks = () => {
  return (
    
        <div>
            
    <div className="fixed z-20  left-32 top-4 max-md:hidden">
    <Image
            className='opacity-60'
            src="/images/crypto_logo.svg"
            alt="UC Cryptocurrency Club"
            width={110}
            height={110}
        
        />
      
    </div>
    
    </div>
        
        
  )
}

export default StickyLinks