import logo from './logo.svg';
import './App.css';
import Spline from '@splinetool/react-spline';
// Components
import Projectlist from './Comps/projectlist';
import Comment from './Comps/Comment';
import ScrollSlider from './Comps/Carousel';
import ScrollSlback from './Comps/Carbehind';
import MatrixRain from './Comps/matrix';
import Social from './Comps/Social';
import { useState } from 'react';
import { getProjects } from './Data/Deployment';
function App() {
  const [value, setValue] = useState(0); // holds the id
  const deployments = getProjects();

  // find the project for the current value
  const selectedProject = deployments.find((p) => p.id === value);

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gradient-to-r to-black from-emerald-500  overflow-hidden'>
      <div className='absolute z-[3] top-0 left-0 w-[35vw] border-[5px] my-[1vh] mx-[1vw]  font-sans bg-black/10 backdrop-blur-md border-white/20 px-10 py-2 rounded-[15px] shadow-lg origin-top-left hidden sm:block'>
        <Projectlist onHoverChange={(newVal) => setValue(newVal)} />

      </div>
      {value !== 0 && (
        <div
          className='absolute m-[1vh] top-0 z-[1] left-[36vw] font-sans px-[1vw] py-[1vh] border-[5px] bg-black/10 backdrop-blur-sm border-white/20 rounded-[15px] shadow-lg min-w-0 font-semibold leading-6 text-white space-y-10 scale-[80%] origin-top-left'>
          <h1 className="text-[20px] md:text-[30px]">
            {selectedProject ? selectedProject.projectName : "JLPT Learning Website"}
          </h1>
          <ul className='list-disc list-inside text-gray-400 space-y-3'>
            <li>
              {selectedProject
                ? selectedProject.information
                : "Hover over a project to see its description"}
            </li>

          </ul>
        </div>
      )}
      <div className='absolute top-0 right-0 w-full h-full z-[2]'>
        <Spline className='absolute bottom-0'
          scene="https://prod.spline.design/pI9fiZZlrcky4Rvu/scene.splinecode"
        />
      </div>
      <div className='absolute bottom-[70px] sm:bottom-[20px] scale-[80%] right-[1vw] sm:right-[180px] z-[3] w-[122.5vw] sm:w-[70vw] font-sans border-[5px] bg-black/10 backdrop-blur-sm border-white/20 rounded-[15px] shadow-lg p-2 origin-bottom-right'>
        <Comment />
      </div>
      <div className='w-[100vw] h-full absolute top-0 overflow-hidden'>


        <div className=' absolute top-1/2 -translate-y-1/2 -right-2/3 w-full z-20' >

          <ScrollSlider />
        </div>
        <div className='absolute top-1/2 -translate-y-1/2 -right-2/3 w-full z-0' >

          <ScrollSlback />
        </div>
      </div>
      <div className='m-[10px] sm:m-[30px] absolute leading-1 top-0 text-right right-[10px] w-[700px] h-[100px] text-[30px] text-emerald-400 z-[0] flex justify-end items-center scale-[80%] origin-top-right sm:text-[50px] md:text-[70px]'>
        ? O R T A L U $
        <p className='absolute sm:text-[15px] w-[700px] bottom-[10px] sm:bottom-[-20px] text-right right-[0px] flex justify-end text-[10px]'> <div className='hidden sm:block'> published __ by</div> [] <p className='font-serif font-bold'>{' [ '}</p> [papuna datunashvili] <p className='font-serif font-bold '>{' ] '}</p></p>
      </div>

      <div className='relative h-[100vh] w-[100vw]  overflow-hidden'>
        <div className=' left-0 h-full z-0 opacity-30 absolute top-[10px] w-[700px]'>
          <MatrixRain />
        </div>
      </div>

      <div className='absolute m-[10px] sm:m-[30px] right-[10px] z-30 top-[100px] sm:top-[170px] scale-[80%] origin-top-right'>
        <Social />
      </div>

      <div className="absolute m-[10px] bottom-0 overflow-hidden left-0 w-[30vw] h-[30vh]  rounded-xl">
        {value !== 0 && (<iframe src={selectedProject.href} className="border-none relative w-[100vw] h-[100vh] scale-[0.3333] origin-top-left"></iframe>)}

      </div>
      <div className=' w-[140px] h-[36px] rounded-[10px] bg-gray-800 right-0 bottom-0 absolute m-[20px] z-[11]'>

      </div>

      {/* <div className='absolute bottom-0 left-0 w-full h-[100px] bg-black/10 backdrop-blur-md border-t border-white/20 z-20 flex items-center justify-center'>
        <p className='text-white text-sm'>© 2023 My Portfolio. All rights reserved.</p> 
      </div> */}
    </div>
  );


}

export default App;
