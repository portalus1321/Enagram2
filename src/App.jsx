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
    <div className='flex flex-col items-center justify-center h-screen bg-gradient-to-r to-black from-emerald-500'>
      <div className='absolute z-30 top-0 left-0 w-[35vw] border-[5px] m-[10px] bg-black/10 backdrop-blur-md border-white/20 px-10 py-2 rounded-[15px] shadow-lg scale-[80%] origin-top-left'>
        <Projectlist onHoverChange={(newVal) => setValue(newVal)}/>
       
      </div>
{value !== 0 && (      
      <div
       className='absolute mt-[10px] top-0 z-10 left-[35vw] w-1/4 p-10 border-[5px] bg-black/10 backdrop-blur-sm border-white/20 rounded-[15px] shadow-lg min-w-0 font-semibold leading-6 text-white space-y-10 scale-[80%] origin-top-left'>
        <h1 className="text-3xl">
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
      <div className='absolute top-0 right-0 w-full h-full z-10'>
           <Spline className='absolute bottom-0 z-2'
        scene="https://prod.spline.design/pI9fiZZlrcky4Rvu/scene.splinecode" 
      />
      </div>
      <div className='absolute bottom-[10px] right-[10px] w-[180px] h-[60px] z-20 flex bg-black items-center justify-center rounded-[15px] border-white/20 border-[5px] '></div>
      <div className='absolute bottom-[10px] right-[200px] z-30 w-[800px] border-[5px] bg-black/10 backdrop-blur-sm border-white/20 rounded-[15px] shadow-lg p-2 scale-[80%] origin-bottom-right'>
        <Comment />
      </div>  
       <div className='absolute top-2/5 -right-2/3 w-full z-20' >
        
       <ScrollSlider/>
       </div>
       <div className='absolute top-2/5 -right-2/3 w-full z-0' >
        
       <ScrollSlback/>
       </div>
      <div className='m-[30px] absolute leading-1 top-0 text-right right-[10px] w-[700px] h-[100px] text-[70px] text-emerald-400 z-20 flex justify-end items-center scale-[80%] origin-top-right'>
        ? O R T A L U $
        <p className='absolute text-[15px] w-[700px] bottom-[-20px] text-right right-[0px] flex justify-end'>published __ by [] <p className='font-serif font-bold'>{' [ '}</p> [papuna datunashvili] <p className='font-serif font-bold'>{' ] '}</p></p>
      </div>
      <div className=' left-0 h-full z-0 opacity-30 absolute top-[10px] w-[700px]'>
        <MatrixRain />
      </div>
      <div className='absolute right-10 z-30 top-[170px] scale-[80%] origin-top-right'>
        <Social />
      </div>
    
        <div className="absolute m-[10px] bottom-0 overflow-hidden left-0 w-[30vw] h-[30vh]  rounded-xl shadow-lg">
          {value !== 0 && (<iframe src={selectedProject.href} className="border-none relative w-[100vw] h-[100vh] scale-[0.3333] origin-top-left"></iframe>)}
          
        </div>

      {/* <div className='absolute bottom-0 left-0 w-full h-[100px] bg-black/10 backdrop-blur-md border-t border-white/20 z-20 flex items-center justify-center'>
        <p className='text-white text-sm'>© 2023 My Portfolio. All rights reserved.</p> 
      </div> */}
    </div>
  );


}

export default App;
