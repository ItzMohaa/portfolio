import { useState } from 'react';
import {Route, Routes} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './Components/Home'
import Explore from './Components/Explore';
import { useLocation } from 'react-router-dom';
import { VariantContext } from './Components/variants';



function App() {

  const variants = {
    initial:{
        y:'-100vh',
        opacity: 0   

    },
    animate:{
        y:0,
        opacity:1,
        transition:{type:'spring', duration:1}
        
    },
    exit:{
        y:'-120vh',
        transition:{duration:0.5}
    }
    
    
};
  const location = useLocation();

 
  return (
    <div className="App">
      <div className='Main'>

        <VariantContext.Provider value={variants}>
          
        <AnimatePresence mode='wait'>
        <Routes location={location} key={location.key}>
 <Route exact path='/' element={<Home/>}/>
 <Route exact path='/Explore/*' element={<Explore/>}/>
 
        </Routes>

        
       
        </AnimatePresence>
      
        </VariantContext.Provider>
        
          

      </div>
     
    </div>
  )
}

export default App
