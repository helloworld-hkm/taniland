import ActionButton from "./action-button";
import Logo from "./logo";
import NavigationBar from "./navigation-bar";
import { ModeToggle } from './toggle';


const Navbar = () => {
    return ( 
        <div className="
        flex 
        justify-between
        items-center px-10 border-b
        py-2 h-30
        ">
        <Logo/>
        <NavigationBar/>

        <ActionButton/>
        </div>
     );
}
 
export default Navbar;