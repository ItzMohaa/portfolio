import { motion } from "framer-motion";
import { Link, Route, Routes } from "react-router-dom";
import Navbar from "./ExploreComponents/Navbar";
import {VariantContext} from './variants'
import { useContext } from 'react';
import {HiMenu} from 'react-icons/hi'
import { useState} from "react";
import { AnimatePresence } from "framer-motion";
import {MdArrowBack} from 'react-icons/md'




const Explore = () => {
    
    const variants = useContext(VariantContext);

    const mobilevar = {
        exit:{
            height:0,
            opacity:0,


            transition:{
                ease:'easeInOut',
                duration:0.3,
                delay:0.7

            }
        }
    }
    const [Nav, setNav] = useState(false)
   
    
    
    return ( 
        <motion.div variants={variants} initial='initial' animate='animate' exit='exit' className="Explore">
            <Link to='/'><MdArrowBack className= 'absolute text-4xl m-4 z-10'/></Link>
            <HiMenu onClick={()=>{setNav(!Nav)}} id = 'hamburger' className="text-4xl float-right m-4 fixed"/>
            <Navbar/>

            {Nav &&
            <AnimatePresence>
            <motion.div variants={mobilevar} initial={{height:0, opacity:0}} animate={{height:'100%', opacity:1}} exit='exit' className="MobileNav">
                <ul>
               <Link to = '/About'> <li>About</li></Link>
               <Link to = '/Skills'><li>Skills</li></Link> 
               <Link to = '/Projects'> <li>Projects</li></Link>
            </ul>
                </motion.div>

           
                </AnimatePresence>}


            
        </motion.div>
     );
}
 
export default Explore;