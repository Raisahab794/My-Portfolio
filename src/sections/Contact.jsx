import React from 'react'
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2';
const Contact = () => {
    const formRef = React.useRef();
    const  [loading, setLoading] = React.useState(false);
    const [form, setForm] = React.useState({
        name: '',
        email: '',
        message: ''
    });
    const handleChange=({target:{name,value}})=>{
        setForm({...form,[name]:value})
    }

    const handleSubmit = async (e) => {
      e.preventDefault()
      setLoading(true)
  
      try {
        const result = await emailjs.sendForm('service_wawseb2', 'template_w4dgr9l', formRef.current, 'he93AdJNSIboGP9Gl')
        console.log(result.text)
        setLoading(false)
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully!',
          text: 'Thank you for reaching out. I will get back to you soon.',
          confirmButtonText: 'OK',
          confirmButtonColor: '#3085d6'
        })
        setForm({
          name: '',
          email: '',
          message: ''
        })
      } catch (error) {
        console.log(error.text)
        setLoading(false)
        Swal.fire({
          icon: 'error',
          title: 'Failed to Send Message',
          text: 'There was an error sending your message. Please try again later.',
          confirmButtonText: 'OK',
          confirmButtonColor: '#d33'
        })
      }
    }


    // const handleSubmit = async (e) => {
    //   e.preventDefault();
    //   setLoading(true);
    
    //   try {
    //     const result = await emailjs.sendForm('service_wawseb2', 'template_w4dgr9l', formRef.current, 'he93AdJNSIboGP9Gl');
    //     console.log(result.text);
    //     setLoading(false);
    //     alert('Message sent successfully!');
    //     setForm({
    //       name: '',
    //       email: '',
    //       message: ''
    //     });
    //   } catch (error) {
    //     console.log(error.text);
    //     setLoading(false);
    //     alert('Failed to send the message, please try again later.');
    //   }
    // };
    // service_wawseb2




  return (
    <section className='c-space my-20'>
        <div className='relative min-h-screen flex items-center justify-center flex-col'> 
           <img src="assets/terminal.png" alt="terminal"  className='absolute inset-0 min-h-screen'/>
           <div className='contact-container'>
           <h3 className='head-text'>Let's talk</h3>
           <p className=' text-lg text-white-600'>
                I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
           </p>
              <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col space-y-7'>


                     <label className='space-y-3'>
                       <span className='field-label'>Full Name</span>
                       <input type="text" name="name" value={form.name} onChange={handleChange} className='field-input'required placeholder='Enter your name'/>
                     </label>
                        <label className='space-y-3'>
                        <span className='field-label'>Email</span>
                        <input type="email" name="email" value={form.email} onChange={handleChange }     required className='field-input' placeholder='Enter your Email'/>
                        </label>
                        <label className='space-y-3'>
                        <span className='field-label'>Message</span>
                        <textarea name="message" value={form.message} onChange={handleChange} className='field-input' />
                        </label>
                        <button type="submit" className='field-btn' disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}
                            <img src="/assets/arrow-up.png" alt="arrow" className='field-bt_arrow' />
                        </button>

               </form>
               
           </div>
        </div>
        
    </section>
  )
}

export default Contact