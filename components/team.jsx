import Image from "next/image";
const TeamContent = () => {
  const team = [
    {
      nama: "Nabilla - Chief Executive Officer",
      quote:
        " Apapun tujuannya, niatkan ibadah. sehingga esok lusa akan berbuah indah.",
    },
    {
      nama: "Fira - Chief Financial Officer",
      quote:
        " Kesuksesan akan datang kepada mereka yang sabar dan gigih",
    },
    {
      nama: "Salsa - Chief Marketing Officer",
      quote:
        " Awalnya gak berharap banyak sih, eh malah lolos tahap selanjutnya terus alhamdulillah. Aku bakal buktiin kalo TaniLand itu mampu dan hebat",
    },
    {
      nama: "Khazim - Chief Technology Officer",
      quote:
        "Arti hidup ialah terus berkembang",
    },
    {
      nama: "Riski - Chief Operating Officer",
      quote:
        "Menjadi salah satu dari Top 20 Capstone Project adalah kejutan besar bagi saya. Saya berharap TaniLand terus berkembang dan memberikan manfaat yang luas bagi banyak orang",
    },
    {
      nama: "Nizar - Project Manager",
      quote:
        "Saya Percaya bahwa kesempatan akan datang ketika saya mau belajar dan pintar menerima",
    },
  ];
  return (
    <div className="container">
      <div
        className="text-center md:text-5xl text-4xl 
        bg-gradient-to-r
        from-blue-500 to-green-500
        bg-clip-text
        text-transparent
        pb-10
        font-bold
        
        "
      >
        Memimpin Revolusi Pertanian Menuju Keberlanjutan
      </div>
      <div
        className="
        lg:flex-row
        flex
        flex-col
       items-center
        justify-center
        p-5
       
        "
      >
        <div className="p-5 justify-center  items-center  " id="about">
       
          
        
       
          <div
          className=" text-xl md:text-2xl md:pb-10 pb-5 font-bold">
         Menggenggam Ambisi untuk Menciptakan Masa Depan Tanah yang Makmur,
        Inovatif, dan Berkualitas!
          </div>
        
          <div 
          className="text-lg md:text-xl ">
            Kami Berkomitmen untuk Mengangkat Martabat Pertanian Indonesia melalui Inovasi Teknologi dan Efisiensi.<br/> Bersama-sama, Kami Membangun Jembatan Antara Tradisi dan Modernitas, Mewujudkan Pertanian yang Berkelanjutan, Efisien, dan Unggul di Era Digital.
          </div>
         
        </div>
        <div>
     
          
          <Image
            className="rounded-xl lg:w-fill w-full shadow-lg  "
            src="/content/img3.JPG"
            sizes="100vw"
      style={{
        height: '100%',
        width: 'auto',
      }} width={500} height={300} alt="logo"/>
        </div>
      </div>

      <div className="grid md:grid-cols-3 p-5 gap-5 ">
      {/* <div className="grid grid-cols-3 gap-4"> */}
        {team.map((i, index) => (
          <div key={index}>
            <figure className=" border-[1px] rounded-xl h-full flex flex-col justify-between dark:bg-black bg-white shadow-xl overflow-hidden rotate-0 hover:scale-105 transform transition-all duration-500 ease-in-out">
              <blockquote className="p-8">
                <div className="mb-5">
                  <svg width="45" height="36" className="fill-current">
                    <path d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 5.184-10.656 9.792-13.536L38.183.001z"></path>
                  </svg>
                </div>
                <p className="font-bold text-lg">{i.quote}</p>
                {i.nama}
              </blockquote>
              <div className=" flex justify-between items-center  px-8 py-4 ">

              {/* <div className="flex items-center gap-5 font-mono pt-4">
                <div className="rounded-full  bg-black p-5 h-14 w-14">
                </div>
                </div>
                <figcaption>
                    <div>
                        
                    </div>
                </figcaption> */}
              </div>
            </figure>
          </div>  
        ))}
      </div>


      
    </div>
  );
};

export default TeamContent;
