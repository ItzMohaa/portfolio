import img from '../assets/img.jpg'
import { motion } from 'framer-motion';
import {BsYoutube, BsGithub, BsTwitter, } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import {VariantContext} from './variants'
import { useContext } from 'react';


const Home = () => {

    const variants = useContext(VariantContext)

    

 
    return ( 
        <motion.div variants={variants} initial='initial' animate='animate'  exit='exit' className="Home">
        <img src={img} alt='img'/>
        <h1>MOHAMMED MAHMOUD</h1>
        <h3>FRONT END DEVELOPER</h3>
        <p>UI/UX DESIGNER</p>

        <Link to='/Explore'><motion.button  whileHover={{scale:1.2}} className='explorebtn'>EXPLORE</motion.button></Link>

        <div className='socials'> 
        <BsTwitter/>
        <BsGithub/>
        <BsYoutube/>
        </div>
        </motion.div>
     );
}
 
export default Home;