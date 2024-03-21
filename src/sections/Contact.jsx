const Contact = () => {
  return (
    <div className='m-12'>
            <h1 className='text-2xl font-semibold font-mono'>Contact me</h1>
            <div className='h-1 w-36 bg-orange-500 ml-3'></div>
            <div className="m-5 mt-8 h-[60vh] bg-gray-200 rounded-xl">
              <p className="text-gray-700 text-md pt-9 pl-9 font-mono">I'm always open to be contacted</p>
              <div className="mx-16">
                <input type="text" placeholder="name" className="w-full mt-16 border-b border-black bg-transparent border-opacity-35"/>
                <input type="email" placeholder="email" className="w-full mt-8 border-b border-black bg-transparent border-opacity-35"/>
                <input type="textarea" placeholder="message" className="w-full mt-8 border-b border-black bg-transparent border-opacity-35"/>
                <button className="rounded-lg bg-green-600 text-white px-4 py-1 mt-8 text-sm hover:bg-green-700">submit</button>
              </div>
            </div>
          </div>
  )
}

export default Contact