
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
                        <Link href=""> About</Link>
                        <Link href=""> Download</Link>
                        <Link href=""> Contact us</Link>
                        <Link href=""> Pricing</Link>
                        <ModeToggle/>
                    </div>
                </SheetDescription>
            </SheetContent>
        </Sheet>
    </div> 

        <div className="hidden md:flex md:space-x-4">
        <ModeToggle/>
        </div>

    </>
    );
}
 
export default ActionButton;