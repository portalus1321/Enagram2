import logo from './logo.svg';
import './App.css';
// Components
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TextCompare from './Pages/TextCompare/TextCompare';
import Sidebar from './Layout/SideBar/SideBar';
import TextCompareaaaa from './Pages/PdfConvert/PdfConvert';
function App() {

  return (
   <>
    
     <Router>
      <div className="App flex w-full h-screen flex-col lg:flex-row overflow-hidden">
        <div>
          <Sidebar />
        </div>

        <div className=" relative h-auto flex-1 bg-white p-[25px] ">
          <Routes>
            <Route path="*" element={<div className="text-2xl">Page Not Found</div>} />
            <Route path="/text-compare" element={<TextCompare />} />
            <Route path="/pdf-convert" element={<TextCompareaaaa />} />
          </Routes>
        </div>


      </div>


    </Router>
    
    </>
   
  );


}

export default App;
