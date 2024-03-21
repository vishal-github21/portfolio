import { cpp, docker, figma, github, javascript, nextjs, python, react, tailwindcss, typescript } from "../assets"

const about = () => {
  return (
    <div className='m-12'>
            <h1 className='text-2xl font-semibold font-mono'>About</h1>
            <div className='h-1 w-24 bg-orange-500 ml-2'></div>
            <p className='pr-[68px] mt-5 text-sm'>I'm a computer engineering student from Dhanbad, India. I have expertise in Competetive Programming, Web Development and Designing. I enjoy to solve complex problems and I always adapt to different situations quickly.</p>
            <br />
            <p className='pr-24 text-sm'>My Aim is to create an impact in the Tech world with my knowledge and skills. I also Aim to meet many awesome people in my journey of software developer.</p>
            <h1 className='text-xl font-medium font-mono mt-10 underline'>Tech stacks and skills</h1>
            <div className='grid grid-cols-7 mx-7 gap-10 pt-4'>
              <img src={cpp} alt=""/>
              <img src={javascript} alt=""/>
              <img src={python} alt=""/>
              <img src={react} alt=""/>
              <img src={nextjs} alt=""/>
              <img src={tailwindcss} alt="" className='mt-2'/>
              <img src={github} alt=""/>
              <img src={typescript} alt=""/>
              <img src={figma} alt="" height={30} width={30}/>
              <img src={docker} alt=""/>
            </div>
            <h1 className='text-xl font-medium font-mono mt-10 underline'>Achievements</h1>
            <div className='ml-8 mt-3 text-sm font-mono'>
              <li>leetcode global rank under 2 lakh</li>
              <li>codechef global rank under 18 thousand</li>
              <li>3 star at codechef</li>
              <li>994 at codeforces</li>
              <li>rank 4th at bitcode july 2023 conducted by hnccbits</li>
              
            </div>
          </div>
  )
}

export default about