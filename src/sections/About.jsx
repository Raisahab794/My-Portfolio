 import React from 'react'
 import { useState } from 'react'
import  Globe  from 'react-globe.gl'
import Button from '../components/Button'
const About = () => {
    const [hasCopied,setHasCopied]= useState(false)
    const handleCopy = () => {
        navigator.clipboard.writeText('ayushkumarrai2@gmail.com')
        setHasCopied(true)
        setTimeout(()=>{
            setHasCopied(false)
        },2000)
    }
  return (
      <section className='c-space my-20'>
        <div className='grid xl:grid-cols-3 xl:grid-rows-3 md:grid-cols-2 grid-cols-1 gap-5 h-full'>

          <div className='col-span-1 xl:row-span-3'>
             <div className='grid-container'>
                <img src="/assets/grid1.png" alt="grid-1" className='w-full sm:h-[276px] h-fit object-contain' />
                <div>
                    <p className='grid-headtext'>Hi, I am Ayush</p>
                    <p className='grid-subtext'>
                    With 2 years of experience in web development, I have gained a solid foundation in both frontend and backend technologies, with a particular focus on creating animated 3D websites. I am continuously expanding my skills and am excited to further develop my expertise in this area.
                    </p>
                </div>
             </div>
          </div>

            <div className='col-span-1 xl:row-span-3'>
                <div className='grid-container'>
                    <img src="/assets/grid2.png" alt="grid-2" className='w-full sm:w-[276px] h-fit object-contain' />
                    <div>
                        <p className='grid-headtext'>Tech Stack </p>
                        <p className='grid-subtext'>
                        I specialized in creating responsive websites using HTML, CSS, and JavaScript. I have experience working with React, Node.js, and MongoDB. I am also familiar with Git, Docker, and AWS. I am always looking to learn new technologies and improve my skills.
                        </p>
                    </div>
                </div>
            </div>

            <div className='col-span-1 xl:row-span-4'>
                <div className='grid-container'>
                    <div className='rounded-3xl w-full sm:h-[326px] h-fit flex-justify-center flex items-center'>
                      <Globe
                      height={326}
                    width={326}
                    backgroundColor='rgba(0,0,0,0)'
                    backgroundImageOpacity={0.5}
                    showAtmosphere={true}
                    showGraticules={true}
                    globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                        bumpImageUrl='//unpkg.com/three-globe/example/img/earth-topology.png'                
                      />
                    </div>
                      <div>
                        <p className='grid-headtext'>
                            I work remotely across most timezone.
                        </p>
                 
                        <p className='grid-subtext mb-11 '>
                            I am currently based in India, but I am available to work remotely across most timezones. I am fluent in English and have experience working with clients. I am always available to discuss new projects and ideas.
                        </p>
                        
                        <Button name='Contact Me' isBeam containerClass='w-full mt-10'/>
                        
                      </div>
                </div>
            </div>

            <div className='col-span-2 xl:row-span-3'>
                <div className='grid-container'>
                    <img src="/assets/grid3.png" alt="grid-3" className='w-full sm:h-[266px] h-fit object-contain' />
                    <div>
                        <p className='grid-headtext'>My Passion for coding </p>
                        <p className='grid-subtext'>
                             I love solving problems and creating new things. I am passionate about coding and enjoy working on projects that challenge me. I am always looking for new opportunities to learn and grow as a developer.
                        </p>
                    </div>
                </div>
            </div>

            <div className='col-span-1 xl:row-span-2'>
                <div className='grid-container'>
                    <img src="/assets/grid4.png" alt="grid-4" className='w-full md:h-[126px] sm:h-[276px] h-fit object-contain sm:obeject-top' />
                    <div className='space-y-2'>
                        <p className='grid-subtext text-center'>Contact Me</p>
                          <div className='copy-container ' onClick={handleCopy }>
                            <img src={hasCopied ? '/assets/tick.svg' : '/assets/copy.svg'} alt="copy" />
                               <p className='lg:text-2xl md:text-xl font-medium text-gray_gradient text-white'>ayushkumarrai2@gmail.com</p>
                          </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
  )
}

export default About