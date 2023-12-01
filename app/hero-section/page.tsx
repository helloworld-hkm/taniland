import { Button } from "@/components/ui/button";

const HeroSection = ()=>{
    return(
    <section className="md:py-20 py-10 ">
        <div className="container mx-auto text-center">
            <div className="sm:text-6xl text-5xl flex justify-center font-bold md:px-20 pb-10 text-gradient bg-gradient-to-r from-blue-500 to-green-300 bg-clip-text text-transparent">
            Menciptakan Masa depan Pertanian Indonesia yang Berkelanjutan dan Sejahtera
            </div>
            <p className="text-lg md:text-xl md-10  bg-gradient-to-r from-black to-green-500 bg-clip-text text-transparent dark:text-white font-bold">Temukan Solusi Inovatif Untuk Manajemen Lahan Pertanian Anda . Ayo Mulai Kerja Cerdas Bersama TaniLand !</p>
            <div className=" flex gap-4 justify-center pt-10 ">
                <Button className="text-lg">Download</Button>
                <Button className="text-lg" variant="secondary">Learn More</Button>

            </div>
        </div>
    </section>
    )

}

export default HeroSection;