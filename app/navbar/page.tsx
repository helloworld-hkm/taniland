'use client'
import ActionButton from "./action-button";
import Logo from "./logo";
import NavigationBar from "./navigation-bar";


const Navbar = () => {
    return ( 
        <div className="
        flex 
        justify-between
        items-center px-20 border-b
        py-2 h-24
        fixed w-full
        bg-white 
        z-50
        ">
        <Logo/>
        <NavigationBar/>

        <ActionButton/>
        </div>
     );
}
 
export default Navbar;