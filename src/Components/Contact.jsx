import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import toast, { Toaster } from 'react-hot-toast';
import {motion} from 'framer-motion';

const Contact = () => {

    const [formdata, setFormdata] = useState({
        name:"",
        email:"",
        message:""
    })

    const [errors, setErrors] = useState({});

    const [isSending, setIsSending] = useState(false);

    const handleChange = (e)=>{
        const {name, value} = e.target;
        setFormdata({
          ...formdata,
          [name]: value
        })
    }

    const validate = ()=>{
      let errors = {};
      if(!formdata.name){
        errors.name = "Name is Required"
      }
      if(!formdata.email){
        errors.email = "Email is Required"
      }else if(!/\S+@\S+\.\S+/.test(formdata.email)){
        errors.email = "Email is Invalid"
      }
      if(!formdata.message){
        errors.message = "Message is Required"
      }
      return errors;
    }

    const handleSubmit = (e)=>{
      e.preventDefault();
      const validateErrors = validate();
      if(Object.keys(validateErrors).length>0){
        setErrors(validateErrors);
      }else{
        setErrors({});
        setIsSending(true);

        emailjs
          .send(
            "service_ah49mps",
            "template_25pno4n",
            formdata,
            "hehNdOxJMiTb5RMir"
          )
          .then((res)=>{
            toast.success("Message sent successfully");
            setFormdata({
              name:"",
              email:"",
              message:""
            });
            console.log(res);
          })
          .catch((err)=>{
            console.log("FAILED",err);
            toast.error("Failed to send Message. Please try again later.");
          })
          .finally(()=>{
            setIsSending(false);
          })
      }
    }

  return (
    <div className=' border-b border-neutral-800 pb-4 pt-16' id='hire'>
      <Toaster/>
      <h1 className='my-16 text-center text-4xl'> Contact <span className='text-neutral-500'>Me </span></h1>
      <div className='flex flex-wrap align-middle items-center justify-center'>
        <div className='p-2 flex flex-col lg:flex-row gap-10'>
          <div className='lg:w-1/2 flex flex-wrap'>
            <motion.p className=' bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-xl tracking-tight text-transparent' whileInView={{y:0, opacity:1}} initial={{y:-90,opacity:0}} transition={{duration:2}}>Got a question, a project idea, or want to <b>Hire Me </b>? <br />I’d love to hear from you! Fill out the form, and I’ll be in touch shortly. Let’s create something amazing together!
            </motion.p>
          </div>
          <motion.form onSubmit={handleSubmit} whileInView={{y:0, opacity:1}} initial={{y:-90,opacity:0}} transition={{duration:2}} className='lg:w-1/2'>
            <div className='flex justify-center mb-8'>
              <div className='w-full'>
                <input type="text" id='name' name='name' value={formdata.name} placeholder='Name' onChange={handleChange} className='mb-2 w-full appearance-none rounded-lg border border-purple-900 bg-transparent px-3 py-2 text-sm focus:border-purple-500 focus:outline-none'/>
                {errors.name && (
                  <p className='text-sm text-rose-800'>{errors.name}</p>
                )}
              </div>
            </div>
            <div className='flex justify-center mb-8'>
              <div className='w-full'>
                <input type="email" id='email' name='email' value={formdata.email} placeholder='Email' onChange={handleChange} className='mb-2 w-full appearance-none rounded-lg border border-purple-900 bg-transparent px-3 py-2 text-sm focus:border-purple-500 focus:outline-none'/>
                {errors.email && (
                  <p className='text-sm text-rose-800'>{errors.email}</p>
                )}
              </div>
            </div>
            <div className='mb-8 flex justify-center'>
              <div className='w-full'>
                <textarea id='message' name='message' value={formdata.message} placeholder='Message' onChange={handleChange} className='w-full appearance-none rounded-lg border border-purple-900 bg-transparent px-3 py-2 text-sm focus:border-purple-500 focus:outline-none' rows={5}/>
                {errors.message && (
                  <p className='text-sm text-rose-800'>{errors.message}</p>
                )}
              </div>
            </div>
            <button type='submit' className={`mb-8 p-2 w-full rounded border border-purple-200 bg-purple-200 text-sm font-semibold text-stone-900 hover:bg-purple-400 ${
              isSending? "cursor-not-allowed opacity-50" : ""
            }`} disabled={isSending}>
              <div className='flex items-center justify-center gap-2'>
                {isSending? "Sending....":"Send"}
              </div>
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  )
}

export default Contact