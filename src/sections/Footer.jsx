import React from 'react'

const Footer = () => {
  return (
    <section className=' c-space pt-7 pb-3 border-t border-black-300  justify-between items-center flex  flex-wrap gap-5'>
        <div className='text-white-500 flex gap-2'>
            <p>Terms & Conditions</p>
            <p>|</p>
            <p>Privacy Policy</p>
        </div>



        <div className='flex gap-3'>
  <a href="https://github.com/Raisahab794" target="_blank" rel="noopener noreferrer" className='social-icon'>
    <img src="/assets/github.svg" alt="github" className='w-1/2 h-1/2' />
  </a>
  <a href="https://twitter.com/your-username" target="_blank" rel="noopener noreferrer" className='social-icon'>
    <img src="/assets/twitter.svg" alt="twitter" className='w-1/2 h-1/2' />
  </a>
  <a href="https://instagram.com/your-username" target="_blank" rel="noopener noreferrer" className='social-icon'>
    <img src="/assets/instagram.svg" alt="instagram" className='w-1/2 h-1/2' />
  </a>
</div>


        <p className='text-white-500'>
            © Ayush. 2024 All rights reserved
        </p>
    </section>
  )
}

export default Footer