import React from 'react';
import "./App.css"
import ReactVidioPlayer from './components/ReactVidioPlayer';
import ProgramAbout from './components/ProgramAbout';
import Voit from './components/Voit';
import multik from "./videos/multik.mp4"
import SectionDescrition from './components/SectionDescrition';
  
function App() {
    return (
      <div className="App">
        <div className='sectionVideo'>
            <ReactVidioPlayer videoPath={multik}/>
        </div>
        <ProgramAbout/>
        <div style={{height:"100px"}}>
           {/* Time Block */}
        </div>
        <Voit/>
      </div>
    );
}

  export default App;
