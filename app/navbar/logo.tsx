import  Image  from "next/image";
const Logo = () => {
    return ( 
        <div className="flex flex-row gap-2" >
        <Image src="/images/logo-full.png" width={200} height={200} alt="logo" />
        {/* <h1 className="font-bold "> TaniLand</h1> */}
        
        </div>
     );
}
 
export default Logo;