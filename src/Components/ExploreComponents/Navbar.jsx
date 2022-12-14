import { motion } from "framer-motion";
const Navbar = () => {
    return (
        <motion.div className="navbar" id="navbar">
            <ul>
                <motion.li whileHover={{scale: 1.4}}>About</motion.li>
                <motion.li whileHover={{scale: 1.4}}>Skills</motion.li>
                <motion.li whileHover={{scale: 1.4}}>Projects</motion.li>
            </ul>
        </motion.div>
      );
}
 
export default Navbar;