import {calender,location, email, facebook, github, instagram, linkedin, mobile, profile_photo, about, resume1, work1, projects, contact, experience, cpp, javascript, typescript, react, nextjs, tailwindcss, python, figma, docker} from './assets'
import { useState } from 'react'
import {resume} from './assets'
import {About, Contact, Education, Experience, Projects} from './sections'
function App() {
  const [sec,setsec]=useState("about");
  return (
    <div className=" bg-gradient-to-br from-emerald-100 to-emerald-300 min-h-screen w-full">
      <div className="flex justify-center gap-5 pt-10">
        <div className="  bg-white shadow-md shadow-gray-500 h-[65vh] w-[40vh] rounded-2xl mt-24 ml-6">
          <div className='flex justify-center mx-8'>
            <img src={profile_photo} height={25} width={180} alt="jj" className=' rounded-2xl shadow-md shadow-gray-400 absolute top-12' />
          </div>
          <div className='flex justify-center pt-3 mt-12 text-2xl font-bold font-serif'>
            Vishal Kumar
          </div>
          <div className='flex justify-center bg-gray-200 mx-20 py-1 px-2 mt-1 rounded-md text-[10px] font-medium'>
            software developer
          </div>
          <div className='flex justify-center mt-3 gap-3'>
            <a href='https://www.facebook.com/profile.php?id=100013178357228'><button className=' bg-gray-200 p-[6px] rounded-lg hover:bg-blue-500'>
              <img src={facebook} height={15} width={15} alt="" />
            </button></a>
            <a href='https://github.com/vishal-github21'><button className=' bg-gray-200 p-[6px] rounded-lg hover:bg-blue-500'>
              <img src={github} height={15} width={15} alt="" />
            </button></a>
            <a href='https://www.instagram.com/the_vishalkumar__/'><button className=' bg-gray-200 p-[6px] rounded-lg hover:bg-blue-500'>
              <img src={instagram} height={15} width={15} alt="" />
            </button></a>
            <a href='https://www.linkedin.com/in/vishal-kumar-44bba7157/'><button className=' bg-gray-200 p-[6px] rounded-lg hover:bg-blue-500'>
              <img src={linkedin} height={15} width={15} alt="" />
            </button></a>
          </div>
          <div className='bg-gray-200 mt-4 mx-6 rounded-lg'>
            <div className='grid grid-rows-4 mx-4 px-1 py-5 gap-2 justify-center'>
            <div className=' h-8 w-44 flex justify-start gap-3 border-b pb-1 border-gray-400'>
              <img src={mobile} height={14} width={14} alt="" className='pt-[2px]' />
              <div>
                <p className='text-[9px] font-semibold'>mobile</p>
                <p className='text-[11px] font-medium'>+91 7488361579</p>
              </div>
            </div>
            <div className=' h-8 w-44 flex justify-start gap-2 border-b pb-1 border-gray-400'>
              <img src={email} height={18} width={18} alt="" className='pt-[9px]'/>
              <div>
                <p className='text-[9px] font-semibold'>email</p>
                <p className='text-[11px] font-medium'>vishalkr2291981121@gmail.com</p>
              </div>
            </div>
            <div className=' h-8 w-44 flex justify-start gap-3 border-b pb-1 border-gray-400'>
              <img src={location} height={14} width={14} alt="" className='pt-[6px]'/>
              <div>
                <p className='text-[9px] font-semibold'>address</p>
                <p className='text-[11px] font-medium'>Dhanbad,Jharkhand</p>
              </div>
            </div>
            <div className=' h-8 w-44 flex justify-start gap-2 border-b pb-1 border-gray-400'>
              <img src={calender} height={16} width={16} alt="" className='pt-[7px]'/>
              <div>
                <p className='text-[9px] font-semibold'>date of birth</p>
                <p className='text-[11px] font-medium'>21-07-2003</p>
              </div>
              </div>
            </div>
          </div>
          <div className='flex justify-center mt-3'>
            <a href='./assets/Resume-4.pdf' download><button className=' bg-blue-600 rounded-[3px] py-1 px-4 text-white text-xs hover:bg-blue-700'>Download CV</button></a>
          </div>
        </div>
        <div className="mb-4 bg-white shadow-md shadow-gray-500 min-h-[90vh] w-[110vh] rounded-2xl">
          {sec==="about" && <About/>}
          {sec==="education" && <Education/>}
          {sec==="projects" && <Projects/>}
          {sec==="experience" && <Experience/>}
          {sec==="contact me" && <Contact/>}
        </div>
        <div className="  bg-white shadow-md shadow-gray-500 mt-6 h-[50vh] w-[13vh] rounded-2xl mr-32 grid grid-rows-5 gap-2 p-4">
          <button onClick={()=>setsec("about")} className={`flex justify-center ${ sec === "about" ? 'bg-purple-400 hover:bg-purple-400':'bg-gray-200'} rounded-md p-3 hover:bg-blue-400`}>
            <img src={about} alt="" />
          </button>
          <button onClick={()=>setsec("education")} className={`flex justify-center ${ sec === "education" ? 'bg-purple-400 hover:bg-purple-400':'bg-gray-200'} rounded-md p-3 hover:bg-blue-400`}>
            <img src={work1} alt="" />
          </button>
          <button onClick={()=>setsec("projects")} className={`flex justify-center ${ sec === "projects" ? 'bg-purple-400 hover:bg-purple-400':'bg-gray-200'} rounded-md p-3 hover:bg-blue-400`}>
            <img src={projects} alt="" />
          </button>
          <button onClick={()=>setsec("experience")} className={`flex justify-center ${ sec === "experience" ? 'bg-purple-400 hover:bg-purple-400':'bg-gray-200'} rounded-md p-3 hover:bg-blue-400`}>
            <img src={experience} alt="" />
          </button>
          <button onClick={()=>setsec("contact me")} className={`flex justify-center ${ sec === "contact me" ? 'bg-purple-400 hover:bg-purple-400':'bg-gray-200'} rounded-md p-3 hover:bg-blue-400`}>
            <img src={contact} alt="" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
