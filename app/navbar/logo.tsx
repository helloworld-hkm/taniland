import  Image  from "next/image";
import { Link, Element } from 'react-scroll'
const Logo = () => {
    return ( 
        <div className="flex flex-row gap-2" >
        <Link activeClass="active" to="hero" spy={true} smooth={true} offset={0} duration={500} >  
        <Image className="hidden sm:block dark:bg-white dark:bg-clip-text" src="/images/logo-2x.png" width={200} height={200} alt="logo" />
        <Image className=" block sm:hidden" src="/images/logo-simpel.png" width={30} height={30} alt="logo" />
        {/* <h1 className="font-bold "> TaniLand</h1> */}
        </Link>
        </div>
     );
}
 
export default Logo;