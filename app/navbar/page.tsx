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
      
        ">
        <Logo/>
        <NavigationBar/>

        <ActionButton/>
        </div>
     );
}
 
export default Navbar;