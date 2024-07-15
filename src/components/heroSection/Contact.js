import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import ContactImg from '../assest/contact.png';

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      mobile: '',
      message: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Full name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      mobile: Yup.string()
        .matches(/^[0-9]{11}$/, 'Invalid mobile number')
        .required('Mobile number is required'),
      message: Yup.string().required('Message is required')
    }),
    onSubmit: (values) => {
      console.log(values);
      // Handle form submission
    }
  });

  return (
    <section id='contact' className='w-[90%] m-auto flex lg:flex-row flex-col justify-between items-center gap-28 py-20'>
      <div className='lg:w-[50%] w-full'>
        <img data-aos='zoom-in' data-aos-delay='200' src={ContactImg} alt='contact' />
      </div>
      <div data-aos='zoom-in' data-aos-delay='400' className='lg:w-[50%] w-full flex flex-col justify-center items-start gap-8 bg-black lg:p-16 p-8  rounded-3xl ml-7'>
        <h1 className='text-white text-[45px] font-semibold font-ubuntu'>Let's Contact Us</h1>
        <form id='form-box' className='w-full bg-transparent flex flex-col justify-center items-center gap-4' onSubmit={formik.handleSubmit}>
          <input 
            type='text' 
            className={`w-full text-white bg-slate-900 px-6 py-4 rounded-lg border-none font-ubuntu ${formik.touched.name && formik.errors.name ? 'border-red-500' : ''}`} 
            placeholder='Enter your full name here' 
            {...formik.getFieldProps('name')}
          />
          {formik.touched.name && formik.errors.name ? <div className="text-red-500">{formik.errors.name}</div> : null}

          <div className='w-full flex justify-center items-start gap-4'>
            <input 
              type='email' 
              placeholder='Enter your email'
              className={` w-full text-white bg-slate-900 px-6 py-4 rounded-lg border-none font-sans ${formik.touched.email && formik.errors.email ? 'border-red-500 mb-10' : ''}`}
              {...formik.getFieldProps('email')}
            />
            {formik.touched.email && formik.errors.email ? <div className="text-red-500">{formik.errors.email}</div> : null}

            <input 
              type='text' 
              placeholder='Enter your mobile number here'
              className={`w-full text-white bg-slate-900 px-6 py-4 rounded-lg border-none font-ubuntu ${formik.touched.mobile && formik.errors.mobile ? 'border-red-500' : ''}`}
              {...formik.getFieldProps('mobile')}
            />
            {formik.touched.mobile && formik.errors.mobile ? <div className="text-red-500">{formik.errors.mobile}</div> : null}
          </div>

          <textarea 
            className={`w-full text-white bg-slate-900 px-6 py-4 rounded-lg border-none font-ubuntu ${formik.touched.message && formik.errors.message ? 'border-red-500' : ''}`} 
            placeholder='Enter your message' 
            rows='4' 
            {...formik.getFieldProps('message')}
          ></textarea>
          {formik.touched.message && formik.errors.message ? <div className="text-red-500">{formik.errors.message}</div> : null}

          <button type="submit" className='bg-yellow-500 hover:bg-white px-6 py-4 w-full rounded-md font-semibold text-md font-ubuntu'>Submit Now</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
