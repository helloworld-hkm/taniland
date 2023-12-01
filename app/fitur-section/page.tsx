import Image from "next/image";



const FiturSection = () => {
    return (
        <div className="container mx-auto">
            <div className="flex-col items-center justify-center">
          <div className="text-center text-3xl md:text-5xl font-bold pt-5 pb-10 bg-gradient-to-r bg-clip-text from-blue-500 to-green-500 text-transparent">
            Fitur -Fitur Aplikasi
          </div>
         
        </div>
        <div
          className="
          lg:flex-row
          flex
          flex-col
         items-center
          justify-center
          pb-10
          "
        >
          <div className="p-5 justify-center  items-center text-right">
            <div className="text-gradient bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent pb-5 text-4xl md:text-5xl font-bold ">
              Manajemen Lahan
            </div>
         
            <div className="text-2xl ">
              Pengguna dapat dengan mudah mengelola lahan, mencatat kegiatan,dan memenuhi kebutuhan dengan fitur manajemen lahan yang intuitif dan informatif
            
            </div>
          </div>
          <div>
            <Image
              className="rounded-xl w-fill  "
              src="/content/Frame1.png"
              sizes="100vw"
        style={{
          height: '100%',
          width: 'auto',
        }}
        width={500}
        height={300}
             
              alt="logo"
            />
          </div>
        </div>
        
        <div
          className="
          lg:flex-row
          flex
          flex-col
         items-center
          justify-center
          pb-10
          "
        >
             <div>
            <Image
              className="rounded-xl w-fill  "
              src="/content/Frame3.png"
              sizes="100vw"
        style={{
          height: '100%',
          width: 'auto',
        }}
        width={500}
        height={300}
             
              alt="logo"
            />
          </div>
          <div className="p-5 justify-center  items-center  ">
            <div className="text-gradient bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent pb-5 text-4xl md:text-5xl font-bold ">
             Monitoring Lahan
            </div>
         
            <div className="text-2xl ">
              Memungkinkan pengguna untuk memantau lahan menggunakan alat Iot yang disediakan, termasuk kemampuan untuk melihat hama yang terperangkap dialat, memberikan informasi langsung untuk tindakan pencegahan yang lebih efektif
            
            </div>
          </div>
         
        </div>

        <div
          className="
          lg:flex-row
          flex
          flex-col
         items-center
          justify-center
          pb-10
          "
        >
          <div className="p-5 justify-center  items-center text-right">
            <div className="text-gradient bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent pb-5 text-4xl md:text-5xl font-bold ">
              Forum Diskusi Petani
            </div>
         
            <div className="text-2xl ">
              Platform interaktif dimana petani dapat berbagi pengalaman, bertukar informasi terkini, dan mendiskusikan tantangan serta solusi dalam pertanian
            
            </div>
          </div>
          <div>
            <Image
              className="rounded-xl w-fill  "
              src="/content/Frame2.png"
              sizes="100vw"
        style={{
          height: '100%',
          width: 'auto',
        }}
        width={500}
        height={300}
             
              alt="logo"
            />
          </div>
        </div>
        
        
      </div>
        );
}
 
export default FiturSection;