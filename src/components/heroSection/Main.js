const Main = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 mt-32 '>
      <div className='max-h-[500px] relative'>
        <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
            <h1 className='px-4 text-4xl sm:text-3xl md:text-6xl lg:text-7xl font-bold'>Welcome <span className='text-orange-500'> To Islamia</span></h1>
            <h1 className='px-4 text-4xl sm:text-3xl md:text-6xl lg:text-7xl font-bold '><span className='text-orange-500'>Donation</span> <span>Site</span></h1>
        </div>
        <img
         className='w-full max-h-[500px] object-cover  ' src="https://www.app.com.pk/wp-content/uploads/2023/08/EuuF_qfVoAcRG11-e1711002680673.jpg" alt="" />
      </div>
    </div>
  )
}

export default Main