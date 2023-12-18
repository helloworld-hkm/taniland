
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
  import Link from "next/link"
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
                        <Link href="#about"> About</Link>
                        <Link href="#product"> Product</Link>
                        <Link href="#contact"> Contact us</Link>
                        <Button asChild><Link href="/download">Download App</Link></Button>
                        <ModeToggle/>
                    </div>
                </SheetDescription>
            </SheetContent>
        </Sheet>
    </div> 

        <div className="hidden md:flex md:space-x-4">
        <Button asChild><Link href="/download">Download App</Link></Button>
        <ModeToggle/>
        </div>

    </>
    );
}
 
export default ActionButton;