import Image from "next/image";
const AppSection = () => {
    return ( 
    <div className="items-center flex justify-center md:py-10 container pt-10" id="product">
        <div className="text-center md:text-5xl text-4xl 
        bg-gradient-to-r
        from-black to-green-500
        bg-clip-text
        text-transparent
        pb-5
        font-bold
        
        ">
            Aplikasi Manajemen Pertanian Berbasis Teknologi

            <div className="justify-center items-center flex md:pt-10 p-10">
                
                <Image className="rounded-xl  " src="/content/mock.png" layout="responsive"  width={100}   height={100} objectFit="cover" alt="logo" />

            </div>

        </div>
    </div> );
}
 
export default AppSection;