
import {Button} from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import {AlignJustify} from "lucide-react"
  import { Link, Element } from 'react-scroll'
import { ModeToggle } from "./toggle"
const ActionButton = () => {
    return ( 
        <>
    <div className="md:hidden">
        <Sheet>
            <SheetTrigger>
                <AlignJustify className="pt-1"/>
            </SheetTrigger>
            <SheetContent>
                <SheetDescription>
                    <div className="flex flex-col space-y-4 items-start w-full text-lg  mt-10">
                    <Link activeClass="active" to="about" spy={true} smooth={true} offset={-300} duration={500} >  About</Link>
                    <Link activeClass="active" to="iot" spy={true} smooth={true} offset={-100} duration={500} >   Product</Link>
                    <Link activeClass="active" to="contact" spy={true} smooth={true} offset={0} duration={500} >  Contact us</Link>
                        <Button asChild><a href="https://play.google.com/store/apps/details?id=id.taniland.m">Download App</a></Button>
                        <ModeToggle/>
                    </div>
                </SheetDescription>
            </SheetContent>
        </Sheet>
    </div> 

        <div className="hidden md:flex md:space-x-4">
        <Button asChild><a href="https://play.google.com/store/apps/details?id=id.taniland.m">Download App</a></Button>
        <ModeToggle/>
        </div>

    </>
    );
}
 
export default ActionButton;